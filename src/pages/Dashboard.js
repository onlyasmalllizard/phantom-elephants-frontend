import StatusCard from "../components/StatusCard";
import ChartLine from "../components/ChartLine";
import ChartBar from "../components/ChartBar";
import PageVisitsCard from "../components/PageVisitsCard";
import TrafficCard from "../components/TrafficCard";
<<<<<<< HEAD
import StudentDropdown from "../components/StudentDropdownList";
import InputField from "components/InputField";
import MessageNotification from "components/MessageBox";
import CommentsBox from "components/Comments";
=======
>>>>>>> e41ab31d10ed77d82ffbb4b30df214a277b2799c

export default function Dashboard() {
  return (
    <>
      <div className={"bg-black px-3 md:px-8 h-40"} />

      <div className="px-3 md:px-10 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-100">
            <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
              <ChartLine />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <StudentDropdown />
            <InputField />
            <MessageNotification content="hi" />
            <CommentsBox url="https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg" />
          </div>
        </div>
      </div>
    </>
  );
}
