import { useEffect } from "react";
import Chart from "chart.js";

import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function Doughnut({ dataset, width, height }) {
  const data = dataset;
  console.log("dataset: ", dataset);
  useEffect(() => {
    const config = {
      type: "doughnut",
      data: data,
    };
    let ctx = document.getElementById("donut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);
  }, []);

  return (
    <Card key={uuid()}>
      <CardHeader
        color="red"
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div className="flex">
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium ">
              Placeholder
            </h6>
            <h2 className="text-white text-2xl">{}</h2>
          </div>
        </div>
      </CardHeader>
      <CardBody className={`${width} ${height} relative min-h-60 min-w-60`}>
        <div>
          <canvas
            className="h-max w-max"
            key={uuid()}
            id="donut-chart"
          ></canvas>
        </div>
      </CardBody>
    </Card>
  );
}
