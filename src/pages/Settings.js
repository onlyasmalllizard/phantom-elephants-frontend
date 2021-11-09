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
     <div className="flex flex-col bg-blue-600"/>
     <div className="flex flex-center"/>
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
        itemOptions={["1 Week", "2 Weeks", "1 Month", "2 Months"]}/>

        </CardBody>
  </Card>

    <div className="flex justify-center">
    <Card>
        <CardBody >
           <CardProfile>
             <div className="flex justify-around"/>
              <Header as="h3" dividing>
                User Settings
              </Header>
           </CardProfile>
      </CardBody>
  </Card> 


  <Card className="flex min-w-150 " >
     <CardBody >
     <div className="flex flex-col bg-blue-600" >
     <div className="flex flex-col w-auto"/>
     <div className="bg-light-blue-500 h-30 "/>
       <Header as="h3" dividing>
               Calendar
       </Header>
      </div>
      <div className="flex flex-col">
         <Calendar onChange={onChange} value={value}/>
      </div>
       </CardBody>
       
   </Card>
   </div>

      </>
)};

// w-full3