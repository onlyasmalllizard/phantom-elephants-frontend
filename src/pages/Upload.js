import React from "react";
import UploadButton from "./../components/UploadButton/index";

function Upload(props) {
  return (
    <div className="flex mt-20">
      <UploadButton
        label="New Students"
        headerColor="orange"
        ml="2vw"
        mr="1vw"
      />

      <UploadButton label="New Work" headerColor="green" ml="1vw" mr="1vw" />

      <UploadButton
        label="New Bootcamps"
        headerColor="purple"
        ml="1vw"
        mr="2vw"
      />
    </div>
  );
}
export default Upload;
