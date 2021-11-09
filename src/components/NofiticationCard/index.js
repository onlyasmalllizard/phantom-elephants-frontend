import React from "react";
import ClosingAlertTIM from "components/ClosingAlert";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import { massage } from "../../lib/allMassagedData";
import StudentList from "components/StudentList";

export default function NotifactionCard({ plainData, headerColor }) {
  // for Notifications Period
  const defaultComparisonId = localStorage.getItem("defaultComparison") || 0;
  const comparisonDisplayPeriod = [
    "last week",
    "2 weeks ago",
    "last month",
    "2 months ago",
  ][defaultComparisonId];

  // time logic for notifications
  const weekDict = {
    0: { days: 5, time: "week" },
    1: { days: 10, time: "2 weeks" },
    2: { days: 20, time: "month" },
    3: { days: 40, time: "2 months" },
  };
  const currentDay = 60;
  let period = weekDict[defaultComparisonId].days;
  const currentPeriodStart = currentDay - period;
  const lastPeriodStart = currentPeriodStart - period;
  console.log(period, lastPeriodStart, currentPeriodStart, plainData);

  const currentPeriod = massage(
    plainData,
    currentPeriodStart,
    currentDay
  ).filter((student) => student.hasWork);
  const lastperiod = massage(
    plainData,
    lastPeriodStart,
    currentPeriodStart
  ).filter((student) => student.hasWork);
  console.log("currentPeriod:", currentPeriod, "lastPeriod:", lastperiod);

  const colors = ["red", "amber", "green"];

  // Attendance Alerts!
  const absentConsequetiveDays = currentPeriod.map((student) => {
    const percentage = (
      100 *
      (student.attendanceArray.reduce((acc, cur) => (cur ? acc + 1 : acc), 0) /
        period)
    ).toFixed(0);
    return {
      name: student.name,
      percentage,
      color: percentage < 50 ? "red" : percentage > 149 ? "green" : "orange",
    };
  });

  const attendanceAlerts = [
    ...absentConsequetiveDays
      .filter((student) => student.percentage < 50)
      .map((student) => {
        return {
          color: student.color,
          message: `${student.name} has attended ${student.percentage}% of school over the last ${weekDict[defaultComparisonId].time}`,
        };
      }),
  ];

  // Happiness
  const happinessChangeArray = currentPeriod.map((student, i) => {
    const percentage = (
      (100 * student.avgExperience) /
      lastperiod[i].avgExperience
    ).toFixed(0);
    const color =
      percentage < 50 ? "red" : percentage > 149 ? "green" : "orange";
    return {
      name: student.name,
      percentage,
      color,
    };
  });
  const happinessAlerts = [
    ...happinessChangeArray
      .filter((student) => student.percentage < 70)
      .map((student) => {
        return {
          message: `${student.name} overall experience has dropped ${
            100 - student.percentage
          }% over the last ${weekDict[defaultComparisonId].time}`,
          color: student.color,
        };
      }),
    ...happinessChangeArray
      .filter((student) => student.percentage > 120)
      .map((student) => {
        return {
          message: `${student.name} overall experience has increased ${
            student.percentage - 100
          }% over last ${weekDict[defaultComparisonId].time}`,
          color: student.color,
        };
      }),
  ];
  const alerts = [...attendanceAlerts, ...happinessAlerts];

  console.log("alerts: :", alerts);

  return (
    <Card className="min-w-150 min-h-200">
      <CardHeader
        color={headerColor}
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div className="flex" style={{}}>
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium ">
              {/* Welcome Back User! Since last week: */}
            </h6>
            <h2 className="text-white text-2xl">{`Since ${comparisonDisplayPeriod}`}</h2>
          </div>
        </div>
      </CardHeader>
      <CardBody className={`relative`}>
        <section
          className="flex flex-col"
          style={{
            width: "max",
            marginLeft: "1rem",
            marginRight: "1rem",
            // border: "solid black 2px",
            overflowY: "scroll",
            height: "15rem",
          }}
        >
          <div className="flex flex-col">
            {alerts.map((alert) => (
              <ClosingAlertTIM color={alert.color} innerText={alert.message} />
            ))}
          </div>
        </section>
      </CardBody>
    </Card>
  );
}
