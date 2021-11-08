import { Button } from "semantic-ui-react";
import { useState } from "react";
import Input from "@material-tailwind/react/Input";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

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
          <Input
            placeholder="Student Name"
            value={search}
            onChange={handleChange}
          />
          <Button onClick={submit}>Search</Button>
        </section>
      </CardBody>
    </Card>
  );
};

export default SearchByName;
