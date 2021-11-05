import H6 from '@material-tailwind/react/Heading6';

const ReflectionsView = ({ reflections, calculateIndex }) => {
  const doesntExistMessage = `No reflection submitted`;
  const mondayReflections = reflections[calculateIndex(0)];
  const tuedsayReflections = reflections[calculateIndex(1)];
  const wednesdayReflections = reflections[calculateIndex(2)];
  const thursdayReflections = reflections[calculateIndex(3)];
  const fridayReflections = reflections[calculateIndex(4)];
  return (
    <>
      <H6>Monday</H6>
      {mondayReflections
        ? `"${mondayReflections.content}"`
        : doesntExistMessage}
      <H6>Tuesday</H6>
      {tuedsayReflections
        ? `"${tuedsayReflections.content}"`
        : doesntExistMessage}
      <H6>Wednesday</H6>
      {wednesdayReflections
        ? `"${wednesdayReflections.content}"`
        : doesntExistMessage}
      <H6>Thursday</H6>
      {thursdayReflections
        ? `"${thursdayReflections.content}"`
        : doesntExistMessage}
      <H6>Friday</H6>
      {fridayReflections
        ? `"${fridayReflections.content}"`
        : doesntExistMessage}
    </>
  );
};
export default ReflectionsView;
