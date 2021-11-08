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
      <div className="bg-light-blue-500 h-40 ">
        <div className="mb-10">
          <div className="flex justify-evenly ">
            <div className="flex flex-col mr-6 ml-6 w-4/12 items-center mt-10 ">
              <div>
                <SearchByName handleSubmit={changeStudent} />
              </div>
              <div className="mt-6">
                <StudentProfile student={student} />
              </div>
              <div className="mt-6">
                <CommentsBox />
              </div>
            </div>
            <div className="flex flex-col items-center mr-6 mt-10 ">
              <ChartLine data={[student]} isGroup={false} />
              <div className="mt-5">
                <DetailedProgress student={student} />
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
