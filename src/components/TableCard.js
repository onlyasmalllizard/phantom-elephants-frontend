import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Image from "@material-tailwind/react/Image";
import Progress from "@material-tailwind/react/Progress";
import Team1 from "../assets/img/team-1-800x800.jpg";
import Team2 from "../assets/img/team-2-800x800.jpg";
import Team3 from "../assets/img/team-3-800x800.jpg";
import Team4 from "../assets/img/team-4-470x470.png";
import dummyData from "dummyData";

export default function CardTable() {
  return (
    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Card Table</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="w-32 px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Bootcamper
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Bootcamp
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Star Rating
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Recap Tasks
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Workshops Avg
                </th>
                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Quiz Avg
                </th>
              </tr>
            </thead>
            <tbody>
              {/* got through all work, if recapData,  */}
              {dummyData[0].students.map((student) => {
                /* creates an array without nulls, then counts the occurences, output => Object */

                const recapTasks = student.work
                  .reduce(
                    (acc, cur) =>
                      cur.recapTask ? [...acc, cur.recapTask.score] : acc,
                    []
                  )
                  .reduce(function (acc, curr) {
                    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
                  }, {});

                console.log(recapTasks);
                return (
                  <>
                    <tr className="border-b border-gray-200">
                      <div className="flex">
                        <th className="flex align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left items-center">
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
                        </th>
                      </div>
                      <th className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        {dummyData[0].id}
                      </th>

                      <th className="font-light text-sm whitespace-nowrap px-2 py-4 text-left ">
                        placeholder
                      </th>
                      <th className="font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        <div className="flex content-evenly">
                          <div className="bg-green-500">
                            {" "}
                            <p className="">{recapTasks.green}</p>
                          </div>
                          <div className="bg-orange-500">
                            {" "}
                            <p>{recapTasks.amber}</p>
                          </div>
                          <div className="bg-red-500">
                            {" "}
                            <p>{recapTasks.red}</p>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
