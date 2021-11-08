import StudentProfile from "../components/StudentProfile/index";
import CommentsBox from "components/Comments";
import ChartLine from "../components/ChartLine";
import SearchByName from "../components/SearchByName";
import DetailedProgress from "components/DetailedProgress";
import { fakeData } from "lib/allMassagedData";
import { useState } from "react";
import { useParams, useHistory } from "react-router";

export default function StudentPage({ massagedBackEndData }) {
  const data = [...massagedBackEndData, ...fakeData];
  console.log("studentPage: ", data);
  const history = useHistory();
  const [studentId, setStudentId] = useState(
    Number(useParams().id) || data[0].id
  );
  const studentObject = data.find((item) => {
    console.log(item.id, studentId);
    return item.id === studentId;
  });
  const [student, setStudent] = useState(studentObject);

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

  return (
    <>
      <div className="flex">
        <div className="flex flex-col justify-evenly items-center w-3/12">
          <SearchByName handleSubmit={changeStudent} />

          <StudentProfile student={student} />
          <CommentsBox />
        </div>
        <div className="flex flex-col justify-evenly items-center w-9/12">
          <ChartLine data={[student]} isGroup={false} />
          <DetailedProgress student={student} />
        </div>
      </div>
    </>
  );
}
