import React, { Component } from "react";
import { CSVReader } from "react-papaparse";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import InputIcon from "@material-tailwind/react/InputIcon";
import H6 from "@material-tailwind/react/Heading5";
import Button from "@material-tailwind/react/Button";

export default class CSVReader2 extends Component {
  postcsv = async (data) => {
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const backData = await response.json();
    console.log("POST: ", backData);
  };

  handleOnDrop = (data) => {
    console.log("---------------------------");
    // This is the successful data
    console.log(data);
    console.log("---------------------------");
    this.postcsv(data);
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };

  render() {
    return (
      <div style={{ marginLeft: this.props.ml, marginRight: this.props.mr }}>
        <Card className="mx-2">
          <CardHeader color={this.props.headerColor} size="lg">
            <h2 className="text-white text-2xl">{this.props.label}</h2>
          </CardHeader>
          <CardBody className="-py-0">
            <div style={{ textAlign: "left" }} className="mt-4 mb-8 px-4 ">
              <div className="flex justify-center items-center mt-0 mb-12">
                <img
                  alt={this.props.imgAlt}
                  src={this.props.imgSrc}
                  style={{
                    height: "12rem",
                    width: "auto",
                    borderRadius: "1rem",
                    border: `2px ${this.props.headerColor} solid`,
                  }}
                />
              </div>
              <CSVReader
                onDrop={this.handleOnDrop}
                onError={this.handleOnError}
                addRemoveButton
                onRemoveFile={this.handleOnRemoveFile}
                color={this.props.headerColor}
                style={{
                  borderColor: this.props.headerColor,
                }}
              >
                <span>Drop CSV file here or click to upload.</span>
              </CSVReader>
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center">
              <Button
                color="lightBlue"
                buttonType="link"
                size="m"
                ripple="dark"
              >
                See expected structure...
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Button from "@mui/material/Button";
// import IconButton from "@mui/material/IconButton";
// import Stack from "@mui/material/Stack";

// const Input = styled("input")({
//   display: "none",
// });

// export default function UploadButton() {
//   return (
//     <Stack direction="row" alignItems="center" spacing={2}>
//       <label htmlFor="contained-button-file">
//         <Input
//           accept="image/*"
//           id="contained-button-file"
//           multiple
//           type="file"
//         />
//         <Button variant="contained" component="span">
//           Upload
//         </Button>
//       </label>
//       <label htmlFor="icon-button-file">
//         <Input accept="image/*" id="icon-button-file" type="file" />
//         <IconButton
//           color="primary"
//           aria-label="upload picture"
//           component="span"
//         ></IconButton>
//       </label>
//     </Stack>
//   );
// }
