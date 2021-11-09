import React from "react";
import css from "./index.module.css";

function Loading() {
  return (
    <div className="h-screen flex justify-center items-center align-center text-center">
      <div id="loading" className={css.loading}>
        <h1>Fetching Data!</h1>
        <div className={css.ldsFacebook}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
