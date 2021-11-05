import H6 from '@material-tailwind/react/Heading6';

const ReflectionsView = ({ reflections, calculateIndex }) => {
  console.log(reflections[calculateIndex(0)].content);
  const doesntExistMessage = `No reflection submitted`;
  return (
    <>
      {reflections ? (
        <section>
          <H6>Monday</H6>
          {reflections[calculateIndex(0)]
            ? `"${reflections[calculateIndex(0)].content}"`
            : doesntExistMessage}
          <H6>Tuesday</H6>
          {reflections[calculateIndex(1)]
            ? `"${reflections[calculateIndex(1)].content}"`
            : doesntExistMessage}
          <H6>Wednesday</H6>
          {reflections[calculateIndex(2)]
            ? `"${reflections[calculateIndex(2)].content}"`
            : doesntExistMessage}
          <H6>Thursday</H6>
          {reflections[calculateIndex(3)]
            ? `"${reflections[calculateIndex(3)].content}"`
            : doesntExistMessage}
          <H6>Friday</H6>
          {reflections[calculateIndex(4)]
            ? `"${reflections[calculateIndex(4)].content}"`
            : doesntExistMessage}
        </section>
      ) : (
        <H6>No reflections submitted!</H6>
      )}
    </>
  );
};
export default ReflectionsView;
