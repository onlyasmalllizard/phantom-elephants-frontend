import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Maps from "./pages/Maps";
import Footer from "./components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  const [cohortData, setCohortData] = useState({});

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
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/maps" component={Maps} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
