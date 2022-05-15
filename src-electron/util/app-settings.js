import Store from "electron-store";
import log from "electron-log";

const store = new Store();

export function getSettings() {
  let appSettings = {};

  try {
    let settingsStr = store.get("settings_v2");
    console.log(settingsStr);
    if (typeof settingsStr === 'object') settingsStr = JSON.stringify(settingsStr);

    if (settingsStr) appSettings = JSON.parse(settingsStr);

    log.info("Found and applied settings.");
  } catch (e) {
    log.info("Setting retrieval failed: " + e);
  }

  return appSettings;
}

export function saveSettings(settings) {
  if (typeof settings === 'object') settings = JSON.stringify(settings);
  store.set("settings_v2", settings);
  // log.debug(`Saved settings: ${settings}`);
}
