import { useEffect, useState } from "react";
import Chart from "chart.js";
import Dropdown from "../DropDown";
import uuid from "react-uuid";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

export default function Doughnut({
  datasets,
  label,
  options,
  pushRight,
  watchlist,
}) {
  // set state for donutChart
  const [chartId, setChartId] = useState(0);

  console.log("datasets: ", datasets);
  useEffect(() => {
    const config = {
      type: "doughnut",
      data: datasets[chartId],
      options: options[chartId],
    };
    let ctx = document.getElementById("donut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx, config);
  }, [chartId, pushRight, watchlist]);

  return (
    <Card key={uuid()} className="min-w-150 min-h-200">
      <CardHeader
        color="red"
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div className="flex" style={{}}>
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium ">
              {label}
            </h6>
            <h2 className="text-white text-2xl">{datasets[chartId].label}</h2>
          </div>
          <div
            className="items-end"
            style={{
              marginLeft: "1rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Dropdown
              state={chartId}
              setState={setChartId}
              label="Chart Select"
              itemOptions={["Attendance", "Recaps", "Workshops"]}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className={`relative `}>
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
