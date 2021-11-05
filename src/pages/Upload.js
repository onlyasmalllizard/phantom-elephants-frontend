import React from "react";
import UploadBox from "../components/UploadBox/index";

function Upload(props) {
  return (
    <div className="flex mt-20">
      <UploadBox label="New Students" headerColor="orange" ml="2vw" mr="1vw" />

      <UploadBox label="New Work" headerColor="green" ml="1vw" mr="1vw" />

      <UploadBox label="New Bootcamps" headerColor="purple" ml="1vw" mr="2vw" />
    </div>
  );
}
export default Upload;
