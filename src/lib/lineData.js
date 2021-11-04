import { time } from "faker";
import bootcamps from "./../dummyData";
export const lineDataset = bootcamps
  .map((bootcamp) =>
    bootcamp.students.map((student) => {
      // ATTENDANCE
      const attendanceArray = student.work.filter((day) => day.didAttend);
      const attendanceNum = attendanceArray.reduce((acc, cur) => acc + cur, 0);
      // QUIZZES
      const quizScores =
        student.work.quiz === null
          ? null
          : student.work.map((work) =>
              work.quiz === null ? null : work.quiz.percentage
            );
      const quizAvg =
        quizScores.reduce((acc, cur) => (cur ? acc + cur : acc), 0) /
        quizScores.filter((score) => score !== null).length;
      // FEEDBACK EXPERIENCE SCORES
      const feedbackEx = student.work.map((day) =>
        day.feedback
          ? [day.feedback[0].experienceRating, day.feedback[1].experienceRating]
          : [null, null]
      );
      const feedbackExDayAvg = feedbackEx.map((day) =>
        day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]
      );
      //   FEEDBACK COMMENTS
      const feedbackComments = student.work.map((day) =>
        day.feedback
          ? [day.feedback[0].comment, day.feedback[1].comment]
          : [null, null]
      );

      return {
        id: student.info.id,
        name: student.info.name,
        email: "example@gmail.com",
        avatar: student.info.avatar,
        attendanceArray,
        attendanceNum,
        bootcampId: bootcamp.id,
        bootcampRegion: bootcamp.region,
        quizScores,
        quizAvg,
        feedbackExDayAvg,
        feedbackEx,
        feedbackComments,
        hasWork: true,
      };
    })
  )
  .flat();

export function massage(backendData) {
  console.log("massage =>", backendData);

  return backendData.map((student) => {
    if (student.hasWork) {
      // ATTENDANCE
      const attendanceArray = student.attendance.map((day) =>
        day.didAttend ? true : false
      );
      const attendanceNum = student.daysAttended;
      // QUIZZES
      const quizScores = student.quizzes.map((quiz) =>
        quiz ? quiz.percentage : null
      );
      const quizAvg =
        quizScores.reduce((acc, cur) => (cur ? acc + cur : acc), 0) /
        quizScores.filter((score) => score !== null).length;
      // FEEDBACK EXPERIENCE SCORES
      const feedbackEx = student.feedback.map((day) =>
        day
          ? day.map((time) => (time ? time.experienceRating : null))
          : [null, null]
      );
      const feedbackExDayAvg = feedbackEx.map((day) =>
        day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]
      );

      //   FEEDBACK COMMENTS
      const feedbackComments = student.feedback.map((day) =>
        day
          ? day.map((time, index) =>
              time
                ? time.comment
                : `No feedback ${index === 0 ? "morning" : "afternoon"} left`
            )
          : [null, null]
      );
      // `No ${time.timeOfDay} feedback  left` <-- an idea which would need back end implementation

      return {
        id: student.id,
        name: student.name,
        email: "example@gmail.com",
        avatar: student.avatar,
        attendanceArray,
        attendanceNum,
        bootcampId: student.id,
        bootcampRegion: student.region,
        quizScores,
        quizAvg,
        feedbackExDayAvg,
        feedbackEx,
        feedbackComments,
        hasWork: student.hasWork,
      };
    } else {
      return {
        id: student.id,
        name: student.name,
        email: "example@gmail.com",
        avatar: student.avatar,
        bootcampId: student.id,
        bootcampRegion: student.region,
        hasWork: student.hasWork,
      };
    }
  });
}
