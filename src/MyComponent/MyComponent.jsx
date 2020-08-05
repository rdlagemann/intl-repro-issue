import React from "react";
import { FormattedMessage } from "react-intl";

function MyComponent({ extraMessage }) {
  return (
    <div>
      <h1>{extraMessage}</h1>
      <h2>
        <FormattedMessage defaultMessage="String defined on MyComponent.JSX" />
      </h2>
    </div>
  );
}

export default MyComponent;
