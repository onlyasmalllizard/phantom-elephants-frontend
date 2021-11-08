import StudentProfile from "../components/StudentProfile/index";
import CommentsBox from "components/Comments";
import ChartLine from "../components/ChartLine";
import SearchByName from "../components/SearchByName";
import DetailedProgress from "components/DetailedProgress";
import Doughnut from "components/Doughnut";
import { fakeData } from "lib/allMassagedData";
import { useState } from "react";
import { useParams, useHistory } from "react-router";

export default function StudentPage({ massagedBackEndData, pushRight }) {
  const data = [...massagedBackEndData, ...fakeData];
  const history = useHistory();
  const [studentId, setStudentId] = useState(
    Number(useParams().id) || data[0].id
  );
  const studentObject = data.find((item) => {
    return item.id === studentId;
  });
  const [student, setStudent] = useState(studentObject);
  console.log("STUDENT", student);
  const changeStudent = (name) => {
    const newStudent = data.find((studentData) =>
      studentData.name.toLowerCase().includes(name.toLowerCase())
    );

    if (newStudent) {
      setStudent(newStudent);
      setStudentId(newStudent.id);
      history.push(`/student/${newStudent.id}`);
    }
  };
  // DOUGHNUT CHART DATA SETS
  const attendanceDataset = {
    label: "Attendance",
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [
          student.attendanceNum,
          student.attendanceArray.length - student.attendanceNum,
        ],
        backgroundColor: ["#8BC34A", "#EF5350"],
        hoverOffset: 4,
      },
    ],
  };
  const recapDataset = {
    label: "Recap Performance",
    labels: ["Green", "Red", "Amber", "Nulls"],
    datasets: [
      {
        data: [
          student.recapTasksScoreObject.green,
          student.recapTasksScoreObject.red,
          student.recapTasksScoreObject.amber,
          student.recapTasksScoreObject.null,
        ],
        backgroundColor: ["#8BC34A", "#EF5350", "#F59E0B", "#9E9E9E"],
        hoverOffset: 4,
      },
    ],
  };
  const workshopDataset = {
    label: "Workshop Performance",
    labels: ["Green", "Red", "Amber", "Nulls"],
    datasets: [
      {
        data: [
          student.workshopTasksScoreObject.green,
          student.workshopTasksScoreObject.red,
          student.workshopTasksScoreObject.amber,
          student.workshopTasksScoreObject.null,
        ],
        backgroundColor: ["#8BC34A", "#EF5350", "#F59E0B", "#9E9E9E"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "left",
    },
  };

  const allDonutData = [attendanceDataset, recapDataset, workshopDataset];
  const allOptions = [options, options];

  return (
    <>
      <div className="bg-light-blue-500 h-40 ">
        <div className="mb-10">
          <div className="flex justify-evenly ">
            <div className="flex flex-col mr-6 ml-6 w-auto items-center mt-10 ">
              <div>
                <SearchByName data={data} handleSubmit={changeStudent} />
              </div>
              <div className="mt-6">
                <StudentProfile student={student} />
              </div>
              <div className="mt-6">
                <CommentsBox />
              </div>
            </div>
            <div className="flex flex-col items-center mr-6 mt-10 w-10/12">
              <ChartLine data={[student]} isGroup={false} label="Student" />
              <div className="mt-5 w-full">
                <DetailedProgress student={student} />
              </div>
              <div className="mt-5 w-full">
                <Doughnut
                  datasets={allDonutData}
                  label="Student"
                  options={allOptions}
                  pushRight={pushRight}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-196 w-screen"></div>
      <div className="h-196 w-screen"></div>
    </>
  );
}
