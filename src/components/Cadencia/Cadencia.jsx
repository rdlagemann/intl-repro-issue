import React from "react";
import messages from "./messages";
import { FormattedMessage } from "react-intl";

function Cadencia() {
  return (
    <div>
      <p>
        <FormattedMessage {...messages.card} />
        <FormattedMessage {...messages.label} />
      </p>
    </div>
  );
}

export default Cadencia;
