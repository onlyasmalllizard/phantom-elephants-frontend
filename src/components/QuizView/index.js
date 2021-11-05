import H6 from '@material-tailwind/react/Heading6';

const QuizView = ({ quizzes, calculateIndex }) => {
  const doesntExistMessage = 'No quiz submitted for this day';
  const mondayQuizzes = quizzes[calculateIndex(0)];
  const tuesdayQuizzes = quizzes[calculateIndex(1)];
  const wednesdayQuizzes = quizzes[calculateIndex(2)];
  const thursdayQuizzes = quizzes[calculateIndex(3)];
  const fridayQuizzes = quizzes[calculateIndex(4)];
  return (
    <>
      <H6>Monday</H6>
      {mondayQuizzes ? `${mondayQuizzes}%` : doesntExistMessage}
      <H6>Tuesday</H6>
      {tuesdayQuizzes ? `${tuesdayQuizzes}%` : doesntExistMessage}
      <H6>Wednesday</H6>
      {wednesdayQuizzes ? `${wednesdayQuizzes}%` : doesntExistMessage}
      <H6>Thursday</H6>
      {thursdayQuizzes ? `${thursdayQuizzes}%` : doesntExistMessage}
      <H6>Friday</H6>
      {fridayQuizzes ? `${fridayQuizzes}% ` : doesntExistMessage}
    </>
  );
};

export default QuizView;
