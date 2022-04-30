//env file oop
require("dotenv").config();

//const { REST } = require('@dcd node_moduleiscordjs/rest);
const isDev = process.platform !== "win32";
const hostnameStatic = "znw.social",
  hostname = hostnameStatic + (isDev ? "." : ""),
  API_INTERNAL = isDev
    ? process.env.ZNW_INTERNAL_API_DEV
    : process.env.ZNW_INTERNAL_API;

var Mixpanel = require("mixpanel");

const path = require("path"),
  fetch = require("node-fetch"),
  mime = require("mime-types"),
  fs = require("fs");


// create an instance of the mixpanel client
var mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN_ZIRCORD);

process.timeouts = {};

const host = (isDev ? "http://" : "https://") + hostname;
var proxy = require("redbird")({
  port: process.platform === "win32" ? 80 : process.env.PORT,
});

const bakeClient = async (clear) => {
  const html = await (await fetch("https://discord.com/app")).text();

  let i = 0;
  let bundleScripts = "";
  let hashes = "";

  for (const script of html.split`<script src="/assets/`) {
    const asset = script.split('"')[0];
    const hash = asset.endsWith(".js")
      ? script.split('"')[0].split(".js")[0]
      : void 0;
    if (hash) {
      hashes += " " + hash;
      const code = await (
        await fetch(`https://discord.com/assets/${asset}`)
      ).text();

      bundleScripts += "\r\n" + `/*$d-hash={asset}*/${code};` + "\r\n";
    }
    i++;
  }

  fs.writeFileSync(
    __dirname + "/public/client_prod.js",
    patchDiscordAsset(bundleScripts)
  );
  fs.writeFileSync(
    __dirname + "/public/client_dev.js",
    patchDiscordAsset(bundleScripts, true)
  );

  console.warn("cached client", hashes);
};

let version;
{
  let versionPath = __dirname + "/.version";
  if (isDev) {
    var getVersion = (_) => {
      return (
        (+new Date() / 60000).toString().slice(1, 4) +
        "-" +
        (+new Date() / 60000).toString().slice(4, 7)
      );
    };
    const bakeVersion = (_) => {
      fs.writeFileSync(versionPath, getVersion());
      version = fs.readFileSync(versionPath);
    };
    setInterval((_) => {
      bakeVersion();
      bakeClient();
    }, 10 * 1000 * 60);
    bakeVersion();
    bakeClient();
  }
  version = fs.readFileSync(versionPath);
}

//const peerServer = require("peer").PeerServer({ port: 2998, path: "/voice" });

//backend
const apihost = process.env.API_HOST; //todo: change apihost subdomain to token

//node
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

// Require the fastify framework and instantiate it
const fastify = (process.fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false,
}));
require("/app/server/fastify-setup.js");

const userCache = (process.userCache = {});

const user = (id) => {
  return process.userCache[id];
};

require("/app/server/handlebars.js");

fastify.all("/*", async (req, res) => {
  if (req.url.endsWith("/clone?key=" + process.env.EXPORT_KEY)) {
    console.log("cloning");
    const archiver = require("archiver");
    const archive = archiver("zip");

    res.type = "application/zip";
    res.headers.attachment = "test.zip";
    res.send(archive);

    archive.finalize();

    const exportPath = __dirname + "/app.zip";
  }

  // params is an object we'll pass to our handlebars template
  let params = {
    //seo: seo,
    isDev,
    host: req.headers["x-forwarded-host"] || req.host,
    coffinitVersion: version,
  };

  if (req.url.endsWith("/bgm-sw.js")) {
    res.raw.writeHead(200, { "Content-Type": "text/javascript" });
    res.raw.write(fs.readFileSync(__dirname + "/public/bgm/sw.js", "utf8"));
  }

  if (req.url.endsWith(".js") || req.url.endsWith("offline.html")) {
    const path = __dirname + "/public" + req.url;
    if (fs.existsSync(path)) res.send(fs.readFileSync(path, "utf8"));
  }

  if (req.headers.authorization && !userCache[req.headers.authorization])
    try {
      userCache[req.headers.authorization] = await (
        await fetch(`http://${apihost}/api/v9/users/@me`, {
          headers: {
            authorization: req.headers.authorization,
          },
          method: "GET",
        })
      ).json();
      userCache[req.headers.authorization].token = req.headers.authorization;
    } catch {}

  let tracking = false;
  {
    const key = "CookieScriptConsent";
    const _sep = `${key}=`;
    if (req.headers["cookie"] && req.headers["cookie"].includes(_sep)) {
      var settings = JSON.parse(
        req.headers["cookie"].split(_sep)[1].split("}")[0] + "}"
      );
      if (settings.action === "accept") {
        if (settings.categories.includes("performance")) {
          tracking = true;
        }
      }
    }
  }

  if (req.url.startsWith("/api")) {
    var user = userCache[req.headers.authorization];

    if (
      req.url.includes(
        "/channels/965927532824123778/threads/search?archived=true"
      )
    ) {
      res.send({
        threads: [
          {
            id: "myIntroduction",
            guild_id: "956435419602611926",
            parent_id: "965927532824123778",
            owner_id: "486977511897694219",
            type: 11,
            name: "Workshop",
            last_message_id: "965032931460526150",
            thread_metadata: {
              archived: true,
              archive_timestamp: "2022-04-19T23:42:57.420000+00:00",
              auto_archive_duration: 4320,
              locked: false,
              create_timestamp: "2022-04-13T01:18:10.012000+00:00",
            },
            message_count: 5,
            member_count: 6,
            rate_limit_per_user: 0,
            flags: 0,
            member_ids_preview: [],
          },
        ],
      });
    }
    if (req.url.includes("/channels/966245952685972008/messages?limit=50")) {
      res.send([
        {
          id: `000`,
          channel_id: req.url.split("/channels/")[1].split("/")[0],
          guild_id: "956435419602611926",
          author_id: 956204516842923855,
          member_id: 0,
          content: `Current state of the introduction(s) for ${user.username}:`,
          timestamp: "1901-01-01T13:13:00.000Z",
          edited_timestamp: null, //"2022-03-15T11:42:28.000Z",
          tts: false,
          reactions: [],
          nonce: "0",
          embeds: [
            {
              title: `Introduction by ${user.username}#${user.discriminator}`,
              description: "test",
              color: user.accent_color,
            },
          ],
          pinned: false,
          type: 0,
          flags: 64,
          author: {
            accent_color: null,
            avatar: "",
            banner: null,
            bio: "",
            bot: false,
            created_at: "2022-03-13T11:35:42.000Z",
            deleted: false,
            disabled: false,
            discriminator: "?",
            flags: "64",
            id: "0",
            premium: true,
            premium_since: "2022-03-13T11:35:42.000Z",
            premium_type: 2,
            public_flags: 0,
            rights: "0",
            system: true,
            username: "System",
          },
          components: [],
          mentions: [],
          mention_roles: [],
          mention_channels: [],
          sticker_items: [],
          attachments: [],
        },
      ]);
    }

    if (req.url.includes("/api/internal")) {
      if (req.url.includes("/introduction") && req.method === "GET") {
        console.warn("getIntroduction", user.id);
        res.send(
          await (
            await fetch(API_INTERNAL + "/api/zircord/introduction/" + user.id, {
              "content-type": "application/json",
              method: "GET",
            })
          ).text()
        );
      }
      if (req.url.includes("/introduction") && req.method === "POST") {
        console.warn("setIntroduction", user.id);

        res.send(
          await (
            await fetch(API_INTERNAL + "/api/zircord/introduction/", {
              "content-type": "application/json",
              method: "POST",
            })
          ).text()
        );
      }
    }

    if (
      req.url.includes("/channels/966002702561591064/threads") &&
      req.method === "POST"
    ) {
      console.warn(API_INTERNAL + "/api/zircord/introduction");

      fetch(API_INTERNAL + "/api/zircord/introduction", {
        "content-type": "application/json",
        method: "POST",
        body: JSON.stringify({
          user_id: user.id,
          content: req.body.content,
        }),
      }); //.then(res=>res.json()).then(console.warn);

      res.send({
        status: "ok",
        action: "showIntroductionResponse",
        content: "introduction saved",
      });
    }

    if (req.url.includes("/api/whoami")) {
      res.send(user);
    }

    if (req.url.includes("/channels/undefined/messages?limit=50")) {
      res.send([]);
    }

    if (req.url.includes("/library")) {
      res.send([
        {
          application: {
            id: "489917602412494878",
            name: "System Shock 2",
            icon: "4622074d010e22733aeb23c917731cec",
            description: "",
            summary: "",
            type: 1,
            splash: "fd3d7bbd1c84de2362f8d26247a90cd6",
            primary_sku_id: "491326980407427082",
            third_party_skus: [
              { id: "238210", sku: "238210", distributor: "steam" },
              {
                id: "491326980407427082",
                sku: "491326980407427082",
                distributor: "discord",
              },
            ],
            hook: true,
            slug: "system-shock-2",
            guild_id: "190583485826727936",
            executables: [
              { os: "win32", name: "system shock2.exe", is_launcher: false },
              { os: "win32", name: "shock2.exe", is_launcher: false },
              { os: "win32", name: "ss2/ss2.exe", is_launcher: false },
            ],
            verify_key:
              "b43ffca157220e056ed3b324686edf33e44de1534f839194425fdb9bac2b865a",
            publishers: [
              { id: "523186062672134155", name: "Night Dive Studios" },
            ],
            developers: [
              { id: "521816677625757710", name: "Looking Glass Studios, Inc." },
            ],
          },
          branch_id: "489917602412494878",
          sku_id: "491326980407427082",
          sku: {
            id: "491326980407427082",
            type: 1,
            premium: false,
            preorder_release_at: null,
            preorder_approximate_release_date: null,
          },
          flags: 16,
          created_at: "2018-10-23T11:34:09.622000+00:00",
          entitlements: [
            {
              id: "504256212150386708",
              sku_id: "491326980407427082",
              application_id: "489917602412494878",
              user_id: "84022289024159744",
              promotion_id: null,
              type: 2,
              deleted: false,
              gift_code_flags: 0,
            },
          ],
        },
      ]);
    }

    if(req.url.endsWith("/interactions")){
      res.status(100)
      res.send('IGNORE')
      return ;
    }
    
    if (req.url.includes("/api/track")) {
      var x = Object.assign({}, req.body);
      var type = x.type;
      x.distinct_id = user.id;
      x.time = new Date();
      x.distinct_id = user.id;
      x.ip = req.headers["cf-connecting-ip"];

      delete x.type;

      mixpanel.track(type, x);
    }

    if (req.url.includes("/umami/")) {
      if (isDev || tracking) {
        fetch(`http://stats.exxo.cloud:3000/${req.url.split("/umami/")[1]}`, {
          headers: req.headers,
          method: req.method,
        });
        res.send({ status: "ok" });
      } else res.send({ status: "nok" });
    }

    if (req.url.includes("/api/status")) {
      res.send({ status: "ok" });
    }

    if (req.url.includes("/api/vlm")) {
      if (isDev || tracking) {
        if (req.url.includes("api/vlm/init")) {
          const end = req.url.split("/api/vlm/init?")[1];

          console.warn(
            `https://${Math.floor(
              Math.random() * 3 + 1
            )}.t1.volument.com/v1/init?${end}`
          );

          fetch(
            `https://${Math.floor(
              Math.random() * 3 + 1
            )}.t1.volument.com/v1/init?${end}`,
            { method: "GET", headers: req.headers }
          );
        } else
          fetch(
            `https://${Math.floor(
              Math.random() * 3 + 1
            )}.t1.volument.com/v1${req.url.replace("??", "?")}`,
            { method: "GET", headers: req.headers }
          );
        res.send("ok");
      } else res.send("nok");
    }

    if (req.url.endsWith("/member-insights")) {
      res.send([]);
    }
    if (req.url.endsWith("/users/@me/devices")) {
      res.send([]);
    }
    if (req.url.endsWith("/v9/sticker-packs")) {
      res.send({ sticker_packs: [] });
    }
    if (req.url.endsWith("/api/auth/fingerprint")) {
      res.send("o");
    }

    if (
      req.url.includes("/error") ||
      (req.url.includes("/error/") && req.url.includes("/store/?"))
    ) {
      if (tracking) {
        if (req.body.message && req.body.stacktrace) {
          Sentry.captureEvent({
            message: req.body.message,
            stacktrace: [req.body.stacktrace],
          });
        }
      }

      res.send({ status: tracking ? "ok" : "nok" });
    }

    if (
      req.url.endsWith("/users/@me/settings") &&
      JSON.stringify(req.body).includes('{"guild_folders":[')
    ) {
      var newArray = [];
      for (const entry of req.body.guild_folders) {
        entry.name = entry.name || void 0;
        entry.color = entry.name || void 0;
        newArray.push(entry);
      }

      res.send(
        await (
          await fetch(`http://${apihost}${req.url}`, {
            headers: {
              authorization: req.headers.authorization,
            },
            body: JSON.stringify({ guild_ids: newArray }),
            method: "PATCH",
          })
        ).text()
      );
    }

    if (req.method === "DELETE") {
      //forwardfix for hosts
      var _res = await fetch(`http://${apihost}${req.url}`, {
        headers: {
          authorization: req.headers.authorization,
        },
        method: "DELETE",
      });
      console.warn(_res);
      res.status(_res.status);
      res.send("");
    }

    /*const id = req.headers.authorization
      ? JSON.parse(atob(req.headers.authorization.split(".")[1])).id
      : void 0;*/

    if (userCache[req.headers.authorization]) {
      if (req.url.endsWith("/science")) {
        if (tracking) {
          mixpanel.people.set(user.id, {
            $user_name: user.username,
            $first_name: user.username,
            $last_name: "",
            $ip: req.headers["cf-connecting-ip"],
            $email: user.email,
            //    $last_name: 'Bob',
            //    $created: (new Date('jan 1 2013')).toISOString(),
            //     plan: 'premium',
            //     games_played: 1,
            //     points: 0
          });

          {
            let events = [];
            for (const ev of req.body.events) {
              let props = {};

              props = Object.fromEntries(
                Object.entries(ev.properties).map(([k, v]) => [
                  `${"discord-"}${k}`,
                  v,
                ])
              );

              props.time = new Date();
              props.distinct_id = user.id;
              props.ip = req.headers["cf-connecting-ip"];
              events.push({ event: ev.type, properties: props });
            }
            mixpanel.track_batch(events);
          }
          res.send({ status: "ok" });
        } else res.send({ status: "nok" });
      }

      //introduction proxying
      if (
        req.url.endsWith("/channels/956194049579806804/messages") &&
        req.method === "POST"
      ) {
        fetch(`http://${apihost}/api/v9/channels/956193784470433433/messages`, {
          headers: {
            authorization: process.env.ZIRCORD_PINO_TOKEN,
            "content-type": "application/json",
          },
          body: JSON.stringify({
            content: `Message by:\n<@${user.id}>`,
            embeds: [
              {
                title: `Introduction by ${user.username}#${user.discriminator}`,
                description: req.body.content,
                color: user.accent_color,
              },
            ],
            nonce: "b",
            tts: false,
          }),
          method: "POST",
          credentials: "include",
        });

        res.send({ status: "nok" });
      }

      if (
        req.method === "POST" &&
        req.url.endsWith("/channels/956469671794637059/messages")
      ) {
        res.code(500).send({
          status: "nok",
        });
        return;
      }

      if (req.url.endsWith("/interactions")) {
        await new Promise((r) => setTimeout(r, 3999)); //debounce
        res.status(500);
        res.send([]);
      }

      //limbo msg
      if (
        req.method === "GET" &&
        req.url.endsWith("/channels/968079810524979156/messages?limit=50")
      ) {
        res.send([
          {
            id: `zIntroduction`,
            channel_id: req.url.split("/channels/")[1].split("/")[0],
            guild_id: "952528253011157046",
            author_id: 956204516842923855,
            member_id: 0,
            content: `Hello, ${user.username}. Please edit / change your introduction and submit it:`,
            timestamp: "1901-01-01T13:13:00.000Z",
            edited_timestamp: null, //"2022-03-15T11:42:28.000Z",
            tts: false,
            reactions: [],
            nonce: "0",
            pinned: false,
            type: 0,
            flags: 64,
            author: {
              accent_color: null,
              avatar: "",
              banner: null,
              bio: "",
              bot: false,
              created_at: "2022-03-13T11:35:42.000Z",
              deleted: false,
              disabled: false,
              discriminator: "?",
              flags: "64",
              id: "0",
              premium: true,
              premium_since: "2022-03-13T11:35:42.000Z",
              premium_type: 2,
              public_flags: 0,
              rights: "0",
              system: true,
              username: "System",
            },

            components: [
              {
                type: 1,
                components: [
                  {
                    type: 4,
                    custom_id: "1",
                    label: "Comment",
                    style: 2,
                    min_length: 1,
                    max_length: 4000,
                    placeholder: `comments`,
                    required: false,
                    value: "",
                  },
                  {
                    type: 2,
                    label: "approve",
                    style: 3,
                    custom_id: `approve_introduction_${user.id}`,
                  },
                  {
                    type: 2,
                    label: "deny",
                    style: 4,
                    custom_id: `deny_introduction_${user.id}`,
                  },
                ],
              },
            ],
            mentions: [],
            mention_roles: [],
            mention_channels: [],
            sticker_items: [],
            attachments: [],
          },
        ]);
      }

      if (req.url.endsWith("/952554953711362830/messages?limit=50")) {
        res.send([
          {
            id: 1, //"953256858481613728",
            channel_id: "952554953711362830",
            guild_id: "952528253011157046",
            author_id: "952530389941936205",
            member_id: "952530389941936205",
            content: `Hewwo, ${user.username}! :3`,
            timestamp: "2022-03-15T11:42:25.685Z",
            edited_timestamp: null, //"2022-03-15T11:42:28.000Z",
            tts: false,
            mention_everyone: false,
            embeds: [],
            reactions: [],
            nonce: "953259679775981568",
            pinned: false,
            type: 0,
            author: {
              id: 1, //"952530389941936205",
              username: "Zircon Network",
              discriminator: "znw",
              avatar: "887ad6377c8a8c861fd2daf50eaf86e7",
              accent_color: null,
              banner: null,
              premium: true,
              premium_type: 2,
              bot: true,
              bio: "",
              system: false,
              created_at: "2022-03-13T11:35:42.000Z",
              premium_since: "2022-03-13T11:35:42.000Z",
              disabled: false,
              deleted: false,
              flags: "4",
              public_flags: 0,
              rights: "0",
            },
            mentions: [],
            mention_roles: [],
            mention_channels: [],
            sticker_items: [],
            attachments: [],
          },
        ]);
      }

      if (req.url.endsWith("/users/@me/billing/user-trial-offer")) {
        res.send({ status: "no" });
      }

      if (req.url.endsWith("/gateway/bot")) {
        //patch bot
        res.send({
          url: `ws://${hostname}`,
          shards: 1,
          session_start_limit: {
            total: 1000,
            remaining: 999,
            reset_after: 14400000,
            max_concurrency: 1,
          },
        });
      }

      /*if (
      ((req.url.endsWith("/messages") && req.method === "POST") ||
        req.url.endsWith("/users/@me")) &&
      req.method === "PATCH" &&
      user_id == "951472619960408514"
    ) {
      res.status(500);
      res.send({ status: "no" });
    }*/

      /*fetch(process.env.webhook_FossToDiscord, {
    "method":"POST",
     "headers": {"Content-Type": "application/json"},
     "body": JSON.stringify({
         username: user_id,
       avatar_url: "https://i.pravatar.cc/150?" + (+new Date()),
        "content": req.body.content
      })

    })
    .then(res=> console.log(res))
    .catch(err => console.error(err));
  
}*/
    }

    if (req.url.startsWith("/api/v9/guild-recommendations")) {
      res.send({
        recommended_guilds: [
          {
            id: "956435419602611926",
            name: "Limbo",
            features: ["PARTNERED", "VERIFIED"],
            description: "why is this visible",
            icon: "0000000000000000000000000000000000",
            approximate_presence_count: 0,
            approximate_member_count: 0,
          },
          {
            id: "958696139786418610",
            name: "Staff",
            features: ["PARTNERED", "VERIFIED"],
            description: "why is this visible",
            icon: "0000000000000000000000000000000000",
            approximate_presence_count: 0,
            approximate_member_count: 0,
          },
          {
            id: "952528253011157046",
            name: "Lobby",
            features: ["PARTNERED", "VERIFIED"],
            description: "The lobby lel",
            icon: "0000000000000000000000000000000000",
            approximate_presence_count: 0,
            approximate_member_count: 0,
          },

          {
            id: "322850917248663552",
            name: "Official Fortnite",
            features: [
              "PARTNERED",
              "PREVIEW_ENABLED",
              "PRIVATE_THREADS",
              "ROLE_ICONS",
              "SEVEN_DAY_THREAD_ARCHIVE",
              "THREADS_ENABLED",
              "THREE_DAY_THREAD_ARCHIVE",
              "VANITY_URL",
              "VIP_REGIONS",
              "WELCOME_SCREEN_ENABLED",
            ],
            description: "The Official Fortnite Discord Server! J",
            icon: "0000000000000000000000000000000000",
            approximate_presence_count: 420,
            approximate_member_count: 30,
          },
        ],
        load_id: "server_recs/f2fcd3fab46446f38a3f3159fbc275cf",
      });
    } else res.from(req.url);
    //res.send({status: req.url})
  } else if (req.url.endsWith("/bgm/bgm-sw.js")) {
    res.send(fs.readFileSync(__dirname + "/local/bgm-sw.js"));
  }

  // The Handlebars code will be able to access the parameter values and build them into the page
  else res.view("/src/pages/index.hbs", params);
});

{
  var cacheDir = __dirname + "/cache";

  if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
  }

  {
    fastify.get("/assets/**", async (req, res) => {
      if (req.url.endsWith("volument.js")) {
        return res.send(
          (
            await (
              await fetch(`https://cdn.volument.com/v1/volument.js`)
            ).text()
          )
            .replace(
              '"https://%.t1.volument.com/v1"',
              `location.protocol+"//${hostname}/api/vlm"`
            )
            .replace(
              '"https://1.t1.volument.com/v1/errors?"',
              `location.protocol+"//${hostname}/api/vlm?"`
            )
        );
      }

      const assetName = req.url.split("/").pop();
      //console.warn("proxyfying " + assetName);

      //suppress voice connect sound .-.
      if (
        req.url.endsWith("7e125dc075ec6e5ae796e4c3ab83abb3.mp3") ||
        req.url.endsWith("5dd43c946894005258d85770f0d10cff.mp3")
      ) {
        res.status(404);
        res.send(null);
      }

      var dir = cacheDir + "/assets";

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }

      const cachedAssetPath = `${dir}/${assetName}`;

      let newAsset, type;

      if (assetName.endsWith(".js") || assetName.endsWith(".css")) {
        if (fs.existsSync(cachedAssetPath)) {
          newAsset = fs.readFileSync(cachedAssetPath, "utf8");
        } else {
          console.warn(
            "caching asset",
            `http://${apihost}/assets/${assetName}`
          );
          const assetRaw = await fetch(`http://${apihost}/assets/${assetName}`);

          const liveAsset = await assetRaw.text();

          newAsset = liveAsset;
          type = fs.writeFileSync(cachedAssetPath, liveAsset, "utf8"); //assetRaw.headers.get("content-type");
        }
        type = require("mime-types").lookup(cachedAssetPath);

        newAsset =
          "console.debug('This asset was proxified by our cache');" +
          patchDiscordAsset(newAsset);

        res.type(type);

        res.send(newAsset);
      } else if (req.url.endsWith(".map"))
        res.send({
          version: 420,
          file: "",
          sourceRoot: "",
          sources: [""],
          names: [""],
          mappings: "",
        });
      else if (req.url.startsWith("/assets")) {
        res.from(req.ur);
      }
    });
  }

  fastify.get("/lssets/**", async (req, res) => {
    //console.warn("aaa")
    res.from("assets/" + req.url.split("/").slice(2).join("/"));
  });

  fastify.get("/dssets/**", async (req, res) => {
    const assetName = req.url.split("/").pop();
    console.warn("proxyfying " + assetName);

    var fs = require("fs");
    var dir = cacheDir + "/dssets";

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const cachedAssetPath = `${dir}/${assetName}`;

    let newAsset, type;

    if (fs.existsSync(cachedAssetPath)) {
      newAsset = fs.readFileSync(cachedAssetPath, "utf8");
    } else {
      console.warn("caching dsset");
      const assetRaw = await fetch("https://discord.com/assets/" + assetName);
      const liveAsset = await assetRaw.text();
      newAsset = liveAsset;
      type = fs.writeFileSync(cachedAssetPath, liveAsset, "utf8"); //assetRaw.headers.get("content-type");
    }

    type = require("mime-types").lookup(cachedAssetPath);

    if (assetName.endsWith(".js") || assetName.endsWith(".js?")) {
      newAsset =
        "console.debug('This asset was proxified by our cache');" +
        patchDiscordAsset(newAsset);
    }

    res.type(type);
    res.send(newAsset);
  });
}

const patchDiscordAsset = (_, isDev) => {
  var h = hostnameStatic + (isDev ? "." : "");

  return _.toString() //simple string replacer
    .replaceAll("Discord", "Zircord") //generic rebrand
    .replaceAll(
      "https://status.discord.com",
      (isDev ? "http://" : "https://") + h + "/api/status"
    ) //no status, ew
    .replaceAll("discord.com", h) //generic
    .replaceAll(".." + host, h) //why is this required?
    .replaceAll(`this.host=t.host;`, `this.host="${hostname}";`) //sentry start
    .replaceAll("discordstatus.com", h)
    .replaceAll(`+"/api/"+`, `+"/error/"+`); //sentry endpoint
};

// Run the server and report out to the logs
fastify.listen(
  2999,
  //process.env.PORT,
  "0.0.0.0",
  function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Your app is listening on ${address}`);
    fastify.log.info(`server listening on ${address}`);
  }
);

//proxy.register(hostnameLocal, + "/", "http://0.0.0.0:2999");
//proxy.register(hostname + "/dssets", "http://0.0.0.0:2999/dssets");
proxy.register(hostnameStatic + "/", "http://0.0.0.0:2999/");
proxy.register(hostnameStatic + "/voice", "http://0.0.0.0:2998/voice");

proxy.register(
  process.env.PROJECT_DOMAIN + ".glitch.me",
  "http://0.0.0.0:2999/"
);
