import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";

const RecapView = ({ recaps, week }) => {
  const selectedRecap = recaps[week];

  if (!selectedRecap) {
    return (
      <div className="h-40 flex flex-col justify-evenly">
        {" "}
        <H6>{`Week ${week + 1} recap not completed!`}</H6>
      </div>
    );
  }
  return (
    <>
      <div className="h-40 flex flex-col justify-evenly">
        <div className="mt-5">
          <H6>{selectedRecap.title}</H6>
        </div>

        <Paragraph>
          <b>Score: </b>
          {selectedRecap.score}
        </Paragraph>
      </div>
    </>
  );
};

export default RecapView;
