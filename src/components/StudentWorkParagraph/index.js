import Paragraph from '@material-tailwind/react/Paragraph';
import uuid from 'react-uuid';

const StudentWorkParagraph = ({
  workArray,
  doesntExistMessage,
  labels = [],
}) => {
  console.log('feedbcak work array:', workArray);
  return (
    <section className="mt-8">
      {workArray.map((item, index) => (
        <Paragraph key={uuid()}>
          <div className="flex flex-col h-20">
            {
              <a href="https://github.com/onlyasmalllizard/phantom-elephants-frontend/tree/james-branch-details">
                {labels[index]}
              </a>
            }

            {item ? item : doesntExistMessage}
          </div>
        </Paragraph>
      ))}
    </section>
  );
};

export default StudentWorkParagraph;
