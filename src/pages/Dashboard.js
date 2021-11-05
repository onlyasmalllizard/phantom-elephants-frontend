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
import StudentList from "../components/StudentList/index";

export default function Dashboard({ massagedBackEndData }) {
  console.log(massagedBackEndData);
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
      <div className="flex flex-row justify-evenly h-screen ">
        <div classname="w-3/4">
          <StudentList dataSet={massagedBackEndData} />
        </div>
        <div className="flex flex-col justify-evenly w-3/4">
          <ChartLine data={massagedBackEndData} isGroup={true} id={0} />
          <div className="flex justify-evenly">
            <MessageNotification content="hi" />

            <Doughnut dataset={donutDataset} options={options} />
          </div>
        </div>
      </div>
    </>
  );
}
