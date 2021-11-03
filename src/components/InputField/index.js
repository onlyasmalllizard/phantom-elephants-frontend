import React from 'react';
import Input from '@material-tailwind/react/Input';

export default function InputField({ placeholder }) {
  return (
    <Input
      type="text"
      color="lightBlue"
      size="lg"
      outline={true}
      placeholder={placeholder}
    />
  );
}
