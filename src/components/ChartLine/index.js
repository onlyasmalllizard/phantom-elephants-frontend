import { useEffect, useState } from "react";
import { useParams } from "react-router";
import uuid from "react-uuid";
import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Dropdown from "../DropDown";
import { fakeData } from "lib/allMassagedData";
import bootcamps from "dummyData";
import setRef from "@mui/utils/setRef";

const chartFilters = [
  // used for the first dropdown filter
  {
    id: 0,
    display: "Quiz Scores",
    ref: "quizScoresArray",
    spanGaps: true,
    beginAtZero: false,
  },
  {
    id: 1,
    display: "Experience Feedback",
    ref: "feedbackExDayAvgArray",
    spanGaps: true,
    beginAtZero: true,
  },
];

const colors = [
  "#e6194b",
  "#3cb44b",
  "#ffe119",
  "#4363d8",
  "#f58231",
  "#911eb4",
  "#46f0f0",
  "#f032e6",
  "#bcf60c",
  "#fabebe",
  "#008080",
  "#e6beff",
  "#9a6324",
  "#fffac8",
  "#800000",
  "#aaffc3",
  "#808000",
  "#ffd8b1",
  "#000075",
  "#808080",
  "#ffffff",
  "#000000",
];

export default function ChartLine({ data, isGroup, pushRight, watchlist }) {
  const id = Number(useParams().id) || 1;
  const [datasetId, setDatasetId] = useState(id);
  const [chartId, setChartId] = useState("0");
  const [isGroupData] = useState(isGroup);
  const [welcome, setWelcome] = useState(true);

  const [dataset] = useState([
    ...data.filter((student) => student.hasWork === true),
    ...fakeData,
  ]);

  // checking for defualt bootcamp setting for dashboard line
  useEffect(() => {
    if (isGroupData && welcome) {
      setDatasetId(+localStorage.getItem("defaultBootcamp"));
      console.log("line Defualt boot: ");
      setWelcome(false);
    } else {
      setDatasetId(id);
    }
  }, [id, pushRight]);

  useEffect(() => {
    let config = {
      type: "line",
      data: {
        labels: dataset[0].quizScoresArray.map((quiz, index) => index + 1),
        datasets: dataset
          .filter((dataPoint) => {
            if (isGroupData) {
              return (
                dataPoint.bootcampId === datasetId ||
                datasetId === 0 ||
                (datasetId === 5 && watchlist.includes(dataPoint.id))
              );
            } else {
              return dataPoint.id === datasetId;
            }
          })
          .map((student, index) => {
            return {
              label: student.name,
              backgroundColor: colors[index],
              borderColor: colors[index],
              data: student[chartFilters[chartId].ref],
              fill: false,
              spanGaps: chartFilters[chartId].spanGaps,
            };
          }),
      },
      options: {
        elements: {
          point: {
            pointStyle: "line",
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "index",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(17,17,17,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(17,17,17,.7)",
                beginAtZero: chartFilters[chartId].beginAtZero,
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(17, 17, 17, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [datasetId, chartId, dataset, isGroupData, pushRight, watchlist]);

  return (
    <Card key={uuid()}>
      <CardHeader color="orange" contentPosition="left">
        <div className="flex">
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium">
              Overview
            </h6>
            <h2 className="text-white text-2xl">
              {chartFilters[chartId].display}
            </h2>
          </div>
          <div className="pl-5 flex">
            <Dropdown
              state={chartId}
              setState={setChartId}
              label="Chart Select"
              itemOptions={chartFilters.map((option) => option.display)}
            />
            {isGroup ? (
              <div
                style={{
                  marginLeft: "1rem",
                }}
              >
                <Dropdown
                  state={datasetId}
                  setState={setDatasetId}
                  label="Bootcamp"
                  itemOptions={[
                    "All Bootcamps",
                    ...bootcamps.map((bootcamp) => {
                      return bootcamp.id + ": " + bootcamp.region;
                    }),
                    "Watchlist",
                  ]}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas key={uuid()} id="line-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
