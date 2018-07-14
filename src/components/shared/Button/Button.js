import classNames from "classnames";
import React from "react";

import s from "./Button.scss";

const Button = props => {
  const style = props.style || "primary";
  return <button className={classNames(s.button, s[`-style_${style}`])}>{props.children}</button>;
};

export default Button;
