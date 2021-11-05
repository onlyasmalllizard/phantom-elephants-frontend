import ChartLine from "../components/ChartLine";
import { cohortMaths } from "../lib/allCohortMaths";
import Doughnut from "../components/Doughnut/index";
import StudentList from "../components/StudentList/index";
import ClosingAlertTIM from "components/ClosingAlert";

export default function Dashboard({ massagedBackEndData }) {
  // recieving cohort data for donuts
  const cohortData = cohortMaths(massagedBackEndData, 1, 8);
  const {
    cohortRecapScoreObject,
    cohortAttendance,
    cohortWorkshopsScoreObject,
  } = cohortData;

  const attendanceDataset = {
    label: "Attendance",
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [cohortAttendance, 60 - cohortAttendance],
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

  // all options for donut filter
  const allDonutData = [attendanceDataset, recapDataset, workshopDataset];
  const allOptions = [options, options];

  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex h-2/12">
          <section className="flex flex-col  w-full">
            <h1 className="text-center text-32 font-bold">
              Welcome Back User! Since last week:
            </h1>
            <div className="flex flex-row">
              <ClosingAlertTIM />
              <ClosingAlertTIM />
              <ClosingAlertTIM />
            </div>
          </section>
        </div>
        <div className="flex h-10/12 flex-row">
          <div className="flex flex-row justify-evenly w-screen">
            <div classname="w-3/12">
              <StudentList massagedBackEndData={massagedBackEndData} />
            </div>
            <div className="flex flex-col justify-evenly w-8/12 mt-5">
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
    </>
  );
}
