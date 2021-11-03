import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SettingsDashboard from "pages/Settings";
import Tables from "./pages/Tables";
import Maps from "./pages/StudentPage";
import Footer from "./components/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "semantic-ui-css/semantic.min.css";
import AdminNavbar from "./components/AdminNavbar";
import SidebarTest from "./components/SideBar/index";
import ProfileCard from "pages/ProfileCard";
import StudentPage from "./pages/StudentPage";
import Settings from "./pages/Settings";
// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

import { UserProvider } from "./contexts/UserContext";

function App() {
  const [cohortData, setCohortData] = useState({});
  const [defaultBootcamp, setBootcamp] = useState("");
  useEffect(() => {
    // place fetch request to API for bootcamp name
  }, [defaultBootcamp]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/records", {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      return data.payload;
    }
    let data = getData();
    setCohortData(data);
  }, []);
  console.log(cohortData);

  return (
    <UserProvider>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route exact path="/tables">
            {" "}
            <Tables />
          </Route>

          <Route exact path="/studentdashboard">
            <StudentPage student={student} />
          </Route>

          <Route exact path="/settings">
            <SettingsDashboard setBootcamp={setBootcamp} />
          </Route>

          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </UserProvider>
  );
}

const student = {
  info: {
    avatar:
      "https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg",
    name: "Mohit",
    comments: [
      {
        comment: "Heyy",
        author: "Heyy",
        imageUrl:
          "https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg",
        date: Date.now,
      },
    ],
  },
};

export default App;
