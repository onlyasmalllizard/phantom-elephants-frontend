import StatusCard from "../components/StatusCard";
import SettingsForm from "../components/SettingsForm";
// import ProfileCard from "../pages/ProfileCard";
import StudentDropdown from "components/Student List";

export default function SettingsDashboard({ setBootcamp }) {
  return (
    <>
      <StudentDropdown setBootcamp={setBootcamp} />
    </>
  );
}
