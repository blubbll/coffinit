var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Element.prototype.on = Element.prototype.addEventListener;

if (!$("#info")) {
  if (
    localStorage.getItem("MultiAccountStore") &&
    JSON.parse(localStorage.getItem("MultiAccountStore"))._state.users.find(
      (x) =>
        x.tokenStatus === 2 &&
        x.id == JSON.parse(localStorage.getItem("user_id_cache"))
    )
  )
    $("body").insertAdjacentHTML(
      "beforeend",
      `<div id="info">
                          <span>
                             (logging in...)
                          </span>
                </div>`
    );
  else
    $("body").insertAdjacentHTML(
      "beforeend",
      `<div id="info">
                          <span>
                             (not logged in)
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
};

window.onfocus = () => {
  window.hasFocus = true;
};

{
  const i = setInterval((_) => {
    if ($(".tree-3agP2X") && !$("#side-burger")) {
      {
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

        var key = "sidebar_open";

        var burg = $("#side-burger");

        const toggle = (_) => {
          const _open = JSON.parse(localStorage[key]);
          localStorage[key] = !_open;
          toggleSync();
        };
        const toggleSync = (_) => {
          const toggleBtn_ON = burg.querySelector(".expanded");
          const toggleBtn_OFF = burg.querySelector(".expand");
          const sb = $(".sidebar-1tnWFu");
          const _open = JSON.parse(localStorage[key]);
          toggleBtn_ON.style.display = _open ? "inline" : "none";
          toggleBtn_OFF.style.display = _open ? "none" : "inline";
          if (sb) sb.style.width = _open ? null : "0%";
        };
        burg.addEventListener("click", toggle);
        if (localStorage[key] === void 0) {
          localStorage[key] = true;
        }
        toggleSync();
      }
    }
  }, 499);
}

{
  const i = setInterval((_) => {
    if ($(".modal-3BwHH2")) {
      $(".closeButton-3nyHNb").click();
      clearInterval(i);
    }
  }, 499);
}
window.UpUp.start({
  "content-url": "/",
  assets: ["/assets/2e45b6b321248222f12a.js"],
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
const injectUI = (skipLoop) => {
  if (!injecting) {
    {
      injecting = true;
      //username
      if (localStorage.getItem("MultiAccountStore") && !$("#info-username")) {
        const user = JSON.parse(
          localStorage.getItem("MultiAccountStore")
        )._state.users.find(
          (x) =>
            x.tokenStatus === 2 &&
            x.id == JSON.parse(localStorage.getItem("user_id_cache"))
        );
        console.log("welcome!");
        if (user && $("#info"))
          $("#info").innerHTML = `
                          <span id="info-username">
                          Logged in as '${user.username}' (${user.id})
                          </span>`;
      }
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
      //loggo
      const logo = $(".logo-2Rw1Ex");
      const logoTxt = "Zircord";
      if (logo && logo.innerText != logoTxt) logo.innerText = logoTxt;
    }

    {
      //memberlist
      if (
        $(".chat-2ZfjoI section") &&
        !$("#toggle-memberlist") &&
        !location.href.endsWith("/@me") &&
        !location.href.endsWith("/store")
      ) {
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

        var key = "memberlist_open";

        var target = $("#toggle-memberlist");

        const toggle = (_) => {
          const _open = JSON.parse(localStorage[key]);
          localStorage[key] = !_open;
          toggleSync();
        };
        const toggleSync = (_) => {
          const sb = $(".container-2o3qEW");

          const _open = JSON.parse(localStorage[key]);

          if (_open) target.classList.add("selected-29KTGM");
          else target.classList.remove("selected-29KTGM");

          if (sb) sb.style.width = _open ? null : "0%";
        };
        target.addEventListener("click", toggle);
        if (localStorage[key] === void 0) {
          localStorage[key] = true;
        }
        toggleSync();
      }
    }

    {
      // fetch modifications
      if (!window.fetchO) window.fetchO = Object.assign({}, window.fetch);
      if (!window.fetch.custom) {
        window.fetch = function () {
          // control analytics + errorlogging based on user preferences
          const key = "trackingsettings",
            ignoreRoute = "/ignore";

          let trackingSettings;
          {
            const cookie = ("; " + document.cookie)
              .split(`; COOKIE_NAME=${key}`)
              .pop()
              .split(";")[0];
            if (!cookie)
              document.cookie = `${key}=${JSON.stringify({
                analytics: false,
                errors: false,
              })}`;
            trackingSettings = JSON.parse(cookie);

            console.warn("Tracking settings:", trackingSettings);
          }

          // generic analytics by discord, proxified into matomo
          if (arguments[0].endsWith("/science")) {
            arguments[0] = trackingSettings.analytics
              ? trackingSettings[0]
              : ignoreRoute;

            console.warn(
              (trackingSettings.analytics ? "Scheduling" : "Blocking") +
                " analytics report..."
            );

            // generic sentry handling by discord, proxified into somewhere
            if (arguments[0].startsWith("https://sentry.io/api/")) {
              arguments[0] = trackingSettings.errors ? "/error" : ignoreRoute;

              console.warn(
                (trackingSettings.errors ? "Sending" : "Blocking") +
                  " error report..."
              );
            }
          }
          // return modified fetch promise
          return Promise.resolve(window.fetchO.apply(window, arguments));
        };
        window.fetch.custom = true;
      }
    }

    {
      //niddro>library
      const bad = "Nitro";
      const good = "Library";
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
            `<img id="nom" src="//${location.hostname}/local/cookie.jpg"/>`
          );
        }
      }
      {
        var noticeBtn = $(".cky-btn-revisit-wrapper");
        //cookie settings btn only visible when in settings
        if (noticeBtn)
          noticeBtn.style.display = $(".sidebarRegion-1VBisG") ? "none" : null;
      }
    }

    {
      //bg music toggle
      if (!$("#bgm-t") && $(".container-YkUktl .button-f2h6uQ")) {
        var key = "bgm_enabled";
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
          if ($("#bgm-t").classList.contains("active")) {
            $("#bgm-t").classList.remove("active");
            localStorage[key] = false;
            $("#bgm-frame").src = "";
          } else {
            $("#bgm-t").classList.add("active");
            localStorage[key] = true;
            $("#bgm-frame").src = `//${location.hostname}/local/bgm/index.html`;
          }
        };
      }
    }

    injecting = false;
  }

  if (!skipLoop)
    setTimeout((_) => {
      window.requestIdleCallback(injectUI);
    }, 999);
};

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
  //window.TONE_AUDIO_CONTEXT.destination.mute = 1

  var key = "bgm_enabled";

  var x = null;
  var y = null;

  document.addEventListener("mousemove", onMouseUpdate, false);
  document.addEventListener("mouseenter", onMouseUpdate, false);

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
    const idleDurationSecs = 3; // X number of seconds
    const redirectUrl = "/logout"; // Redirect idle users to this URL
    let idleTimeout; // variable to hold the timeout, do not modify

    const resetIdleTimeout = function () {
      // Clears the existing timeout
      if (idleTimeout) clearTimeout(idleTimeout);

      // Set a new idle timeout to load the redirectUrl after idleDurationSecs
      idleTimeout = setTimeout(() => {
        if (localStorage.getItem(key) && localStorage.getItem(key) === "true") {
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
      document.addEventListener(evt, resetIdleTimeout, false)
    );
  })();

  document.addEventListener("click", printMousePos, true);

  function printMousePos(e) {
    x = e.pageX;
    y = e.pageY;
  }
}
