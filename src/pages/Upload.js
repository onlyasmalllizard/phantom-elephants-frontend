import React from "react";
import UploadBox from "../components/UploadBox/index";
import students from "../assets/img/students.png";
import bootcamps from "../assets/img/bootcamps.png";

const workImgSrc =
  "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";

function Upload(props) {
  return (
    <>
      <div className="bg-light-blue-500 h-70 ">
        <div
          className="flex justify-evenly items-center "
          style={{ height: "78vh" }}
        >
          <UploadBox
            label="New Work"
            headerColor="green"
            imgSrc={workImgSrc}
            imgAlt="dsafs"
            ml="3vw"
            mr="1vw"
          />
          <UploadBox
            label="New Students"
            headerColor="orange"
            imgSrc={students}
            imgAlt="dsafs"
          />

          <UploadBox
            label="New Bootcamps"
            imgSrc={bootcamps}
            imgAlt="dsafs"
            headerColor="purple"
            ml="1vw"
            mr="3vw"
          />
        </div>
      </div>
      <div className="h-144 w-screen"></div>
    </>
  );
}
export default Upload;
