import { time } from "faker";
import * as bootcamps from "../dummyData";
import { listRecapTasks, tallyScores } from "../functions";

export const fakeData = bootcamps
  .map((bootcamp) => {
    const SW = 0;
    const EW = 60;
    // sw = Start Week
    // ew = End Week
    const bootcampId = bootcamp.id;
    const bootcampRegion = bootcamp.region;
    return bootcamp.students.map((student) => {
      console.log("Dummy WOrk:", student);
      // ATTENDANCE
      const attendanceArray = student.work
        .slice(SW, EW)
        .map((day) => (day.didAttend ? true : false));
      const attendanceArrayFiltered = student.work
        .slice(SW, EW)
        .filter((day) => day.didAttend);
      const attendanceNum = attendanceArrayFiltered.length;
      // QUIZZES
      const quizScoresArray =
        student.work.slice(SW, EW).quiz === null
          ? null
          : student.work.map((work) =>
              work.quiz === null ? null : work.quiz.percentage
            );

      // FEEDBACK EXPERIENCE SCORES
      const feedbackExArray = student.work
        .slice(SW, EW)
        .map((day) =>
          day.feedback
            ? [
                day.feedback[0].experienceRating,
                day.feedback[1].experienceRating,
              ]
            : [null, null]
        );
      const feedbackExDayAvgArray = feedbackExArray.map((day) =>
        day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]
      );
      //   FEEDBACK COMMENTS
      const feedbackCommentsArray = student.work
        .slice(SW, EW)
        .map((day) =>
          day.feedback
            ? [day.feedback[0].comment, day.feedback[1].comment]
            : [null, null]
        );
      // RECAP TASKS
      /* creates an recapTask array ['green', 'amber', 'red', null] & then counts the occurences, output => Object */
      const recapTasksScoreObject = student.work
        .slice(SW, EW)
        .reduce(listRecapTasks, [])
        .reduce(tallyScores, { amber: 0, green: 0, null: 0, red: 0 });
      // WORKSHOPS
      /* reduce to only workshop scores ['green', 'amber', 'red', null] & then reduce into an object of occurences {green : 5, amber: 4, red:2} */
      const workshopTasksScoreObject = student.work
        .slice(SW, EW)
        .reduce(
          (acc, cur) =>
            cur.workshops
              ? [...acc, ...cur.workshops.map((workshop) => workshop.score)]
              : [...acc, null],
          []
        )
        .reduce(tallyScores, { amber: 0, green: 0, null: 0, red: 0 });
      /* Workshop average & Recap Task score calculator (null: 0, red :0.33, amber:0.66, green:1*/
      const RAG_TasksAvgScore = (tasksResultObj) =>
        tasksResultObj.green * 0.99 +
        tasksResultObj.amber * 0.67 +
        tasksResultObj.red * 0.33 +
        tasksResultObj.null * -0.01;
      const avgWorkshopScore = RAG_TasksAvgScore(workshopTasksScoreObject);
      const avgRecapScore = RAG_TasksAvgScore(recapTasksScoreObject);
      /* filtering out null quiz scores, then calculating average */
      const notNullQuizScores = student.work
        .slice(SW, EW)
        .filter((work) => work.quiz !== null);
      const avgQuiz = Math.round(
        notNullQuizScores.reduce((acc, cur) => acc + cur.quiz.percentage, 0) /
          notNullQuizScores.length
      );

      /* get array of experience ratings & average them */
      const moodArray = student.work
        .slice(SW, EW)
        .reduce(
          (acc, cur) =>
            cur.feedback
              ? [
                  ...acc,
                  cur.feedback[0].experienceRating,
                  cur.feedback[1].experienceRating,
                ]
              : acc,
          []
        )
        .filter((experienceRating) => experienceRating !== undefined);
      const avgExperience = +(
        moodArray.reduce((acc, cur) => acc + cur, 0) / moodArray.length
      ).toFixed(2);
      return {
        all: "all",
        id: student.info.id,
        name: student.info.name,
        email: "example@gmail.com",
        avatar: student.info.avatar,
        attendanceArray,
        attendanceNum,
        bootcampId,
        bootcampRegion,
        quizScoresArray,
        feedbackExDayAvgArray,
        feedbackExArray,
        feedbackCommentsArray,
        recapTasksScoreObject,
        avgRecapScore,
        workshopTasksScoreObject,
        avgWorkshopScore,
        avgQuiz,
        avgExperience,
        hasWork: true,
      };
    });
  })
  .flat();

export function massage(backendData, SW = 0, EW = 60) {
  console.log("pre-massage =>", backendData);

  return backendData
    .map((student) => {
      if (student.hasWork) {
        // ATTENDANCE
        const attendanceArray = student.attendance
          .slice(SW, EW)
          .map((day) => (day.didAttend ? true : false));
        const attendanceNum = student.daysAttended;
        // QUIZZES
        const quizScoresArray = student.quizzes
          .slice(SW, EW)
          .map((quiz) => (quiz ? quiz.percentage : null));

        // FEEDBACK EXPERIENCE SCORES
        const feedbackExArray = student.feedback
          .slice(SW, EW)
          .map((day) =>
            day
              ? day.map((time) => (time ? time.experienceRating : null))
              : [null, null]
          );
        const feedbackExDayAvgArray = feedbackExArray.map((day) =>
          day[0] && day[1] ? (day[0] + day[1]) / 2 : day[0] || day[1]
        );

        //   FEEDBACK COMMENTS
        const feedbackCommentsArray = student.feedback
          .slice(SW, EW)
          .map((day) =>
            day
              ? day.map((time, index) =>
                  time
                    ? time.comment
                    : `No feedback ${
                        index === 0 ? "morning" : "afternoon"
                      } left`
                )
              : [null, null]
          );
        // RECAP TASKS
        /* creates an recapTask array ['green', 'amber', 'red', null] & then counts the occurences, output => Object */
        const recapTasksScoreObject = student.recaps
          .slice(SW, EW)
          .map((recap) => (recap ? recap.score : null))
          .reduce(tallyScores, { amber: 0, green: 0, null: 0, red: 0 });
        // WORKSHOPS
        /* reduce to only workshop scores ['green', 'amber', 'red', null] & then reduce into an object of occurences {green : 5, amber: 4, red:2} */
        const workshopTasksScoreObject = student.workshops
          .slice(SW, EW)
          .reduce(
            (acc, cur) =>
              cur
                ? [...acc, ...cur.map((workshop) => workshop.score)]
                : [...acc, null],
            []
          )
          .reduce(tallyScores, { amber: 0, green: 0, null: 0, red: 0 });
        // /* Workshop average & Recap Task score calculator (null: 0, red :0.33, amber:0.66, green:1*/
        const RAG_TasksAvgScore = (tasksResultObj) =>
          tasksResultObj.green * 0.99 +
          tasksResultObj.amber * 0.5 +
          tasksResultObj.red * 0.3 +
          tasksResultObj.null * -0.01;
        const avgRecapScore = RAG_TasksAvgScore(recapTasksScoreObject);
        const avgWorkshopScore = RAG_TasksAvgScore(workshopTasksScoreObject);
        /* filtering out null quiz scores, then calculating average */
        const notNullQuizScores = quizScoresArray
          .slice(SW, EW)
          .filter((quiz) => quiz !== null);
        const avgQuiz = Math.round(
          notNullQuizScores.reduce((acc, cur) => acc + cur, 0) /
            notNullQuizScores.length
        );

        // /* get array of experience ratings & average them */
        const moodArray = feedbackExDayAvgArray.filter(
          (experienceRating) => experienceRating !== null
        );
        const avgExperience = +(
          moodArray.reduce((acc, cur) => acc + cur, 0) / moodArray.length
        ).toFixed(2);

        return {
          all: "all",
          id: student.id,
          name: student.name,
          email: "example@gmail.com",
          avatar: student.avatar,
          attendanceArray,
          attendanceNum,
          bootcampId: student.bootcampId,
          bootcampRegion: student.region,
          quizScoresArray,
          feedbackExDayAvgArray,
          feedbackExArray,
          feedbackCommentsArray,
          recapTasksScoreObject,
          workshopTasksScoreObject,
          avgRecapScore,
          avgWorkshopScore,
          avgQuiz,
          avgExperience,
          reflections: student.reflections,
          workshops: student.workshops,
          recaps: student.recaps,
          hasWork: student.hasWork,
        };
      } else {
        return {
          all: "all",
          id: student.id,
          name: student.name,
          email: "example@gmail.com",
          avatar: student.avatar,
          bootcampId: student.bootcampId,
          bootcampRegion: student.region,
          hasWork: student.hasWork,
        };
      }
    })
    .flat();
}
