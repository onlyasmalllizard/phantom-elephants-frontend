import { Button } from 'semantic-ui-react';
import { useState } from 'react';
import Input from '@material-tailwind/react/Input';

const SearchByName = ({ handleSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const submit = () => {
    handleSubmit(search);
    setSearch('');
  };

  return (
    <>
      <Input
        placeholder="Student Name"
        value={search}
        onChange={handleChange}
      />
      <Button onClick={submit}>Search</Button>
    </>
  );
};

export default SearchByName;
