import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import DropdownLink from '@material-tailwind/react/DropdownLink';
import { useState } from 'react';
import uuid from 'react-uuid';

const OutlineDropdown = ({ state, setState, text, options }) => {
  const [label, setLabel] = useState(text);

  const handleChange = (event) => {
    setLabel(event.target.innerText);
    setState(event.target.innerText);
  };

  return (
    <Dropdown
      color="lightBlue"
      placement="bottom-start"
      buttonText={label}
      buttonType="outline"
      size="regular"
      rounded={false}
      block={false}
      ripple="dark"
    >
      {options.map((option) => (
        <DropdownItem
          color="lightBlue"
          ripple="light"
          onClick={handleChange}
          key={uuid()}
        >
          {option}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};

export default OutlineDropdown;
