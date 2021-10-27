import StatusCard from "../components/StatusCard";
import MapExample from "../components/MapExample";
import StudentProfile from "components/Studentprofile";

export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StudentProfile
              img="https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg"
              bio="It's Enrico Pallazo!"
            />
          </div>
        </div>
      </div>
    </>
  );
}
