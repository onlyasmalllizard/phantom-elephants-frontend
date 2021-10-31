import bootcamps from "./../dummyData";
console.log("all dummyData:", bootcamps);
export const lineDataset = bootcamps
  .map((bootcamp) =>
    bootcamp.students.map((student) => {
      const notNullWork = student.work.filter((day) => day.didAttend);
      const quizScores =
        student.work.quiz === null
          ? null
          : student.work.map((work) =>
              work.quiz === null ? null : work.quiz.percentage
            );
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
        bootcampID: bootcamp.id,
        bootcampRegion: bootcamp.region,
        quizScores,
        feedbackExDayAvg,
        feedbackEx,
        feedbackComments,
      };
    })
  )
  .flat();
