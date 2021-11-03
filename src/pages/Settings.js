import StatusCard from '../components/StatusCard';
import SettingsForm from '../components/SettingsForm';
// import ProfileCard from "../pages/ProfileCard";
import NameSelection from 'components/NameSelection';

export default function SettingsDashboard({ setBootcamp }) {
  return (
    <>
      <NameSelection setBootcamp={setBootcamp} />
    </>
  );
}
