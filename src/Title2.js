import React from "react";
import { defineMessages, FormattedMessage } from "react-intl";

const messages = defineMessages({
  headline: {
    defaultMessage: "Olá, mo quirido!",
    description: "Título do aplicativo principal",
  },
});

Title.propTypes = {};

function Title() {
  return (
    <div>
      <FormattedMessage {...messages.headline} />
    </div>
  );
}

export default Title;
