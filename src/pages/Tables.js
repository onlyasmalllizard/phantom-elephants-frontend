import StatusCard from "../components/StatusCard";
import TableCard from "../components/TableCard";

export default function CohortTableView({ massagedBackEndData }) {
  const startWeek = 1;
  const endWeek = 8;
  console.log(massagedBackEndData);
  // CALCULATING OVERALL COHORT SCORES BASED ON A TIME RANGE
  const onlyStudentsWithWork = massagedBackEndData.filter(
    (student) => student.hasWork === true
  );

  const cohortRecapPerformance = onlyStudentsWithWork
    .slice(startWeek, endWeek)
    .reduce((acc, cur) => acc + cur.avgRecapScore, 0);
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Recap Performance"
              amount={cohortRecapPerformance}
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last week"
            />
            <StatusCard
              color="orange"
              icon="work"
              title="Work Completion"
              amount="2,356"
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              className="h-40"
              color="green"
              icon="mood"
              // leave the spaces they are there to balance box height HACK
              title="ㅤ     Overall Mood"
              amount="924"
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon="groups"
              // leave the spaces they are there to balance box height HACK
              title="Attendanceㅤ        ㅤ  "
              amount="49,65%"
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard massagedBackEndData={massagedBackEndData} />
          </div>
        </div>
      </div>
    </>
  );
}
