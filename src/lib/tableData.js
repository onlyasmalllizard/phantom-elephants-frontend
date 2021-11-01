import bootcamps from "../dummyData";
import { listRecapTasks, tallyScores } from "../functions";

export const filterOptions = {
  0: "all",
  1: "bootcampID",
  2: "bootcampID",
  3: "bootcampID",
  4: "bootcampID",
  5: "bootcampRegion",
  6: "bootcampRegion",
  7: "bootcampRegion",
  8: "bootcampRegion",
};
export const filtationMethod = [
  "all",
  1,
  2,
  3,
  4,
  ...bootcamps.map((bootcamp) => bootcamp.region),
];
export const dataSet = bootcamps
  .map((bootcamp) =>
    bootcamp.students.map((student) => {
      /* creates an recapTask array ['green', 'amber', 'red', null] & then counts the occurences, output => Object */
      const recapTasks = student.work
        .reduce(listRecapTasks, [])
        .reduce(tallyScores, {});

      /* reduce to only workshop scores ['green', 'amber', 'red', null] & then reduce into an object of occurences {green : 5, amber: 4, red:2} */
      const workshopTasks = student.work
        .reduce(
          (acc, cur) =>
            cur.workshops
              ? [...acc, ...cur.workshops.map((workshop) => workshop.score)]
              : [...acc, null],
          []
        )
        .reduce(tallyScores, {});
      /* Workshop average & Recap Task score calculator (null: 0, red :0.33, amber:0.66, green:1*/
      const RAG_TasksAvgScore = (tasksResultObj) =>
        tasksResultObj.green * 0.99 +
        tasksResultObj.amber * 0.67 +
        tasksResultObj.red * 0.33 +
        tasksResultObj.null * -0.01;
      const workshopOverallAvgScore = RAG_TasksAvgScore(workshopTasks);
      const recapOverallAvgScore = RAG_TasksAvgScore(recapTasks);
      /* filtering out null quiz scores, then calculating average */
      const notNullQuizScores = student.work.filter(
        (work) => work.quiz !== null
      );
      const avgQuiz = Math.round(
        notNullQuizScores.reduce((acc, cur) => acc + cur.quiz.percentage, 0) /
          notNullQuizScores.length
      );

      /* get array of experience ratings & average them */
      const moodArray = student.work
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
      const avgMood = (
        moodArray.reduce((acc, cur) => acc + cur, 0) / moodArray.length
      ).toFixed(2);

      return {
        all: "all",
        id: student.info.id,
        name: student.info.name,
        avatar: student.info.avatar,
        bootcampID: bootcamp.id,
        bootcampRegion: bootcamp.region,
        trendRating: "placeholder",
        recapTasks: recapTasks,
        recapOverallAvgScore,
        workshopTasks: workshopTasks,
        workshopOverallAvgScore,
        avgQuiz: avgQuiz,
        avgMood: avgMood,
      };
    })
  )
  .flat();
console.log(dataSet);

// module.exports = { filtationMethod, filterOptions, dataSet };
