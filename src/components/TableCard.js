import { useEffect, useState, useReducer } from "react";
import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import DropDown from "./DropDown";
import reducer, { FILTER_BY_ID } from "../reducer.js";
import { filterOptions, filtationMethod, dataSet } from "../lib/tableData";
import { sortByFunction } from "functions";

import bootcamps from "./../dummyData";

console.log(dataSet);

export default function CardTable() {
  // const [state, dispatch] = useReducer(reducer, dataSet);
  const [filter, setFilter] = useState(1);
  // heading state, isASC state
  const [heading, setHeading] = useState("name");
  const [isASC, setIsASC] = useState(true);

  // {
  //   id: student.info.id,
  //   name: student.info.name,
  //   avatar: student.info.avatar,
  //   bootcampID: bootcamp.id,
  //   bootcampRegion: bootcamp.region,
  //   trendRating: "placeholder",
  //   recapTasks: recapTasks,
  //   workshopTasks: workshopTasks,
  //   avgQuiz: avgQuiz,
  //   avgMood: avgMood,
  // };

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

  const tableHeaders = [
    { display: "Bootcamper", id: "name" },
    { display: "Bootcamp", id: "bootcampID" },
    { display: "Trend", id: "-" },
    { display: "Recap Tasks", id: "recapTasks" },
    { display: "Workshops", id: "workshopTasks" },
    { display: "Quiz Avg %", id: "avgQuiz" },
    { display: "Mood Avg /5", id: "avgMood" },
  ];
  const viewOptions = [
    ...bootcamps.map((bootcamp) => "Bootcamp " + bootcamp.id),
    ...bootcamps.map((bootcamp) => bootcamp.region),
  ];
  const ViewOptions2 = [{ display: "All", id: "all" }];
  // map the select index, to the object key (id), to the display name

  function toggleSort(e) {
    setHeading(e);
    setIsASC(!isASC);
  }
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <div className="flex ">
          <h2 className="text-white text-2xl">Cohort Table</h2>
          <div className="pl-5">
            <DropDown
              state={filter}
              setState={setFilter}
              label="Filter By"
              itemOptions={viewOptions}
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
              {dataSet
                .filter(
                  (data) =>
                    data[filterOptions[filter]] === filtationMethod[filter]
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
                        {student.bootcampID} : {student.bootcampRegion}
                      </td>

                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        placeholder
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex content-evenly space-evenly items-evenly justify-evenly">
                          <div className="bg-green-500 px-1 w-6 text-center">
                            <p>{student.recapTasks.green || 0}</p>
                          </div>
                          <div className="bg-orange-500 px-1 w-6 text-center">
                            <p>{student.recapTasks.amber || 0}</p>
                          </div>
                          <div className="bg-red-500 px-1 w-6 text-center">
                            <p>{student.recapTasks.red || 0}</p>
                          </div>
                        </div>
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex content-evenly space-evenly items-evenly justify-evenly">
                          <div className="bg-green-500 px-1 w-6 text-center">
                            <p>{student.workshopTasks.green || 0}</p>
                          </div>
                          <div className="bg-orange-500 px-1 w-6 text-center">
                            <p>{student.workshopTasks.amber || 0}</p>
                          </div>
                          <div className="bg-red-500 px-1 w-6 text-center">
                            <p>{student.workshopTasks.red || 0}</p>
                          </div>
                        </div>
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {student.avgQuiz}
                      </td>
                      <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {student.avgMood}
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
