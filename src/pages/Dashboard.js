import StatusCard from '../components/StatusCard';
import ChartLine from '../components/ChartLine';
import ChartBar from '../components/ChartBar';
import PageVisitsCard from '../components/PageVisitsCard';
import TrafficCard from '../components/TrafficCard';
import StudentDropdown from '../components/NameSelection';
import InputField from '../components/InputField/index';
import MessageNotification from '../components/MessageNotification/index';
import Comments from '../components/Comments/index';

export default function Dashboard({ data }) {
  return (
    <>
      <div className={'bg-black px-3 md:px-8 h-40'} />

      <div className="px-3 md:px-10 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-100">
            <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
              <ChartLine data={data} isGroup={true} id={0} />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <MessageNotification content="hi" />
            <StudentDropdown />
            <InputField />
          </div>
        </div>
      </div>
    </>
  );
}
