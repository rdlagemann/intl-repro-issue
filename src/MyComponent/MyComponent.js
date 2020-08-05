import React from "react";
import MyComponent from "./MyComponent.js";
import { useIntl } from "react-intl";

export default function MyComponentContainer() {
  const intl = useIntl();
  return (
    <MyComponent
      extraMessage={intl.formatMessage({
        defaultMessage: "String defined on MyComponent.JS",
      })}
    />
  );
}
