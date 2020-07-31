const manageTranslations = require("exact-translations-manager").default;

manageTranslations({
  messagesDirectory: " src/locales/extractedMessages/",
  translationsDirectory: "src/locales/lang/",
  whitelistsDirectory: "src/locales/whitelists/",
  languages: ["pt-BR", "en-US", "es-SP"],
  defaultLanguage: "pt-BR",
});
