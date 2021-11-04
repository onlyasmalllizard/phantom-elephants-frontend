import { Switch, Route, Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Tables from "./pages/Tables";
import Upload from "./pages/Upload";
import Footer from "./components/Footer";

// Tailwind CSS Style Sheet
import "assets/styles/tailwind.css";

function App() {
  const [cohortData, setCohortData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3000/records", {
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      setCohortData(data.payload);
      setIsLoading(false);
    }
    getData();
  }, []);
  console.log(cohortData);
  return isLoading ? (
    "Loading"
  ) : (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Switch>
          <Route exact path="/" component={Dashboard} data={cohortData} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/upload" component={Upload} />
          <Redirect from="*" to="/" />
        </Switch>
        <Footer />
      </div>
    </>
  );
}

export default App;
