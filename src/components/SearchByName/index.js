import { Button } from "semantic-ui-react";
import { useState } from "react";
import Input from "@material-tailwind/react/Input";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const SearchByName = ({ handleSubmit, data }) => {
  const [search, setSearch] = useState("");
  const [value, setValue] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");

  const namesList = data.map((student) => student.name);

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log("NAME: ", event.target.value);
  };

  const submit = () => {
    handleSubmit(value);
    setSearch("");
  };

  return (
    <Card className="min-w-150 min-h-200">
      <CardHeader
        color="red"
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div>
          <h6 className="uppercase text-gray-200 text-xs font-medium ">
            Student
          </h6>
          <h2 className="text-white text-2xl">Search By Name</h2>
        </div>
      </CardHeader>
      <CardBody className={`relative `}>
        <section className="bg-grey flex flex-col justify-evenly h-30">
          <div>
            <br />
            <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={namesList}
              renderInput={(params) => (
                <TextField {...params} label="Student Name" />
              )}
            />
          </div>

          <Button onClick={submit}>Search</Button>
        </section>
      </CardBody>
    </Card>
  );
};

export default SearchByName;
