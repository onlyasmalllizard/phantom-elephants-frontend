import { useEffect, useState, useReducer } from "react";
import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import DropDown from "./DropDown";
import {
  filterOptions,
  filtationMethod,
  tableHeaders,
  viewOptions,
} from "../lib/tableData";
import { fakeData } from "../lib/allMassagedData";

export default function CardTable({ massagedBackEndData }) {
  // setting data to map over
  const data = [
    ...massagedBackEndData.filter((student) => student.hasWork === true),
    ...fakeData,
  ];
  console.log("table:", data);
  // set filter to option 0: all students
  const [filter, setFilter] = useState(0);
  // heading state, isASC state
  const [heading, setHeading] = useState("name");
  const [isASC, setIsASC] = useState(true);
  // searchInput value state
  const [search, setSearch] = useState("");

  const sortFunc = (heading, isASC) => (a, b) => {
    if (typeof a[heading] === "string" || a[heading] instanceof String) {
      let nameA = a[heading].toUpperCase(); // ignore upper and lowercase
      let nameB = b[heading].toUpperCase(); // ignore upper and lowercase
      return isASC
        ? nameA < nameB
          ? -1
          : nameA > nameB
          ? 1
          : 0
        : nameB < nameA
        ? -1
        : nameB > nameA
        ? 1
        : 0;
    } else {
      return isASC ? a[heading] - b[heading] : b[heading] - a[heading];
    }
  };

  function toggleSort(e) {
    setHeading(e);
    setIsASC(!isASC);
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }
  return (
    <Card>
      <CardHeader color="purple" contentPosition="">
        <div className="flex ">
          <div className="mr-10">
            <h2 className="text-white text-2xl">Cohort Table</h2>
          </div>
          <DropDown
            className=""
            state={filter}
            setState={setFilter}
            label="Filter By"
            itemOptions={viewOptions}
          />
          <div className="-mr-4 ml-6 h-20 p-23">
            <NavbarInput
              onChange={handleChange}
              placeholder="Search"
              style={{
                height: "20px",
                padding: "24px",
                justifyContent: "center",
                paddingLeft: "0px",
              }}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableHeaders.map((header) => {
                  return (
                    <th
                      className="w-min px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"
                      key={uuid()}
                    >
                      <button onClick={() => toggleSort(header.id)}>
                        {header.display}
                        {header.id === heading ? (isASC ? " ⬆︎" : " ⇩") : null}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody>
              {data
                .filter((student) => student.hasWork === true)
                .filter((data) =>
                  search.length > 0
                    ? data.name.toUpperCase().includes(search.toUpperCase())
                    : data[filterOptions[filter]] === filtationMethod[filter]
                )
                .sort(sortFunc(heading, isASC))
                .map((student) => {
                  return (
                    <tr className="border-b border-gray-200" key={uuid()}>
                      <td className="flex align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left items-center">
                        <div className="w-10 h-10 rounded-full border-2 border-white ">
                          <Image
                            src={student.avatar}
                            rounded
                            alt="student avatar"
                          />
                        </div>
                        <p className="font-light text-sm whitespace-nowrap px-2 py-4 pl-3 text-left ">
                          {" "}
                          {student.name}
                        </p>
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {student.bootcampId}
                      </td>

                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {student.bootcampRegion}
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex content-evenly space-evenly items-evenly justify-evenly flex-end justify-start">
                          <div className="bg-green-500 px-1 w-6 text-center">
                            <p>{student.recapTasksScoreObject.green || 0}</p>
                          </div>
                          <div className="bg-orange-500 px-1 w-6 text-center ml-1">
                            <p>{student.recapTasksScoreObject.amber || 0}</p>
                          </div>
                          <div className="bg-red-500 px-1 w-6 text-center ml-1">
                            <p>{student.recapTasksScoreObject.red || 0}</p>
                          </div>
                        </div>
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex content-evenly space-evenly items-evenly justify-evenly flex-end justify-start">
                          <div className="bg-green-500 px-1 w-6 text-center">
                            <p>{student.workshopTasksScoreObject.green || 0}</p>
                          </div>
                          <div className="bg-orange-500 px-1 w-6 text-center ml-1">
                            <p>{student.workshopTasksScoreObject.amber || 0}</p>
                          </div>
                          <div className="bg-red-500 px-1 w-6 text-center ml-1">
                            <p>{student.workshopTasksScoreObject.red || 0}</p>
                          </div>
                        </div>
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {student.avgQuiz}
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {student.avgExperience.toFixed(1)}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
