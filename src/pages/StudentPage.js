import StudentProfile from '../components/StudentProfile/index';
import MessageNotification from 'components/MessageNotification';
import CommentsBox from 'components/Comments';
import ChartLine from '../components/ChartLine';
import SearchByName from '../components/SearchByName';
import { useState } from 'react';
import { useParams, useHistory } from 'react-router';

export default function StudentPage({ data }) {
  const history = useHistory();
  const [studentId, setStudentId] = useState(Number(useParams().id) || 1);
  const studentObject = data.find((item) => {
    return item.id === studentId;
  });
  const [student, setStudent] = useState(studentObject);

  const changeStudent = (name) => {
    const newStudent = data.find((studentData) =>
      studentData.name.includes(name)
    );

    if (newStudent) {
      setStudent(newStudent);
      setStudentId(newStudent.id);
      history.push(`/student/${newStudent.id}`);
    }
  };

  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <MessageNotification />
            <SearchByName handleSubmit={changeStudent} />
          </div>
        </div>
      </div>
      <section className="grid">
        <StudentProfile student={student} />
        <ChartLine data={data} isGroup={false} />
      </section>
      <CommentsBox />
    </>
  );
}
