import Paragraph from '@material-tailwind/react/Paragraph';
import uuid from 'react-uuid';

const StudentWorkParagraph = ({
  workArray,
  doesntExistMessage,
  labels = [],
}) => {
  console.log(workArray);
  return (
    <section>
      {workArray.map((item, index) => (
        <Paragraph key={uuid()}>
          {<b>{labels[index]}</b>}
          {item ? item : doesntExistMessage}
        </Paragraph>
      ))}
    </section>
  );
};

export default StudentWorkParagraph;
