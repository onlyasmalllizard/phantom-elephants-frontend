import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';

const RecapView = ({ recaps, week }) => {
  const selectedRecap = recaps[week];

  if (!selectedRecap) {
    return <H6>{`Week ${week + 1} recap not completed!`}</H6>;
  }
  return (
    <>
      <H6>{selectedRecap.title}</H6>
      <Paragraph>
        <b>Score: </b>
        {selectedRecap.score}
      </Paragraph>
    </>
  );
};

export default RecapView;
