import { useState } from "react";
import ChartLine from "../components/ChartLine";
import { cohortMaths } from "../lib/allCohortMaths";
import Doughnut from "../components/Doughnut/index";
import StudentList from "../components/StudentList/index";
import NotificationCard from "../components/NofiticationCard";

export default function Dashboard({
  plainData,
  massagedBackEndData,
  pushRight,
}) {
  // Watch list to pass to line and table
  const [watchlist, setWatchlist] = useState([]);

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
      <div className="bg-light-blue-500 h-30 ">
        <div className="flex  flex-row relative " style={{ zIndex: 5 }}>
          <div className="flex flex-row justify-evenly w-screen mt-8 ">
            <div classname="flex flex-col w-auto ">
              <div className="mr-6 ml-6">
                <NotificationCard plainData={plainData} headerColor="purple" />
              </div>

              <div className="h-30 mt-10 mr-6 ml-6">
                <StudentList
                  massagedBackEndData={massagedBackEndData}
                  headerColor="blue"
                  setWatchlist={setWatchlist}
                  watchlist={watchlist}
                />
              </div>
            </div>
            <div className="flex flex-col justify-start w-10/12 mr-6">
              <div className="mr-6 ">
                <ChartLine
                  data={massagedBackEndData}
                  isGroup={true}
                  id={0}
                  pushRight={pushRight}
                  setWatchlist={setWatchlist}
                  watchlist={watchlist}
                />
              </div>
              <div className="flex justify-evenly mt-10 mr-6">
                <Doughnut
                  datasets={allDonutData}
                  label="Overview"
                  options={allOptions}
                  pushRight={pushRight}
                  watchlist={watchlist}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-196 w-screen" style={{ height: "48rem" }}></div>
    </>
  );
}
