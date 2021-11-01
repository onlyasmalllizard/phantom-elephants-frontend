import StatusCard from "../components/StatusCard";
import StudentProfile from "../components/Student Profile/index";
import CommentsBox from "components/Comments";
import { useState } from "react";

export default function StudentPage({ student }) {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StudentProfile img={student.info.avatar} bio={student.info.name} />
            <CommentsBox existingcomments={student.info.comments} />
          </div>
        </div>
      </div>
    </>
  );
}
