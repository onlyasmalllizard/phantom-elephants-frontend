import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import SettingsDashboard from "pages/Settings";
import Tables from "./pages/Tables";
import { massage } from "./lib/allMassagedData";
import Footer from "./components/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "semantic-ui-css/semantic.min.css";
import AdminNavbar from "./components/AdminNavbar";
import ProfileCard from "pages/ProfileCard";
import StudentPage from "./pages/StudentPage";
import Upload from "./pages/Upload";
import Loading from "components/Loading/Loading";
import Settings from "./pages/Settings";
import "react-notifications-component/dist/theme.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import { useHistory } from "react-router";
import { UserProvider } from "./contexts/UserContext";

function App() {
  const [cohortData, setCohortData] = useState([]);
  const [defaultBootcamp, setBootcamp] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // place fetch request to API for bootcamp name
  }, [defaultBootcamp]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const API_URL = process.env.REACT_APP_API_URL + "/records";
      const response = await fetch(API_URL, {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCohortData(data.payload);
      setIsLoading(false);
    }
    getData();
  }, []);

  // console.log("post-massage: ", massage(cohortData));

  return isLoading ? (
    <Loading />
  ) : (
    <UserProvider>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/">
            <Dashboard massagedBackEndData={massage(cohortData)} />
          </Route>

          <Route exact path="/tables">
            <Tables massagedBackEndData={massage(cohortData)} />
          </Route>

          <Route path="/student/:id">
            <StudentPage massagedBackEndData={massage(cohortData)} />
          </Route>

          <Route path="/student">
            <StudentPage massagedBackEndData={massage(cohortData)} />
          </Route>

          <Route path="/upload">
            <Upload />
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

export default App;
