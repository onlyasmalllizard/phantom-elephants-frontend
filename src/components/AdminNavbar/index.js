import { useLocation } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import NavbarInput from "@material-tailwind/react/NavbarInput";
import Image from "@material-tailwind/react/Image";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import ProfilePicture from "assets/img/team-1-800x800.jpg";

export default function AdminNavbar({
  showSidebar,
  setShowSidebar,
  setPushRight,
  pushRight,
}) {
  const location = useLocation().pathname;
  // if(location === "/"){
  //   localStorage.setItem()
  // }

  return (
    <nav
      className={`bg-light-blue-500 py-6 px-3 ${
        pushRight ? "ml-64" : ""
      } inherit xl:ml-64`}
    >
      <div className="container max-w-full mx-auto flex  items-center justify-between xl:pr-8 xl:pl-10">
        <div className="xl:hidden">
          {/* show sidebar */}
          <Button
            className={`${pushRight ? "hidden" : ""} xl:hidden`}
            color="transparent"
            buttonType="link"
            size="lg"
            iconOnly
            rounded
            ripple="light"
            onClick={() => {
              setShowSidebar("left-0");
              setPushRight(true);
            }}
          >
            <Icon name="menu" size="2xl" color="white" />
          </Button>
          <div
            className={`absolute top-2  ${
              showSidebar === "left-0" ? "left-64" : "-left-64"
            } z-50 transition-all duration-300 xl:hidden`}
          >
            {/* closeSidebar */}
            <Button
              color="transparent"
              buttonType="link"
              size="lg"
              iconOnly
              rounded
              ripple="light"
              onClick={() => {
                setShowSidebar("-left-64");
                setPushRight(false);
              }}
            >
              <Icon
                style={{ marginBottom: "10px" }}
                name="close"
                size="2xl"
                color="white"
              />
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className=" text-white font-bold tracking-wider mt-1 dashboard-consistent-header">
            {location === "/"
              ? "Dashboard"
              : location.replaceAll("/", "") === "upload"
              ? "File Upload"
              : location.replaceAll("/", "")[0].toUpperCase() +
                location.replaceAll("/", " ").slice(2)}
          </h4>

          <div className="flex">
            <div className="-mr-4 ml-6">
              <Dropdown
                color="transparent"
                buttonText={
                  <div className="w-12">
                    <Image src={ProfilePicture} rounded />
                  </div>
                }
                rounded
                style={{
                  padding: 0,
                  color: "transparent",
                }}
              >
                <DropdownItem color="lightBlue">Action</DropdownItem>
                <DropdownItem color="lightBlue">Another Action</DropdownItem>
                <DropdownItem color="lightBlue">Something Else</DropdownItem>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
