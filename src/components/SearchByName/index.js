import { Button } from "semantic-ui-react";
import { useState } from "react";
import Input from "@material-tailwind/react/Input";
import LoginButton from "components/LoginButton";

const SearchByName = ({ handleSubmit }) => {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const submit = () => {
    handleSubmit(search);
    setSearch("");
  };

  return (
    <section className="col-span-full">
      <Input
        placeholder="Student Name"
        value={search}
        onChange={handleChange}
      />
      <Button onClick={submit}>Search</Button>
      <LoginButton />
    </section>
  );
};

export default SearchByName;
