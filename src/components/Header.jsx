import React from "react";
import header_img from "../../public/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={header_img} />
      <h1>Investiment Calculator</h1>
    </header>
  );
}
