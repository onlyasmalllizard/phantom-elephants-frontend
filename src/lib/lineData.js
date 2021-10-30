import bootcamps from "./../dummyData";
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
      const moodRatings = notNullWork.map((day) => {
        let dayFeedback = [
          day.feedback[0].experienceRating
            ? day.feedback[0].experienceRating
            : 0,
          day.feedback[1].experienceRating
            ? day.feedback[1].experienceRating
            : 0,
        ];
        return dayFeedback[0]
          ? dayFeedback[0] +
              dayFeedback[1] /
                dayFeedback.filter((rating) => rating !== 0).length
          : null;
      });
      // day.feedback[0] && day.feedback[1]
      // ? (+day.feedback[0] + +day.feedback[1]) / 2

      return {
        id: student.info.id,
        name: student.info.name,
        bootcampID: bootcamp.id,
        bootcampRegion: bootcamp.region,
        quizScores,
        moodRatings,
      };
    })
  )
  .flat();
