import React from "react";
import ClosingAlert from "@material-tailwind/react/ClosingAlert";

export default function ClosingAlertTIM({ color, innerText }) {
  return <ClosingAlert color={color}>{innerText}</ClosingAlert>;
}
