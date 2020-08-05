const presets = ["@babel/preset-react"];
const plugins = [
  [
    "react-intl",
    {
      extractFromFormatMessageCall: true,
      messagesDir: "./src/locales/extractedMessages",
      extractSourceLocation: true,
      idInterpolationPattern: "[sha1:contenthash:10]",
    },
  ],
];

module.exports = { presets, plugins };
