import H6 from '@material-tailwind/react/Heading6';
import StudentWorkParagraph from 'components/StudentWorkParagraph';
const WorkshopsView = ({ workshops, calculateIndex }) => {
  const doesntExistMessage = 'Workshop not completed';

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
    </>
  );
};

export default WorkshopsView;
