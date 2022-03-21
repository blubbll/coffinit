//const { REST } = require('@dcd node_moduleiscordjs/rest);

const hostname = "znw.social";
const host = "https://" + hostname;
var proxy = require("redbird")({ port: process.env.PORT });

var MatomoTracker = require("matomo-tracker");
var matomo = new MatomoTracker(1, "http://stats.znw.io/matomo.php");

const peerServer = require("peer").PeerServer({ port: 2998, path: "/voice" });

//backend
const apihost = "d.znw.social";


const path = require("path"),
  fetch = require("node-fetch"),
  mime = require("mime-types"),
  fs = require("fs");

//node
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
});

// Require the fastify framework and instantiate it
const fastify = require("fastify")({
  // Set this to true for detailed logging:
  logger: false,
});

// static
fastify.register(require("fastify-static"), {
  root: path.join(__dirname, "public"),
  prefix: "/local",
});

//proxify after processing
fastify.register(require("fastify-reply-from"), {
  base: `http://${apihost}`,
});

// fastify-formbody lets us parse incoming forms
fastify.register(require("fastify-formbody"));

// point-of-view is a templating manager for fastify
fastify.register(require("point-of-view"), {
  engine: {
    handlebars: require("handlebars"),
  },
});

// Load and parse SEO data
const seo = require("./src/seo.json");
if (seo.url === "glitch-default") {
  seo.url = `https://${process.env.PROJECT_DOMAIN}.glitch.me`;
}

/**
 * Our home page route
 *
 * Returns src/pages/index.hbs with data built into it
 */
const hbsPartialFile = require("handlebars-partial-file")({
  referenceDir: __dirname + "/build",
});
const userCache = {};

hbsPartialFile.registerFile("client/themes.css", "themes");
hbsPartialFile.registerFile("client/inject.js", "inject");

hbsPartialFile.registerFile("client/lib/bs.css", "bs-css");
hbsPartialFile.registerFile("client/style.css", "style");
hbsPartialFile.registerFile("client/lib/peer.js", "peerjs");
hbsPartialFile.registerFile("client/lib/p5.js", "p5");
hbsPartialFile.registerFile("client/bg.js", "bg");

hbsPartialFile.registerFile("client/loader.html", "loader");

fastify.all("/*", async (req, res) => {
  // params is an object we'll pass to our handlebars template
  let params = { seo: seo, host: hostname };

  if (req.url.endsWith("/bgm-sw.js")) {
    res.raw.writeHead(200, { 'Content-Type':  "text/javascript"})
    res.raw.write(fs.readFileSync(__dirname + "/public/bgm/sw.js", "utf8"));
  }

  
  if (req.url.endsWith(".js") || req.url.endsWith("offline.html")) {
    const path = __dirname + "/public" + req.url;
    if (fs.existsSync(path)) res.send(fs.readFileSync(path, "utf8"));
  }

  if (req.url.includes("/error/") && req.url.includes("/store/?")) {
    Sentry.captureException(req.body);
    res.send("ok");
  }

  if (req.url.startsWith("/api")) {
    /*const id = req.headers.authorization
      ? JSON.parse(atob(req.headers.authorization.split(".")[1])).id
      : void 0;*/
    var token = req.headers.authorization;

    if (token) {
      if (!userCache[token]) {
        userCache[token] = "pending";
        let user = void 0;
        try {
          user = await (
            await fetch(`https://${hostname}/apii/v9/users/@me`, {
              headers: {
                authorization: req.headers.authorization,
              },
              method: "GET",
            })
          ).json();
        } catch {}
        userCache[token] = user || void 0;
      }
      const user = userCache[token] || { id: 0 };

      if (req.url.endsWith("/science")) {
        const key = "trackingsettings";

        const _sep = `${key}=`;
        if (req.headers["cookie"].includes(_sep)) {
          var settings = JSON.parse(
            req.headers["cookie"].split(_sep)[1].split("}")[0] + "}"
          );

          if (settings.analytics) {
            for (const ev of req.body.events) {
              matomo.track({
                uid: user.id,
                url: req.headers["referer"],
                action_name: ev.type,
                ua: req.headers["user-agent"],
                cvar: JSON.stringify(ev.properties),
              });
            }
            res.status(200);
            res.send({ status: "ok" });
          } else
            res.send({
              status: "nok",
              details: "tracking disabled clientside",
            });
        } else {
          res.send({ status: "nok", details: "missing tracking settings" });
        }
      }

      if (req.url.endsWith("/952554953711362830/messages?limit=50")) {
        res.send([
          {
            id: "953256858481613728",
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
          console.warn("caching asset");
          console.warn(`http://${apihost}/lssets/${assetName}`);
          const assetRaw = await fetch(`http://${apihost}/lssets/${assetName}`);

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
        console.warn("/lssets/" + req.url.split("/").slice(2).join("/"));
        res.from("/lssets/" + req.url.split("/").slice(2).join("/"));
      }
    });
  }

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

const patchDiscordAsset = (_) => {
  return _.toString() //simple string replacer
    .replaceAll("Discord", "Zircord") //generic rebrand
    .replaceAll("status.discord.com", hostname + "/status") //no status, ew
    .replaceAll("discord.com", "." + hostname) //generic
    .replaceAll(`this.host=t.host;`, `this.host="${hostname}";`) //sentry start
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
proxy.register(hostname + "/", "http://0.0.0.0:2999/");
proxy.register(hostname + "/voice", "http://0.0.0.0:2998/voice");

proxy.register(process.env.PROJECT_DOMAIN + ".glitch.me", "http://0.0.0.0:2999/");