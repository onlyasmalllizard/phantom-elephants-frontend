import H6 from "@material-tailwind/react/Heading6";
import StudentWorkParagraph from "components/StudentWorkParagraph";
const WorkshopsView = ({ workshops, calculateIndex }) => {
  const doesntExistMessage = "Workshop not completed";

  const mondayWorkshops = workshops[calculateIndex(0)];
  const tuesdayWorkshops = workshops[calculateIndex(1)];
  const wednesdayWorkshops = workshops[calculateIndex(2)];
  const thursdayWorkshops = workshops[calculateIndex(3)];
  const fridayWorkshops = workshops[calculateIndex(4)];
  const createTitleArray = (workshopList) => {
    return workshopList.map((workshopDetails) => `${workshopDetails.title}: `);
  };

  const createScoresArray = (workshopList) => {
    console.log(workshopList);
    return workshopList.map((workshopDetails) => workshopDetails.score);
  };

  return (
    <>
      <div className="flex flex-row justify-evenly align-center h-60 mt-8">
        <div className="w-1/5 border-r border-gray-200 ">
          {" "}
          <H6>Monday</H6>
          {mondayWorkshops ? (
            <StudentWorkParagraph
              workArray={createScoresArray(mondayWorkshops)}
              doesntExistMessage={doesntExistMessage}
              labels={createTitleArray(mondayWorkshops)}
            />
          ) : (
            doesntExistMessage
          )}
        </div>
        <div className="w-1/5 border-r border-gray-200">
          {" "}
          <H6>Tuesday</H6>
          {tuesdayWorkshops ? (
            <StudentWorkParagraph
              workArray={createScoresArray(tuesdayWorkshops)}
              doesntExistMessage={doesntExistMessage}
              labels={createTitleArray(tuesdayWorkshops)}
            />
          ) : (
            doesntExistMessage
          )}
        </div>
        <div className="w-1/5 border-r border-gray-200">
          <H6>Wednesday</H6>
          {wednesdayWorkshops ? (
            <StudentWorkParagraph
              workArray={createScoresArray(wednesdayWorkshops)}
              doesntExistMessage={doesntExistMessage}
              labels={createTitleArray(wednesdayWorkshops)}
            />
          ) : (
            doesntExistMessage
          )}
        </div>
        <div className="w-1/5 border-r border-gray-200">
          {" "}
          <H6>Thursday</H6>
          {thursdayWorkshops ? (
            <StudentWorkParagraph
              workArray={createScoresArray(thursdayWorkshops)}
              doesntExistMessage={doesntExistMessage}
              labels={createTitleArray(thursdayWorkshops)}
            />
          ) : (
            doesntExistMessage
          )}
        </div>
        <div className="w-1/5">
          {" "}
          <H6>Friday</H6>
          {fridayWorkshops ? (
            <StudentWorkParagraph
              workArray={createScoresArray(fridayWorkshops)}
              doesntExistMessage={doesntExistMessage}
              labels={createTitleArray(fridayWorkshops)}
            />
          ) : (
            doesntExistMessage
          )}
        </div>
      </div>
    </>
  );
};

export default WorkshopsView;
