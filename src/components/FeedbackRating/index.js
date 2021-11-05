import H6 from '@material-tailwind/react/Heading6';

const FeedbackRating = ({ day, rating }) => {
  return (
    <H6>
      {day}: {rating ? `${rating} out of 5` : `Rating not submitted`}
    </H6>
  );
};

export default FeedbackRating;
