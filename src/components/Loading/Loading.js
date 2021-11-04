import React from "react";
import css from "./index.modules.css";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div id="loading" className={css}>
        <h1>Fetching Data!</h1>
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
