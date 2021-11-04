import { useEffect } from "react";
import Chart from "chart.js";

import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function Donut({ dataSets }) {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "grey",
        ],
        hoverOffset: 4,
      },
    ],
  };
  useEffect(() => {
    const config = {
      type: "doughnut",
      data: data,
    };
    let ctx = document.getElementById("donut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);
  }, []);

  return <canvas id="donut-chart"></canvas>;
}
