import StatusCard from "../components/StatusCard";
import ChartLine from "../components/ChartLine";
import ChartBar from "../components/ChartBar";
import PageVisitsCard from "../components/PageVisitsCard";
import TrafficCard from "../components/TrafficCard";
import StudentDropdown from "../components/NameSelection";
import InputField from "../components/InputField/index";
import MessageNotification from "../components/MessageNotification/index";
import Comments from "../components/Comments/index";
import Doughnut from "../components/Doughnut/index";

export default function Dashboard({ massagedBackEndData }) {
  const donutDataset = {
    label: "My First Dataset",
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "grey",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    legend: {
      display: true,
      position: "left",
    },
  };
  return (
    <>
      <div className={"bg-light-blue-500 px-3 md:px-8 h-40"} />

      <div className="px-3 md:px-10 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 xl:grid-cols-100">
            <div className="xl:col-start-1 xl:col-end-6 px-4 mb-14">
              <MessageNotification content="hi" />
            </div>
          </div>
        </div>
      </div>
      <ChartLine data={massagedBackEndData} isGroup={true} id={0} />
      <div className="px-3 md:px-8">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
            <MessageNotification content="hi" />
            <Doughnut
              dataset={donutDataset}
              options={options}
              height="h-70"
              width="w-70"
            />
          </div>
        </div>
      </div>
    </>
  );
}
