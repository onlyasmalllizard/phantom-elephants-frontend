import H6 from "@material-tailwind/react/Heading6";

const ReflectionsView = ({ reflections, calculateIndex }) => {
  const doesntExistMessage = `No reflection submitted`;
  const mondayReflections = reflections[calculateIndex(0)];
  const tuedsayReflections = reflections[calculateIndex(1)];
  const wednesdayReflections = reflections[calculateIndex(2)];
  const thursdayReflections = reflections[calculateIndex(3)];
  const fridayReflections = reflections[calculateIndex(4)];
  return (
    <>
      <div className="flex flex-row justify-evenly align-center h-60 mt-8">
        <div className="w-1/5 border-r border-gray-200 ">
          <H6>Monday</H6>
          <div classname="mt-8">
            {mondayReflections
              ? `"${mondayReflections.content}"`
              : doesntExistMessage}
          </div>
        </div>
        <div className="w-1/5 border-r border-gray-200 ">
          <H6>Tuesday</H6>
          <div classname="mt-8">
            {tuedsayReflections
              ? `"${tuedsayReflections.content}"`
              : doesntExistMessage}
          </div>
        </div>
        <div className="w-1/5 border-r border-gray-200 ">
          <H6>Wednesday</H6>
          <div classname="mt-8">
            {wednesdayReflections
              ? `"${wednesdayReflections.content}"`
              : doesntExistMessage}
          </div>
        </div>
        <div className="w-1/5 border-r border-gray-200 ">
          <H6>Thursday</H6>
          <div classname="mt-8">
            {thursdayReflections
              ? `"${thursdayReflections.content}"`
              : doesntExistMessage}
          </div>
        </div>
        <div className="w-1/5 border-r border-gray-200 ">
          <H6>Friday</H6>
          <div classname="mt-8">
            {fridayReflections
              ? `"${fridayReflections.content}"`
              : doesntExistMessage}
          </div>
        </div>
      </div>
    </>
  );
};
export default ReflectionsView;
