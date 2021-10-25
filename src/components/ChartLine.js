import { useEffect, useState } from "react";
import Chart from "chart.js";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import bootcamps from "../dummyData";

export default function ChartLine() {
  const [bootcampID, setBootcampID] = useState(0);
  const handleChange = (event) => {
    console.log("Bootcamp ID: ", event.target.value);
    setBootcampID(event.target.value);
  };
  const days = bootcamps[bootcampID].students[0].work.map((work) => work.day);
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

  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: days,
        datasets: bootcamps[bootcampID].students.map((student, index) => {
          return {
            label: student.info.name,
            backgroundColor: colors[index],
            borderColor: colors[index],
            data:
              student.work.quiz === null
                ? null
                : student.work.map((work) =>
                    work.quiz === null ? null : work.quiz.percentage
                  ),
            fill: false,
            spanGaps: true,
          };
        }),
        // datasets: [
        //   {
        //     label: new Date().getFullYear(),
        //     backgroundColor: "#03a9f4",
        //     borderColor: "#03a9f4",
        //     data: quizScores1,
        //     fill: false,
        //   },
        //   {
        //     label: new Date().getFullYear() - 1,
        //     fill: false,
        //     backgroundColor: "#ff9800",
        //     borderColor: "#ff9800",
        //     data: quizScores2,
        //   },
        // ],
      },
      options: {
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
          mode: "nearest",
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
  }, [bootcampID]);

  return (
    <Card>
      <CardHeader color="orange" contentPosition="left">
        <div className="flex">
          <div>
            {" "}
            <h6 className="uppercase text-gray-200 text-xs font-medium">
              Overview
            </h6>
            <h2 className="text-white text-2xl">Quiz Scores</h2>
          </div>
          <div className="pl-5">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Bootcamp</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bootcampID}
                label="Bootcamp"
                onChange={handleChange}
              >
                {bootcamps.map((bootcamp, index) => {
                  return (
                    <MenuItem value={index}>
                      Bootcamp {bootcamp.id}: {bootcamp.region}{" "}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="relative h-96">
          <canvas id="line-chart"></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
