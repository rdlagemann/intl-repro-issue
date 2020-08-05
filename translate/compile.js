const { exec } = require("child_process");
const { LANGS } = require("./constants");

const createCommand = (lang) =>
  `formatjs compile src/locales/lang/${lang}.json --ast --out-file src/locales/compiledMessages/${lang}.json`;

LANGS.forEach((lang) => {
  exec(createCommand(lang), (err) => {
    if (err) {
      // node couldn't execute the command
      console.error(err);
      return;
    }
  });
});
