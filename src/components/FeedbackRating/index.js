import H6 from "@material-tailwind/react/Heading6";

const FeedbackRating = ({ day, rating }) => {
  return (
    <>
      <H6>{day}</H6>
      <H6>{rating ? `${rating} / 5` : `N/A`}</H6>
    </>
  );
};

export default FeedbackRating;
