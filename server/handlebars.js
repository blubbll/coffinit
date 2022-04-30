const hbsPartialFile = require("handlebars-partial-file")({
  referenceDir: "/app/build",
});

hbsPartialFile.registerFile("client/themes.css", "themes");
hbsPartialFile.registerFile("client/inject.js", "inject");
hbsPartialFile.registerFile("client/lib/bs.css", "bs-css");
hbsPartialFile.registerFile("client/style.css", "style");
hbsPartialFile.registerFile("client/lib/peer.js", "peerjs");
hbsPartialFile.registerFile("client/lib/p5.js", "p5");
hbsPartialFile.registerFile("client/bg.js", "bg");

hbsPartialFile.registerFile("client/loader.html", "loader");