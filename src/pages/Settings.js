import StatusCard from "../components/StatusCard";
import SettingsForm from "../components/SettingsForm";
// import ProfileCard from "../pages/ProfileCard";
import NameSelection from "components/NameSelection";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CardProfile } from "components/EditProfile";
import Dropdown from "../components/DropDown";
import bootcamps from "dummyData";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import {Header} from "semantic-ui-react";


export default function SettingsDashboard() {
  const [value, onChange] = useState(new Date());
  const defaultBootcamp = localStorage.getItem("defaultBootcamp") || 0;
  const [datasetId, setDatasetId] = useState(defaultBootcamp);
  localStorage.setItem("defaultBootcamp", datasetId);
  const defaultComparison = localStorage.getItem("defaultComparison") || 0;
  const [comparisonId, setComparisionId] = useState(defaultComparison);
  localStorage.setItem("defaultComparison", comparisonId);
  // console.log
  
  return (
    <>
    <Card>
        <CardBody>
         <div className="w-full">
          <Header as="h3" dividing>
           User Settings
         </Header>
         </div>
         <CardProfile />
      <Dropdown
        state={datasetId}
        setState={setDatasetId}
        label="Set Default Bootcamp"
        itemOptions={[
          "All Bootcamps",
          ...bootcamps.map((bootcamp) => {
            return bootcamp.id + ": " + bootcamp.region;
          }),
          "Watchlist",
        ]} />  
      <Dropdown
        state={comparisonId}
        setState={setComparisionId}
        label="Set Comparision Period"
        itemOptions={["1 Week", "2 Weeks", "1 Month", "2 Months"]} />
      </CardBody>
  </Card> 

  <Card>
     <CardBody>
     <div className="w-full">
       <Header as="h3" dividing>
               Calendar
       </Header>
      </div>
         <Calendar onChange={onChange} value={value} />
       </CardBody>
  </Card>
      </>
)};

