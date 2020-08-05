There are some custom scripts, but I think they don't influence the main behavior of `babel-plugin-react-intl`.

To reproduce:
1 - yarn install
2 - yarn translate
3 - go to src/locales/exractedMessages
4 - there's only one file for the .jsx component and the message defined on the .js file was ignored
