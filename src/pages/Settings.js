import StatusCard from "../components/StatusCard";
import SettingsForm from "../components/SettingsForm";
// import ProfileCard from "../pages/ProfileCard";
import NameSelection from "components/NameSelection";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CardProfile } from "components/EditProfile";

export default function SettingsDashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <CardProfile />
    </div>
  );
}
