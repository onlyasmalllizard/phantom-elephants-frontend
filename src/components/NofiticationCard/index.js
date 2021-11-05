import React from "react";
import ClosingAlertTIM from "components/ClosingAlert";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";

function index() {
  return (
    <Card className="min-w-150 min-h-200">
      <CardHeader
        color="red"
        contentPosition="left"
        className="-h-10"
        style={{ height: "10px" }}
      >
        <div className="flex" style={{}}>
          <div>
            <h6 className="uppercase text-gray-200 text-xs font-medium ">
              Welcome Back User! Since last week:
            </h6>
            <h2 className="text-white text-2xl">{}</h2>
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
            <ClosingAlertTIM color="green" />
            <ClosingAlertTIM color="green" />
            <ClosingAlertTIM color="green" />
            <ClosingAlertTIM color="green" />
          </div>
        </section>
      </CardBody>
    </Card>
  );
}

export default index;
