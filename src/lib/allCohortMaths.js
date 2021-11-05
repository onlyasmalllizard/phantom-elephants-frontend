export const cohortMaths = (array, startWeek, endWeek) => {
  // CALCULATING OVERALL COHORT SCORES BASED ON A TIME RANGE
  const onlyStudentsWithWork = array.filter(
    (student) => student.hasWork === true
  );

  //   RECAPS
  //   single number
  const cohortRecapPerformance = onlyStudentsWithWork
    .slice(startWeek, endWeek)
    .reduce((acc, cur) => acc + cur.avgRecapScore, 0);
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
  const cohortRecapnulls =
    (endWeek - startWeek) * onlyStudentsWithWork.length -
    (cohortRecapGreens + cohortRecapAmbers + cohortRecapReds);
  // and finally
  const cohortRecapScoreObject = {
    amber: +cohortRecapAmbers,
    green: +cohortRecapGreens,
    null: +cohortRecapnulls,
    red: +cohortRecapReds,
  };
  //   WORKSHOPS
  //   RECPAS
  const cohortWorkshopsPerformance = onlyStudentsWithWork
    .slice(startWeek, endWeek)
    .reduce((acc, cur) => acc + cur.avgRecapScore, 0);
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
  // and finally
  const cohortWorkshopsScoreObject = {
    amber: +cohortWorkshopsAmbers,
    green: +cohortWorkshopsGreens,
    null: +cohortWorkshopsNulls,
    red: +cohortWorkshopsReds,
  };

  // ATTENDANCE
  const cohortAttendance =
    onlyStudentsWithWork
      .slice(startWeek, endWeek)
      .reduce((acc, cur) => acc + cur.attendanceNum, 0) /
    onlyStudentsWithWork.length;
  // WORKSHOPS
  return {
    cohortRecapPerformance,
    cohortAttendance,
    cohortRecapScoreObject,
    cohortWorkshopsScoreObject,
  };
};
