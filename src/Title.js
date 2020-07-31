import React from "react";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

const messages = defineMessages({
  headline: {
    defaultMessage: "Olá, usuário meu irmãooooo!",
    description: "Título do aplicativo principal",
  },
  body: {
    defaultMessage: "Corpo do Titulo!",
    description: "Esse é o corpo do titulo para pré-vendedores.",
  },
});

Title.propTypes = {};

function Title() {
  const intl = useIntl();
  return (
    <div>
      <FormattedMessage {...messages.headline} />
      <FormattedMessage {...messages.body} />
      <h3>
        {intl.formatMessage({
          defaultMessage: "Partiu pegar todos os pokemon",
        })}
      </h3>
    </div>
  );
}

export default Title;
