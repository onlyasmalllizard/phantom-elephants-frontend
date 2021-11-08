import H6 from "@material-tailwind/react/Heading6";

const QuizView = ({ quizzes, calculateIndex }) => {
  const doesntExistMessage = "No quiz submitted for this day";
  const mondayQuizzes = quizzes[calculateIndex(0)];
  const tuesdayQuizzes = quizzes[calculateIndex(1)];
  const wednesdayQuizzes = quizzes[calculateIndex(2)];
  const thursdayQuizzes = quizzes[calculateIndex(3)];
  const fridayQuizzes = quizzes[calculateIndex(4)];
  return (
    <>
      <div className="flex flex-row justify-evenly align-center h-40 mt-8">
        <div className="w-1/5 border-r border-gray-200">
          <H6>Monday</H6>
          <div className="mt-8">
            {mondayQuizzes ? `${mondayQuizzes}%` : doesntExistMessage}
          </div>
        </div>{" "}
        <div className="w-1/5 border-r border-gray-200">
          <H6>Tuesday</H6>
          <div className="mt-8">
            {tuesdayQuizzes ? `${tuesdayQuizzes}%` : doesntExistMessage}
          </div>
        </div>{" "}
        <div className="w-1/5 border-r border-gray-200">
          <H6>Wednesday</H6>
          <div className="mt-8">
            {wednesdayQuizzes ? `${wednesdayQuizzes}%` : doesntExistMessage}
          </div>
        </div>{" "}
        <div className="w-1/5 border-r border-gray-200">
          <H6>Thursday</H6>
          <div className="mt-8">
            {thursdayQuizzes ? `${thursdayQuizzes}%` : doesntExistMessage}
          </div>
        </div>{" "}
        <div className="w-1/5">
          <H6>Friday</H6>
          <div className="mt-8">
            {fridayQuizzes ? `${fridayQuizzes}% ` : doesntExistMessage}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizView;
