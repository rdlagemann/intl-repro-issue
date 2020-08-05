import React from "react";
import "./App.css";
import { IntlProvider } from "react-intl";
import ptMessages from "./locales/compiledMessages/pt-BR.json";
import enMessages from "./locales/compiledMessages/en-US.json";
import esMessages from "./locales/compiledMessages/es-SP.json";
import MyComponent from "./MyComponent";

const DEFAULT_LOCALE = "pt-BR";

function App() {
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
        <button onClick={() => setLocale("es-ES")}> Set es-ES </button>

        <MyComponent />
      </div>
    </IntlProvider>
  );
}

export default App;
