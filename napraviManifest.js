import pwaManifest, { write } from "@pwa/manifest";

//const pwaManifest = require("@pwa/manifest");

(async () => {
  const manifest = await pwaManifest({
    name: "Naš PWA",
    short_name: "prvioPwa",
    start_url: "/index.html",
    display: "standalone",
    background_color: "#EFEFEF",
    theme_color: "#FFEEFF",
  });
  // dump new generated manifest file if you want
  await pwaManifest.write("./", manifest);
})();
