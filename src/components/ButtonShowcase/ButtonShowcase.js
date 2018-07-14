import React from "react";

import Button from "@root/components/shared/Button";

import s from "./ButtonShowcase.scss";

const ButtonShowcase = () => {
  return (
    <div>
      <Button style="booga">Should be primary</Button>
      <Button style="primary">Primary</Button>
      <Button style="secondary">Secondary</Button>
      <Button style="success">Success</Button>
      <Button style="danger">Danger</Button>
      <Button style="warning">Warning</Button>
      <Button style="info">Info</Button>
      <Button style="light">Light</Button>
      <Button style="dark">Dark</Button>
    </div>
  );
};

export default ButtonShowcase;
