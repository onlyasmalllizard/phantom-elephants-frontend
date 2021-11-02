import StatusCard from '../components/StatusCard';
import StudentProfile from '../components/StudentProfile/index';
import MessageNotification from 'components/MessageNotification';
import CommentsBox from 'components/Comments';
import ChartLine from '../components/ChartLine';
import { useState } from 'react';

export default function StudentPage({ student, data }) {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <MessageNotification />
          </div>
        </div>
      </div>
      <section className="grid grid-rows-3">
        <StudentProfile student={student} />
        <ChartLine data={data} isGroup={false} id={student.info.id} />
      </section>
      <CommentsBox existingcomments={student.info.comments} />
    </>
  );
}
