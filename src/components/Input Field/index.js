import React from "react";
import Input from "@material-tailwind/react/Input";

export default function InputField() {
  return (
    <Input
      type="text"
      color="lightBlue"
      size="lg"
      outline={true}
      placeholder="Student Feedback"
    />
  );
}
