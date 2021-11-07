import ChartLine from "../components/ChartLine";
import { cohortMaths } from "../lib/allCohortMaths";
import Doughnut from "../components/Doughnut/index";
import StudentList from "../components/StudentList/index";
import NotificationCard from "../components/NofiticationCard";

export default function Dashboard({ massagedBackEndData }) {
  // recieving cohort data for donuts
  const cohortData = cohortMaths(massagedBackEndData, 1, 8);
  const {
    cohortRecapScoreObject,
    cohortAttendancePercentage,
    cohortWorkshopsScoreObject,
  } = cohortData;

  const attendanceDataset = {
    label: "Attendance",
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [
          cohortAttendancePercentage,
          (100 - cohortAttendancePercentage).toFixed(1),
        ],
        backgroundColor: ["#8BC34A", "#EF5350"],
        hoverOffset: 4,
      },
    ],
  };

  const recapDataset = {
    label: "Recap Performance",
    labels: ["Green", "Red", "Amber", "Nulls"],
    datasets: [
      {
        data: [
          cohortRecapScoreObject.green,
          cohortRecapScoreObject.red,
          cohortRecapScoreObject.amber,
          cohortRecapScoreObject.null,
        ],
        backgroundColor: ["#8BC34A", "#EF5350", "#F59E0B", "#9E9E9E"],
        hoverOffset: 4,
      },
    ],
  };
  const workshopDataset = {
    label: "Workshop Performance",
    labels: ["Green", "Red", "Amber", "Nulls"],
    datasets: [
      {
        data: [
          cohortWorkshopsScoreObject.green,
          cohortWorkshopsScoreObject.red,
          cohortWorkshopsScoreObject.amber,
          cohortWorkshopsScoreObject.null,
        ],
        backgroundColor: ["#8BC34A", "#EF5350", "#F59E0B", "#9E9E9E"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "left",
    },
  };

  // all options for donut filters AND all donut datasets to flick through
  const allDonutData = [attendanceDataset, recapDataset, workshopDataset];
  const allOptions = [options, options];

  return (
    <>
      <div className="bg-light-blue-500 h-20 ">
        <div
          className="flex  flex-row relative overflow-auto "
          style={{ zIndex: 5 }}
        >
          <div className="flex flex-row justify-evenly w-screen mt-8">
            <div classname="w-3/12 flex flex-col">
              <NotificationCard
                title={`Notifications since last week`}
                headerColor="purple"
              />
              <div className="h-30 mt-10">
                <StudentList
                  massagedBackEndData={massagedBackEndData}
                  headerColor="blue"
                />
              </div>
            </div>
            <div className="flex flex-col justify-start w-8/12">
              <ChartLine data={massagedBackEndData} isGroup={true} id={0} />
              <div className="flex justify-evenly mt-10">
                <Doughnut
                  datasets={allDonutData}
                  label="Overview"
                  options={allOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-196 w-screen"></div>
    </>
  );
}
