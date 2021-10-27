import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Maps from "./pages/Maps";
import Footer from "./components/Footer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "semantic-ui-css/semantic.min.css";
import SidebarTest from "components/SidebarTest";
// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";
import ProfileCard from "components/ProfileCard";

function App() {
  return (
    <>
      <SidebarTest />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/studentdashboard" component={Maps} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profilecard" component={ProfileCard} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
