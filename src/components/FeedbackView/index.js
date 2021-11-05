import StudentWorkParagraph from '../StudentWorkParagraph';
import FeedbackRating from 'components/FeedbackRating';

const feedbackLabels = ['Morning: ', 'Afternoon: '];
const FeedbackView = ({
  feedbackExperience,
  feedbackAverageExp,
  feedbackComments,
  calculateIndex,
}) => {
  const doesntExistMessage = 'No feedback submitted';
  return (
    <>
      <FeedbackRating
        day="Monday"
        rating={feedbackAverageExp[calculateIndex(0)]}
      />
      <StudentWorkParagraph
        workArray={feedbackComments[calculateIndex(0)]}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating
        day="Tuesday"
        rating={feedbackAverageExp[calculateIndex(1)]}
      />
      <StudentWorkParagraph
        workArray={feedbackComments[calculateIndex(1)]}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating
        day="Wednesday"
        rating={feedbackAverageExp[calculateIndex(2)]}
      />
      <StudentWorkParagraph
        workArray={feedbackComments[calculateIndex(2)]}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating
        day="Thursday"
        rating={feedbackAverageExp[calculateIndex(3)]}
      />
      <StudentWorkParagraph
        workArray={feedbackComments[calculateIndex(3)]}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating
        day="Friday"
        rating={feedbackAverageExp[calculateIndex(4)]}
      />
      <StudentWorkParagraph
        workArray={feedbackComments[calculateIndex(4)]}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
    </>
  );
};

export default FeedbackView;
