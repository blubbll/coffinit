var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Element.prototype.find = function (selector) {
  return this.querySelector(selector);
};

const isPreview = location.hostname.endsWith(".");

const fetch = window.fetch;
window.fetch = (...args) =>
  (async (args) => {
    var result = await fetch(...args);

    console.warn("FETGCH:" + result); // intercept response here
    return result;
  })(args);

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});

const Swal = window.Swal;
const Toast = Swal.mixin({
  toast: true,
  position: "bottom",
  showConfirmButton: false,
  timerProgressBar: true,
  timer: (isPreview ? 60 : 3) * 1000,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

const userId = (_) => {
  try {
    return JSON.parse(
      atob(findModuleByName("getToken").getToken().split(".")[1])
    ).id;
  } catch (e) {
    return void 0;
  }
};

var findModuleByName = (item) =>
  window.webpackChunkdiscord_app.push([
    [Math.random()],
    {},
    (req) => {
      for (const m of Object.keys(req.c)
        .map((x) => req.c[x].exports)
        .filter((x) => x)) {
        if (m && m[item] !== undefined) return m;
      }
    },
  ]);

{
  const DiscordExtender = setInterval((_) => {
    if (window.webpackChunkdiscord_app) {
      //no gateway logging, thx touchgrass
      findModuleByName("Dispatcher").Dispatcher.prototype.setInterceptor(
        function (e) {
          //console.warn(e);
          //Zircord.track(e);
          return;
        }
      );

      clearInterval(DiscordExtender);
    }
  }, 500);
}

// https://stackoverflow.com/a/39227688
{
  const showErr = (_, succ) => {
    if (_) {
      if (_.text && _.text.includes("<html"))
        _ = { text: "ignored html error" };

      if (_ && _.text === "IGNORE") return false;

      var msg = "(not defined)";

      var _msg =
          _.toString && !_.toString().includes("[object") ? _.toString() : "",
        msg = _msg,
        code = "",
        _code = "",
        _details = "",
        details = "";

      if (_.toString && _.toString().includes("[object") && _.ok === false) {
        // console.warn(_)
      }

      if (_.xhr) {
        var req = JSON.parse(JSON.stringify(_));

        if (
          !req.ok
          //  req.error
        ) {
          msg =
            req.text.length > 0
              ? JSON.parse(req.text).message
              : "(no message given)";
        }
      }

      if (_.message) msg = _.message;

      if (_.text) {
        msg = _.text;
        if (_.text.includes('"code":')) {
          _code = JSON.parse(_.text).code;
          code = `Code: ${_code}` + "\n";
        }

        if (_.text.includes('"message":') || _.text.includes('"message":')) {
          _msg = JSON.parse(_.text).message;
          msg = `message: ${_msg}` + "\n";
        }

        if (_.text.includes("_errors")) {
          _details = JSON.parse(
            "{" + _.text.split('"_errors":[{')[1].split("}")[0] + "}"
          ).message;
          details = `details: ${_details}`;
        }
        //else msg = _.text;
      }

      if (!succ || _.ok === false) {
        var err = "error: " + code + msg + details;
        if (
          typeof code !== "string" ||
          typeof msg !== "string" ||
          typeof details !== "string" ||
          msg.length === 0
        ) {
          console.warn(_);
        } else
          Toast.fire({
            icon: "error",
            title: err,
          });

        setTimeout((_) =>
          fetch("/api/error", {
            method: "POST",
            headers: {
              authorization: findModuleByName("getToken").getToken(),
              "content-type": "application/json",
            },
            body: JSON.stringify({
              message: `[${_code}]${_msg}${_details}`,
              stacktrace: _,
            }),
          })
        );
        //console.warn(_);
      }
    }
  };

  class SubPromise extends Promise {
    constructor(executor) {
      super(function (_resolve, _reject) {
        return executor(_resolve, _reject);
      });
    }

    then(success, reject) {
      super.then(
        (_) => {
          UI_Response(_);
          showErr(_, true);
        },
        (_) => {
          UI_Response(_);
          showErr(_, false);
        }
      );

      return super.then(success, reject);

      // return super.then(success, reject);
    }
  }

  window.Promise = SubPromise;
}

const UI_Response = (_) => {
  if (_ && _.xhr) {
    if (_.text) {
      try {
        const res = JSON.parse(_.text);

        if (res.status === "ok") {
          switch (res.action) {
            case "showIntroductionResponse":
              {
                Toast.fire({
                  icon: "success",
                  title: res.content,
                });
              }
              break;
            default: {
            }
          }
        }
      } catch (e) {}
    }
  }
};

const setCookie = (name, value, days = 7, path = "/") => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie =
    name +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expires +
    "; path=" +
    path;
};

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, void 0);
};

const deleteCookie = (name, path) => {
  setCookie(name, "", -1, path);
};

Element.prototype.on = Element.prototype.addEventListener;
Element.prototype.off = Element.prototype.removeEventListener;

function getParam(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//launched locally
if (getParam("local")) {
  console.log(`Websocket listening on: ${getParam("wsport")}`);

  $("#jingle").src = "file://" + getParam("localAssetDir");
}

const Zircord = (window.Zircord = {
  consentCookieName: "CookieScriptConsent",

  track: (_) => {
    //if (Zircord.tracking && window.umami) window.umami(name.type);
    window.fetch("/api/track", {
      method: "POST",
      body: JSON.stringify(_),
      headers: {
        authorization: findModuleByName("getToken").getToken(),
        "content-type": "application/json",
      },
    });
  },

  mode: navigator.userAgent.startsWith("HYBRID") ? "hybrid" : "standalone",
  LOCAL_API: navigator.userAgent.split(";")[1],
  GAME_GUID: navigator.userAgent.split(";")[2],
  HB_OFFSET: +navigator.userAgent.split(";")[3],

  get tracking() {
    return (
      isPreview ||
      (getCookie(this.consentCookieName) &&
        JSON.parse(getCookie(this.consentCookieName)).categories.includes(
          "performance"
        ))
    );
  },
});

if (Zircord.mode === "hybrid") {
  const appPadding = +getComputedStyle(document.documentElement)
    .getPropertyValue("--app-padding")
    .split("px")[0];

  $("body").style.setProperty("--hybrid-offset", Zircord.HB_OFFSET + "px");

  $("body").style.setProperty(
    "--hybrid-offset-user",
    +getComputedStyle(document.documentElement)
      .getPropertyValue("--hybrid-offset-user")
      .split("px")[0] +
      Zircord.HB_OFFSET +
      "px"
  );

  var syncSize = async (_) => {
    //body instead of document bc discord removes the style attribute periodically
    var size = await (await fetch(Zircord.LOCAL_API + "/app/size")).json();
    $("body").style.setProperty("--app-h", size.h);
    $("body").style.setProperty(
      "--app-w",
      size.w > 800 ? size.w - appPadding : size.w
    );

    setTimeout(syncSize, 999);
  };

  syncSize();
}

{
  {
    //settings
    let storageKey = "zircord.settings",
      $default = {
        sidebar: true,
        memberlist: true,
        bgm: void 0,
      };
    //https://medium.com/@suvechhyabanerjee92/watch-an-object-for-changes-in-vanilla-javascript-a5f1322a4ca5

    Zircord.settings = new Proxy(
      localStorage[storageKey] ? JSON.parse(localStorage[storageKey]) : {},
      {
        set: function (target, key, value) {
          // set value
          target[key] = value;
          if (Zircord.tracking)
            localStorage.setItem(storageKey, JSON.stringify(target));
          else if (window.sessionStorage)
            window.sessionStorage.setItem(storageKey, JSON.stringify(target));

          return true;
        },
        get: function (target, prop, receiver) {
          if (Zircord.tracking) {
            try {
              return JSON.parse(localStorage.getItem(storageKey))[prop];
            } catch (e) {
              localStorage.setItem(storageKey, JSON.stringify($default));
              return $default[prop];
            }
          } else {
            try {
              return JSON.parse(sessionStorage.getItem(storageKey))[prop];
            } catch (e) {
              sessionStorage.setItem(storageKey, JSON.stringify($default));
              return $default[prop];
            }
          }
        },
      }
    );
  }
}

{
  if (!$("#info")) {
    if (
      localStorage.getItem("MultiAccountStore") &&
      JSON.parse(localStorage.getItem("MultiAccountStore"))._state.users.find(
        (x) =>
          x.tokenStatus === 2 &&
          x.id == JSON.parse(localStorage.getItem("user_id_cache"))
      )
    )
      $("body") &&
        $("body").insertAdjacentHTML(
          "beforeend",
          `  <div id="info" class="small">
            <span>
               (logging in...)
            </span>
            </div>`
        );
    else
      $("body") &&
        $("body").insertAdjacentHTML(
          "beforeend",
          `<div id="info" class="small">
            <span>
               (not logged in)
            </span>
           
            <span id="info-client-version">
              Build <i class="text-light">${
                $("meta[name=build]").getAttribute("value") +
                (isPreview ? " (preview)" : "")
              }</i>
            </span>
            <span id="info-connected">
             <i class="text-light">${Zircord.mode}</i> mode
            </span>
                         
          </div>`
        );
  }

  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  window.hasFocus = true;
  window.onblur = () => {
    window.hasFocus = false;
    $("#bgm-frame") &&
      $("#bgm-frame").contentWindow.postMessage({ muted: true });
  };

  window.onfocus = () => {
    window.hasFocus = true;
  };

  {
    const i = setInterval((_) => {
      if ($(".modal-3BwHH2")) {
        $(".closeButton-3nyHNb").click();
        clearInterval(i);
      }
    }, 499);
  }

  if (location.protocol === "https:")
    window.UpUp.start({
      "content-url": "/",
      assets: [""],
    });

  {
    const o = console.log;
    console.log = (_) => {
      //console.warn(_)
      //o(_)
    };
  }

  const connect = (_) => {
    const peer = new window.Peer(localStorage["voiceChannel"], {
      host: location.hostname,
      path: "/voice",
    });

    // Handle incoming data connection
    peer.on("connection", (conn) => {
      console.warn("incoming peer connection!");
      conn.on("data", (data) => {
        console.warn(`received: ${data}`);
      });
      conn.on("open", () => {
        conn.send("hello!");
      });
    });

    // Handle incoming voice/video connection
    peer.on("call", (call) => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          call.answer(stream); // Answer the call with an A/V stream.
          //call.on('stream', renderVideo);
        })
        .catch((err) => {
          console.error("Failed to get local stream", err);
        });
    });
  };

  //  $(".downloadApps-14IgKV") &&

  let AUDIO_CONNECTED = false;
  let injecting = false;
  let loggedIn = false;
  let needRefresh = false;
  const injectUI = (window.injectUI = async (skipLoop) => {
    const dReady = window.webpackChunkdiscord_app !== void 0;

    if (!injecting) {
      console.debug("INJECTING UI");

      injecting = true;

      {
        //ss
        if (!window.sessionStorage && window.sessionStorage !== false) {
          window.sessionStorage = false;
          var iframe = document.createElement("iframe");
          iframe.onload = function () {
            window.sessionStorage = iframe.contentWindow.sessionStorage;
          };
          iframe.src = "about:blank";
          document.body.appendChild(iframe);
        }
      }

      if (!loggedIn) {
        try {
          const user = await (
            await fetch("/api/whoami", {
              method: "GET",
              headers: {
                authorization: findModuleByName("getToken").getToken(),
                "content-type": "application/json",
              },
            })
          ).json();
          if (user.id) loggedIn = true;
          //if (!user.verified)
          //needRefresh = true;
        } catch (e) {
          //console.warn(e)
        }
      }

      if (loggedIn && $('[data-list-id="guildsnav"]')) {
        {
          console.debug("INJECTING SIDEBURGER");

          //sidebar
          $('[data-list-id="guildsnav"]').insertAdjacentHTML(
            "afterbegin",
            `
            <button id="side-burger">
              <svg class="expand" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
              </svg>
              <svg class="expanded" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/>
              </svg>
            </button>`
          );

          var burg = $("#side-burger");
          const toggleSync = (_) => {
            const toggleBtn_ON = burg.querySelector(".expanded");
            const toggleBtn_OFF = burg.querySelector(".expand");
            const sb = $(".sidebar-1tnWFu");
            const _open = Zircord.settings.sidebar;
            toggleBtn_ON.style.display = _open ? "inline" : "none";
            toggleBtn_OFF.style.display = _open ? "none" : "inline";
            if (sb) sb.style.width = _open ? null : "0%";
          };

          {
            if (!burg.on("click"))
              burg.on("click", (_) => {
                Zircord.settings.sidebar = !Zircord.settings.sidebar;

                Zircord.track({
                  type: "SIDEBAR_TOGGLE",
                  value: Zircord.settings.sidebar,
                });

                toggleSync();
              });
          }

          toggleSync();
        }
      }

      {
        //path name for css rules based on path
        $("body").setAttribute("path", location.pathname);
      }

      {
        if (localStorage["needRefresh"] === "true") {
          localStorage["needRefresh"] = false;
          location.reload(false);
        }
      }

      {
        // fix input modals
        $$(".inputMaxLength-3n06SD").forEach((el) => {
          if (el.getAttribute("fixed") !== "true") {
            //prepare new element
            var iid = +new Date();
            el.setAttribute("iid", iid);
            el.innerHTML = el.innerHTML;
            //rebind modified element
            el = $(`[iid="${iid}"]`);
            //find (new) subcomponents
            const tb = el.find("textarea"); //input
            const ct = el.find("div"); //counter
            //fill counter with new logic
            tb.on(
              "keyup",
              debounce((_) => {
                ct.innerText = +tb.getAttribute("maxlength") - tb.value.length;
              }, 500)
            );
          }
          el.setAttribute("fixed", true);
        });
      }

      {
        //volument
        /*if (Zircord.tracking && !Zircord.volumentSetup && window.volument) {
          window.volument(isPreview ? "3aecb0678d" : "7006d9db7c");
          Zircord.volumentSetup = true;
        }*/

        //umami
        if (Zircord.tracking && !Zircord.umamiSetup) {
          var s = document.createElement("script");
          s.setAttribute(
            "data-website-id",
            "5c923f38-947d-4a7a-b833-fc54791a1fbe"
          );

          s.setAttribute("data-host-url", "/api/umami/"); //`${location.protocol}//://stats.exxo.cloud:3000/`);

          s.setAttribute(
            "src",
            `${location.protocol}//${location.host}/local/um-selfhosted.js`
          );
          //s.setAttribute("id", "umami");
          s.setAttribute("data-do-not-track", true);
          s.setAttribute("data-cache", true);
          document.body.appendChild(s);
          Zircord.umamiSetup = true;
        }
      }

      //username
      if (localStorage.getItem("MultiAccountStore") && !$("#info-username")) {
        console.debug("INJECTING USERNAME");

        try {
          const user = JSON.parse(
            localStorage.getItem("MultiAccountStore")
          )._state.users.find((x) => x.tokenStatus === 2 && x.id == userId());
          console.log("welcome!");
          if (user && $("#info")) {
            $("#info").innerHTML = `
                          <span id="info-username">
                            Welcome, <i class="text-light">${
                              user.username
                            }</i>&thinsp;!
                          </span>
                          <span id="info-client-version">
                            Build <i class="text-light">${
                              $("meta[name=build]").getAttribute("value") +
                              (isPreview ? " (preview)" : "")
                            }</i>
                          </span>
                          <span id="info-connected">
                           <i class="text-light">${Zircord.mode}</i> mode
                          </span>
                          `;
          }
        } catch (e) {}
      }

      {
        //voicechannel
        if (localStorage.getItem("SelectedChannelStore")) {
          const activeChannel = JSON.parse(
            localStorage.getItem("SelectedChannelStore")
          ).selectedVoiceChannelId;
          if (activeChannel && !AUDIO_CONNECTED) {
            console.debug(`user is active in voice channel #${activeChannel}`);
            AUDIO_CONNECTED = true;
          } else if (!activeChannel && AUDIO_CONNECTED) {
            console.debug(`User left voice channel!`);
            AUDIO_CONNECTED = false;
          }
        }
      }

      {
        var ch = "966002702561591064";

        if (
          dReady &&
          loggedIn &&
          sessionStorage["cache_introduction"] === void 0
        ) {
          var text = await (
            await fetch("/api/internal/introduction", {
              method: "GET",
              headers: {
                authorization: findModuleByName("getToken").getToken(),
                "content-type": "application/json",
              },
            })
          ).json();
          sessionStorage["cache_introduction"] =
            text.length > 0 ? JSON.stringify(text) : "";
        }

        if (userId() && sessionStorage["cache_introduction"] !== void 0)
          localStorage["DraftStore"] = JSON.stringify({
            _state: {
              [userId()]: {
                [ch]: {
                  1: {
                    timestamp: 165052448040,
                    name: "Introduction by",
                    parentChannelId: ch,
                  },
                  2: {
                    timestamp: 1650467966625,
                    draft:
                      sessionStorage["cache_introduction"].length > 0
                        ? JSON.parse(sessionStorage["cache_introduction"])
                        : "", // "Hi im ultra poggers lol rewwrl",
                  },
                },
              },
            },
            _version: 2,
          });

        {
          if (
            location.pathname ===
              "/channels/956435419602611926/966002702561591064" &&
            localStorage["IntroductionFixDone"] !== "true"
          ) {
            //introduction wrapper
            /*const el = $(".inputDefault-3FGxgL");
          if (el && $("[role=textbox]")) {
            $("[role=textbox]").click();
          }*/

            const el = $(".form-25Aujy");
            if (el) {
              el.click();
              //fix for introduction template not loading from localstorage
              if (sessionStorage["cache_introduction"] !== void 0) {
                localStorage["needRefresh"] = true;
                localStorage["IntroductionFixDone"] = true;
              }
            }
          }
        }
      }

      {
        //better input boxes
        // for($inputMaxLength-3n06SD
      }

      {
        //username text
        var tx = "username / ";
        var el = $(".mainLoginContainer-wHmAjP h5");
        if (el && !el.innerText.toLowerCase().includes(tx))
          el.innerText = tx + el.innerText;
      }

      {
        //memberlist
        if (
          $(".chat-2ZfjoI section") &&
          !$("#toggle-memberlist") &&
          !location.href.endsWith("/@me") &&
          !location.href.endsWith("/store")
        ) {
          console.warn("INJECTING MEMBERLIST TOGGLE");

          //memberlist
          $(".chat-2ZfjoI section").insertAdjacentHTML(
            "beforeend",
            `<div id="toggle-memberlist" class="iconWrapper-2awDjA clickable-ZD7xvu" role="button" aria-label="Hide Member List" tabindex="0">
        <svg x="0" y="0" class="icon-2xnN2Y" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path>
        <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"></path>
        <path fill="currentColor" d="M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"></path><path fill="currentColor" d="M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z">
        </path></svg>`
          );

          const targetSelector = "#toggle-memberlist";
          const toggleSync = (_) => {
            var target = $(targetSelector);
            const sb = $(".container-2o3qEW");

            const _open = Zircord.settings.memberlist;

            if (_open) target.classList.add("selected-29KTGM");
            else target.classList.remove("selected-29KTGM");

            if (sb) sb.style.width = _open ? null : "0%";
          };

          {
            var target = $(targetSelector);
            if (!target.on("click"))
              target.on("click", (_) => {
                Zircord.settings.memberlist = !Zircord.settings.memberlist;

                Zircord.track({
                  type: "MEMBERLIST_TOGGLE",
                  value: Zircord.settings.memberlist,
                });

                toggleSync();
              });
          }
          toggleSync();
        }
      }

      {
        //niddro>library
        const good = "Stats";
        const navEntry = $('[href="/store"] .name-2m3Cms');
        if (navEntry) navEntry.innerText = good;
        const headerItem = $(".applicationStore-2nk7Lo .title-17SveM");
        if (headerItem) headerItem.innerText = good;
      }
      {
        //niddrolib store ui
        if ($(".premiumContainer-3GGa8Q") && !$("#library")) {
          $(".premiumContainer-3GGa8Q").innerHTML = `
      <div id="library">
<h3 class="wrapper-1HSdhi base-21yXnu size20-9iTTnl">Apps</h3>
<table class="table text-white">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table></div>`;
        }
      }

      {
        //login disclaimer
        if ($(".header-6M5OpB") && !$("#auth-disclaimer")) {
          $(".header-6M5OpB").insertAdjacentHTML(
            "beforeend",
            `
<div id="auth-disclaimer" class="alert alert-warning py-1 mt-3 mb-0 w-100">
(this login form is for your Zircon Network user account and not connected to any other thirdparty service or provider)
</div>
`
          );
        }
      }

      {
        //cookiebanner crap

        {
          var noticeBox = $(".cky-notice");
          // cookie nom
          if (noticeBox && !$("#nom")) {
            noticeBox.insertAdjacentHTML(
              "afterbegin",
              `<img id="nom" src="//${location.hostname}/local/cookie.jpg"/><br />`
            );
          }
        }
      }

      {
        //bg music toggle
        if (!$("#bgm-t") && $(".container-YkUktl .button-f2h6uQ")) {
          $(".container-YkUktl .button-f2h6uQ").insertAdjacentHTML(
            "beforebegin",
            `
        <button id="bgm-t" class="button-12Fmur enabled-9OeuTA button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F">
        <div class="contents-3ca1mk">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-4 0 26 26">
        <path d="M13 0h-2v15.676c-3.379-.667-7 1.915-7 4.731 0 2.367 1.881 3.593 3.919 3.593 2.423 0 5.077-1.728 5.081-5.24v-12.76c3.009 2.223 5.623 3.243 5.059 7 1.431-1.727 1.941-2.817 1.941-4.051 0-4.446-7-5.915-7-8.949z"/>
        </svg>
        </div>
        </button>`
          );
          $("#bgm-t").onclick = (_) => {
            Zircord.settings.bgm =
              Zircord.settings.bgm !== void 0 ? !Zircord.settings.bgm : false;

            Zircord.track({ type: "BGM_TOGGLE", value: Zircord.settings.bgm });

            toggleFrame();
          };
          const toggleFrame = () => {
            const _ = Zircord.settings.bgm;
            var active = void 0;
            if (_ === true) {
              active = true;
              $("#bgm-t").classList.remove("inactive");
              $("#bgm-t").classList.add("active");
            } else if (_ === false) {
              active = false;
              $("#bgm-t").classList.remove("active");
              $("#bgm-t").classList.add("inactive");
            } else {
              $("#bgm-t").classList.add("new");
              $("#bgm-t").classList.add("active");
            }

            if (active === true)
              $("#bgm-frame").contentWindow.postMessage({ muted: false });
            if (active === false)
              $("#bgm-frame").contentWindow.postMessage({ muted: true });

            //remove new class if no longer new
            if (Zircord.settings.bgm === void 0)
              $("#bgm-t").classList.remove("new");
          };

          toggleFrame();
        }

        //toggle iframe
        if (
          loggedIn &&
          $("#bgm-frame").src === "" &&
          (Zircord.settings.bgm === void 0 || Zircord.settings.bgm)
        )
          $("#bgm-frame").src = `//${location.hostname}/local/bgm/index.html`;

        $("#bgm-frame").contentWindow.postMessage({
          muted: !window.hasFocus || Zircord.settings.bgm === false,
        });
      }

      {
        //no shitty student hub btn
        var target = $('[d="M13.25 18L13.25 6L11.75 6L11.75 18L13.25 18Z"]');
        if (
          target &&
          target.parentElement &&
          target.parentElement.parentElement &&
          target.parentElement.parentElement.parentElement
        )
          target.parentElement.parentElement.parentElement.style.display =
            "none";
      }

      {
        //cookiebanner crap

        {
          var noticeBox = $("#cookiescript_description");
          // cookie nom
          if (noticeBox && !$("#nom")) {
            noticeBox.insertAdjacentHTML(
              "afterbegin",
              `<img id="nom" src="//${location.hostname}/local/cookie.jpg"/><br/>`
            );
          }
        }
        //generic add cookie script function
        const spawnCookieScript = (_) => {
          if (!window.spawnCookieScriptFails) window.spawnCookieScriptFails = 0;

          if (window.spawnCookieScriptFails < 5) {
            var s = document.createElement("script");
            s.setAttribute(
              "src",
              "//cdn.cookie-script.com/s/84e656d0d5c1d93317eb1897cbdb0361.js"
            );

            setInterval((_) => {
              if ($("#cookiescript_injected"))
                window.spawnCookieScriptFails = 0;
            }, 30 * 1000);

            s.setAttribute("id", "cookiescript");
            document.body.appendChild(s);
          }
        };
        {
          //spawn cookiescript if in settings
          var noticeBtn = $(".cky-btn-revisit-wrapper");
          //cookie settings btn only visible when in settings
          if ($(".sidebarRegion-1VBisG") && !$("#cookiescript_injected"))
            spawnCookieScript();

          window.spawnCookieScriptFails = window.spawnCookieScriptFails + 1;
        }

        {
          //make user accept ;)
          if ($("#cookiescript_checkboxs"))
            $("#cookiescript_checkboxs").style.visibility =
              $("#cookiescript_cookietablewrap") &&
              $("#cookiescript_cookietablewrap").classList.length === 0
                ? null
                : "hidden";
        }

        {
          //make cookie blobby only visible in settings
          var noticeBtn = $("#cookiescript_badge");
          //cookie settings btn only visible when in settings
          if (noticeBtn)
            noticeBtn.style.display = !$(".sidebarRegion-1VBisG")
              ? "none"
              : null;
        }

        {
          // add cookiebanner if no cookie ever
          if (
            (!document.cookie.includes("CookieScriptConsent") &&
              !$("#cookiescript_injected")) ||
            ($(".sidebarRegion-1VBisG") && !$("#cookiescript_injected"))
          ) {
            spawnCookieScript();
          }
        }
      }
      injecting = false;

      if (!skipLoop)
        setTimeout((_) => {
          window.requestIdleCallback(injectUI);
        }, 999);
    }
  });

  //setInterval(_ => injectUI(), 99)

  {
    injectUI();

    let lastUrl = location.href;
    new MutationObserver(() => {
      const url = location.href;
      if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
      }
    }).observe(document, { subtree: true, childList: true });

    function onUrlChange() {
      injectUI(true);
    }
  }

  {
    const idleDurationSecs = 1; // X number of seconds
    let idleTimeout; // variable to hold the timeout, do not modify

    const resetIdleTimeout = function () {
      // Clears the existing timeout
      if (idleTimeout) clearTimeout(idleTimeout);

      idleTimeout = setTimeout(() => {
        injectUI();
      }, idleDurationSecs * 1000);
    };

    // Init on page load
    resetIdleTimeout();

    // Reset the idle timeout on any of the events listed below
    ["click", "touchend", "keyup", "blur"].forEach((evt) =>
      document.documentElement.on(evt, resetIdleTimeout, false)
    );
  }

  {
    //window.TONE_AUDIO_CONTEXT.destination.mute = 1

    var x = null;
    var y = null;

    document.documentElement.on("mousemove", onMouseUpdate, false);
    document.documentElement.on("mouseenter", onMouseUpdate, false);

    var initialMouse = false;
    function onMouseUpdate(e) {
      if (x === void 0) x = e.pageX;
      if (y === void 0) y = e.pageY;
    }

    function getMouseX() {
      return x;
    }

    function getMouseY() {
      return y;
    }

    (function () {
      const idleDurationSecs = 1; // X number of seconds
      let idleTimeout; // variable to hold the timeout, do not modify

      const resetIdleTimeout = function () {
        // Clears the existing timeout
        if (idleTimeout) clearTimeout(idleTimeout);

        idleTimeout = setTimeout(() => {
          if (
            Zircord.settings.bgm === void 0 ||
            Zircord.settings.bgm === true
          ) {
            $("#bgm-frame").contentWindow.postMessage({ x, y });
            x = void 0;
            y = void 0;
          }
        }, idleDurationSecs * 1000);
      };

      // Init on page load
      resetIdleTimeout();

      // Reset the idle timeout on any of the events listed below
      ["click", "touchend", "mousemove", "keyup"].forEach((evt) =>
        document.documentElement.on(evt, resetIdleTimeout, false)
      );
    })();

    document.documentElement.on("click", printMousePos, true);

    function printMousePos(e) {
      x = e.pageX;
      y = e.pageY;
    }
  }
}

// This function handles any unhandled promise rejections
const globalPromiseRejectionHandler = (event) => {
  console.log("Unhandled promise rejection reason: ", event.reason);
};

// Here we assign our handler to the corresponding global, window property
window.onunhandledrejection = globalPromiseRejectionHandler;
