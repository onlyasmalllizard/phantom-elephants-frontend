import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";

export default function StudentDropdown() {
  return (
    <Dropdown
      color="lightBlue"
      placement="bottom-start"
      buttonText="Student List"
      buttonType="filled"
      size="lg"
      rounded={false}
      block={true}
      ripple="light"
    >
      {" "}
      <DropdownLink href="#" ripple="light" onClick={(e) => e.preventDefault()}>
        Apple
      </DropdownLink>
      <DropdownItem color="lightBlue" ripple="light">
        Bertie
      </DropdownItem>
      <DropdownItem color="lightBlue" ripple="light">
        Charlie
      </DropdownItem>
    </Dropdown>
  );
}
