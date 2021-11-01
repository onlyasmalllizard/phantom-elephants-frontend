import React from "react";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import { v4 as uuidv4 } from "uuid";

export default function NameSelection({
  names = ["mohit", "lizard", "james", "juweyriya"],
  setBootcamp,
}) {
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
      <DropdownLink href="#" ripple="light" onClick={(e) => e.preventDefault()}>
        {}
      </DropdownLink>

      {names.map((name) => {
        return (
          <DropdownItem
            ripple="light"
            key={uuidv4()}
            color="lightBlue"
            value={name}
          >
            {name}
          </DropdownItem>
        );
      })}

      {/* <DropdownItem color="lightBlue" ripple="light">
        Bertie
      </DropdownItem>
      <DropdownItem color="lightBlue" ripple="light">
        Charlie
      </DropdownItem> */}
    </Dropdown>
  );
}
