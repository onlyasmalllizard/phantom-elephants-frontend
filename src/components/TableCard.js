import { useEffect, useState } from "react";
import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import bootcamps from "./../dummyData";

// pass state as object of filter and sort by
// implement search method

export default function CardTable() {
  const [sort, setSort] = useState({ field: "bootcamper", sort: "ASC" });

  function ASC(a, b) {
    return a - b;
  }
  function DESC(a, b) {
    return b - a;
  }
  const tableHeaders = [
    "Bootcamper",
    "Bootcamp",
    "Trend",
    "Recap Tasks",
    "Workshops",
    "Quiz Avg %",
    "Mood Avg /5",
  ];
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Cohort Table</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                {tableHeaders.map((heading) => {
                  return (
                    <th
                      className="w-min px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left"
                      key={uuid()}
                    >
                      {heading}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {bootcamps[0].students.map((student) => {
                /* creates an recapTask array without nulls, then counts the occurences, output => Object */
                const recapTasks = student.work
                  .reduce(
                    (acc, cur) =>
                      cur.recapTask ? [...acc, cur.recapTask.score] : acc,
                    []
                  )
                  .reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
                  }, {});

                /* reduce to only workshop scores ['green', 'amber', 'red'] then reduce into an object of occurences {green : 5, amber: 4, red:2} */
                const workshopTasks = student.work
                  .reduce(
                    (acc, cur) =>
                      cur.workshops
                        ? [
                            ...acc,
                            ...cur.workshops.map((workshop) => workshop.score),
                          ]
                        : acc,
                    []
                  )
                  .reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
                  }, {});

                /* filtering out null quiz scores, then calculating average */
                const notNullQuizScores = student.work.filter(
                  (work) => work.quiz !== null
                );
                const avgQuiz = Math.round(
                  notNullQuizScores.reduce(
                    (acc, cur) => acc + cur.quiz.percentage,
                    0
                  ) / notNullQuizScores.length
                );

                /* get array of experience ratings & average them */
                const moodArray = student.work
                  .reduce(
                    (acc, cur) =>
                      cur.feedback
                        ? [
                            ...acc,
                            cur.feedback[0].experienceRating,
                            cur.feedback[1].experienceRating,
                          ]
                        : acc,
                    []
                  )
                  .filter((experienceRating) => experienceRating !== undefined);
                const avgMood = (
                  moodArray.reduce((acc, cur) => acc + cur, 0) /
                  moodArray.length
                ).toFixed(2);

                return (
                  <tr className="border-b border-gray-200" key={uuid()}>
                    <td className="flex align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white ">
                        <Image
                          src={student.info.avatar}
                          rounded
                          alt="student avatar"
                        />
                      </div>
                      <p className="font-light text-sm whitespace-nowrap px-2 py-4 pl-3 text-left ">
                        {" "}
                        {student.info.name}
                      </p>
                    </td>
                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {bootcamps[0].id}
                    </td>

                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                      placeholder
                    </td>
                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <div className="flex content-evenly space-evenly items-evenly justify-evenly">
                        <div className="bg-green-500 px-1 w-6 text-center">
                          <p>{recapTasks.green || 0}</p>
                        </div>
                        <div className="bg-orange-500 px-1 w-6 text-center">
                          <p>{recapTasks.amber || 0}</p>
                        </div>
                        <div className="bg-red-500 px-1 w-6 text-center">
                          <p>{recapTasks.red || 0}</p>
                        </div>
                      </div>
                    </td>
                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      <div className="flex content-evenly space-evenly items-evenly justify-evenly">
                        <div className="bg-green-500 px-1 w-6 text-center">
                          <p>{workshopTasks.green || 0}</p>
                        </div>
                        <div className="bg-orange-500 px-1 w-6 text-center">
                          <p>{workshopTasks.amber || 0}</p>
                        </div>
                        <div className="bg-red-500 px-1 w-6 text-center">
                          <p>{workshopTasks.red || 0}</p>
                        </div>
                      </div>
                    </td>
                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                      {avgQuiz}
                    </td>
                    <td className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                      {avgMood}
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
