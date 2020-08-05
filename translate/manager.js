const manageTranslations = require("react-intl-manager-exact").default;
const { LANGS, DEFAULT_LANG } = require("./constants");

manageTranslations({
  messagesDirectory: "src/locales/extractedMessages/",
  translationsDirectory: "src/locales/lang/",
  whitelistsDirectory: "src/locales/whitelists/",
  languages: LANGS,
  defaultLanguage: DEFAULT_LANG,
});
