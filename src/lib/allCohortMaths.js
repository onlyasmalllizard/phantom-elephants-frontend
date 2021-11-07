export const cohortMaths = (array, startWeek, endWeek) => {
  // start week and end week need to go into the massage function!!!!
  // CALCULATING OVERALL COHORT SCORES BASED ON A TIME RANGE
  const onlyStudentsWithWork = array.filter(
    (student) => student.hasWork === true
  );
  const numStudents = onlyStudentsWithWork.length;
  //   RECAPS
  // total object
  const cohortRecapGreens = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.recapTasksScoreObject.green,
    0
  );
  const cohortRecapAmbers = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.recapTasksScoreObject.amber,
    0
  );
  const cohortRecapReds = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.recapTasksScoreObject.red,
    0
  );
  const cohortRecapnulls = Math.abs(
    (endWeek - startWeek) * numStudents -
      (cohortRecapGreens + cohortRecapAmbers + cohortRecapReds)
  );
  // and finally
  const cohortRecapScoreObject = {
    amber: +cohortRecapAmbers,
    green: +cohortRecapGreens,
    null: +cohortRecapnulls,
    red: +cohortRecapReds,
  };
  const totalRecaps =
    cohortRecapAmbers + cohortRecapGreens + cohortRecapReds + cohortRecapnulls;
  //   single number
  const cohortRecapPerformance = (
    (100 *
      (cohortRecapScoreObject.green * 0.99 +
        cohortRecapScoreObject.amber * 0.67 +
        cohortRecapScoreObject.red * 0.33 +
        cohortRecapScoreObject.null * 0)) /
    totalRecaps
  ).toFixed(1);
  //   WORKSHOPS
  const cohortWorkshopsGreens = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.workshopTasksScoreObject.green,
    0
  );
  const cohortWorkshopsAmbers = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.workshopTasksScoreObject.amber,
    0
  );
  const cohortWorkshopsReds = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.workshopTasksScoreObject.red,
    0
  );
  const cohortWorkshopsNulls = onlyStudentsWithWork.reduce(
    (acc, cur) => acc + cur.workshopTasksScoreObject.null,
    0
  );
  const cohortWorkshopsScoreObject = {
    amber: +cohortWorkshopsAmbers,
    green: +cohortWorkshopsGreens,
    null: +cohortWorkshopsNulls,
    red: +cohortWorkshopsReds,
  };
  const totalWorkshops =
    cohortWorkshopsAmbers +
    cohortWorkshopsGreens +
    cohortWorkshopsReds +
    cohortWorkshopsNulls;
  //   single number
  const cohortWorkshopsPerformance = (
    (onlyStudentsWithWork.reduce((acc, cur) => acc + cur.avgWorkshopScore, 0) *
      100) /
    numStudents
  ).toFixed(1);

  // ATTENDANCE
  const cohortDaysAttended =
    onlyStudentsWithWork.reduce((acc, cur) => acc + cur.attendanceNum, 0) /
    numStudents;
  const cohortAttendancePercentage = (
    (cohortDaysAttended * 100) /
    onlyStudentsWithWork[0].attendanceArray.length
  ).toFixed(1);
  // WORK COMPLETION ((quizes/quizes +nulls)+(all green amber reds / all + nulls) = pecentage%)
  const cohortWorkCompletion = (
    ((onlyStudentsWithWork.reduce(
      (acc, cur) => (cur.didAttend ? acc + 1 : acc),
      0
    ) /
      ((startWeek - endWeek) * 5) +
      (cohortRecapAmbers + cohortRecapGreens + cohortRecapReds) / totalRecaps +
      (cohortWorkshopsAmbers + cohortWorkshopsGreens + cohortWorkshopsReds) /
        totalWorkshops) *
      100) /
    3
  ).toFixed(1);
  // COHORT MOOD
  const cohortOverallMood = (
    onlyStudentsWithWork.reduce((acc, cur) => acc + cur.avgExperience, 0) /
    numStudents
  ).toFixed(1);

  return {
    cohortRecapPerformance,
    cohortDaysAttended,
    cohortRecapScoreObject,
    cohortWorkshopsScoreObject,
    cohortWorkshopsPerformance,
    cohortWorkCompletion,
    cohortOverallMood,
    cohortAttendancePercentage,
  };
};
