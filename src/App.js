import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import Title from "./Title";
import Title2 from "./Title2";
import ptMessages from "./locales/compiledMessages/pt-BR.json";
import enMessages from "./locales/compiledMessages/en-US.json";
import esMessages from "./locales/compiledMessages/es-SP.json";
import Cadencia from "./components/Cadencia/Cadencia";

const DEFAULT_LOCALE = "pt-BR";

function App() {
  console.log();
  const [locale, setLocale] = React.useState(DEFAULT_LOCALE);
  const [messages, setMessages] = React.useState(ptMessages);
  React.useEffect(() => {
    function loadLocaleData() {
      if (locale === "pt-BR") {
        setMessages(ptMessages);
      }

      if (locale === "en-US") {
        setMessages(enMessages);
      }

      if (locale === "es-SP") {
        setMessages(esMessages);
      }
    }

    loadLocaleData();
  }, [locale]);

  return (
    <IntlProvider
      defaultLocale="pt-BR"
      locale={locale}
      messages={messages}
      key={locale}
    >
      <div className="App">
        <button onClick={() => setLocale("pt-BR")}> Set pt-BR </button>
        <button onClick={() => setLocale("en-US")}> Set en-US </button>
        <button onClick={() => setLocale("es-SP")}> Set en-US </button>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div style={{ padding: 20 }}>
              <Cadencia />
            </div>
            <Title />
            <Title2 />
            <FormattedMessage
              defaultMessage="Aprender React"
              description="Headline da tela principal"
            />
            <FormattedMessage
              defaultMessage="Aprender Vue"
              description="Headline da tela principal pro Vue"
            />
            {/* <FormattedMessage {...remove} /> */}
            <FormattedMessage
              defaultMessage="Meu irmão virou nodeiro"
              description="Antes manjava de PHP"
            />
          </a>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
