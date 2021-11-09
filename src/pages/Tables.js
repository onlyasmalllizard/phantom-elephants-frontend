import StatusCard from "../components/StatusCard";
import TableCard from "../components/TableCard";
import { cohortMaths } from "../lib/allCohortMaths";

export default function CohortTableView({ massagedBackEndData }) {
  const cohortData = cohortMaths(massagedBackEndData, 1, 12);
  const {
    cohortRecapPerformance,
    cohortAttendancePercentage,
    cohortWorkCompletion,
    cohortOverallMood,
  } = cohortData;

  const defaultComparisonId = localStorage.getItem("defaultComparison") || 0;
  const comparisonDisplayPeriod = [
    "last week",
    "2 weeks ago",
    "last month",
    "2 months ago",
  ][defaultComparisonId];

  return (
    <>
      <div className="bg-light-blue-500 pt-8 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon="trending_up"
              title="Recap Performance"
              amount={cohortRecapPerformance + "%"}
              percentage="3.48"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date={`Since ${comparisonDisplayPeriod}`}
            />
            <StatusCard
              color="orange"
              icon="work"
              title="Work Completion"
              amount={cohortWorkCompletion + "%"}
              percentage="3.48"
              percentageIcon="arrow_downward"
              percentageColor="red"
              date={`Since ${comparisonDisplayPeriod}`}
            />
            <StatusCard
              className="h-40"
              color="green"
              icon="mood"
              // leave the spaces they are there to balance box height HACK
              title="ㅤ     Overall Mood"
              amount={cohortOverallMood}
              percentage="1.10"
              percentageIcon="arrow_downward"
              percentageColor="orange"
              date={`Since ${comparisonDisplayPeriod}`}
            />
            <StatusCard
              color="blue"
              icon="groups"
              // leave the spaces they are there to balance box height HACK
              title="Attendanceㅤ        ㅤ  "
              amount={cohortAttendancePercentage + "%"}
              percentage="12"
              percentageIcon="arrow_upward"
              percentageColor="green"
              date={`Since ${comparisonDisplayPeriod}`}
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
