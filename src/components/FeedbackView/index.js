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

  // Monday
  const mondayAverageExp = feedbackAverageExp[calculateIndex(0)];
  const mondayComments = feedbackComments[calculateIndex(0)];

  // Tuesday
  const tuesdayAverageExp = feedbackAverageExp[calculateIndex(1)];
  const tuesdayComments = feedbackComments[calculateIndex(1)];

  // Wednesday
  const wednesdayAverageExp = feedbackAverageExp[calculateIndex(2)];
  const wednesdayComments = feedbackComments[calculateIndex(2)];

  // Thursday
  const thursdayAverageExp = feedbackAverageExp[calculateIndex(3)];
  const thursdayComments = feedbackComments[calculateIndex(3)];

  // Friday
  const fridayAverageExp = feedbackAverageExp[calculateIndex(4)];
  const fridayComments = feedbackComments[calculateIndex(4)];

  return (
    <>
      <FeedbackRating day="Monday" rating={mondayAverageExp} />
      <StudentWorkParagraph
        workArray={mondayComments}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating day="Tuesday" rating={tuesdayAverageExp} />
      <StudentWorkParagraph
        workArray={tuesdayComments}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating day="Wednesday" rating={wednesdayAverageExp} />
      <StudentWorkParagraph
        workArray={wednesdayComments}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating day="Thursday" rating={thursdayAverageExp} />
      <StudentWorkParagraph
        workArray={thursdayComments}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
      <FeedbackRating day="Friday" rating={fridayAverageExp} />
      <StudentWorkParagraph
        workArray={fridayComments}
        labels={feedbackLabels}
        doesntExistMessage={doesntExistMessage}
      />
    </>
  );
};

export default FeedbackView;
