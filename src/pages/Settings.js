import StatusCard from "../components/StatusCard";
import SettingsForm from "../components/SettingsForm";
// import ProfileCard from "../pages/ProfileCard";
import StudentDropdown from "components/Student List";
import Form from "../components/Form";
import {Grid} from 'react-virtualized';

import 'react-virtualized/styles.css';
import {Column, Table} from 'react-virtualized';

import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer';
import {List} from 'react-virtualized';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';

// Grid data as an array of arrays
const list = [
  ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */],
  // And so on...
];

function cellRenderer({columnIndex, key, rowIndex, style}) {
  return (
    <div key={key} style={style}>
      {list[rowIndex][columnIndex]}
    </div>
  );
}


function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}
const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 200,
  fixedWidth: true,
});
// Our masonry layout will use 3 columns with a 10px gutter between
const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth: 200,
  spacer: 10,
});
function cellRender({index, key, parent, style}) {
  const datum = list[index];
  return (
    <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
      <div style={style}>
        <img
          src={datum.source}
          alt = "img"
           style={{
            height: datum.imageHeight,
            width: datum.imageWidth,
          }}
        />
        <h4>{datum.caption}</h4>
      </div>
    </CellMeasurer>
  );
}

export default function SettingsDashboard({ setBootcamp }) {
  return (
    <>
      <StudentDropdown setBootcamp={setBootcamp} />
      <Form/>
      <List
    width={300}
    height={300}
    rowCount={list.length}
    rowHeight={20}
    rowRenderer={rowRenderer}
    estimatedRowSize={192}
    scrollTop={10}
    columnCount={10}
  />,
  <Grid
    cellRenderer={cellRenderer}
    columnCount={list[0].length}
    columnWidth={200}
    height={300}
    rowCount={list.length}
    rowHeight={30}
    width={700}
  />,
  <Masonry
      cellCount={list.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRender}
      height={600}
      width={800}
    />
     
      </>
);
  };
  
 
 

