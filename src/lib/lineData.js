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
      const morningEx = student.work.map((day) =>
        day.feedback ? day.feedback[0].experienceRating : 0
      );
      const afteroonEx = student.work.map((day) =>
        day.feedback ? day.feedback[1].experienceRating : 0
      );
      const feedbackEx = morningEx.map((ex, index) =>
        morningEx[index] && afteroonEx[index]
          ? (morningEx[index] + afteroonEx[index]) / 2
          : morningEx[index] + afteroonEx[index]
      );
      // day.feedback[0] && day.feedback[1]
      // ? (+day.feedback[0] + +day.feedback[1]) / 2

      return {
        id: student.info.id,
        name: student.info.name,
        bootcampID: bootcamp.id,
        bootcampRegion: bootcamp.region,
        quizScores,
        feedbackEx,
      };
    })
  )
  .flat();
