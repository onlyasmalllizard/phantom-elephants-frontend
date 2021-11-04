import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SettingsDashboard from 'pages/Settings';
import Tables from './pages/Tables';
import Maps from './pages/StudentPage';
import Footer from './components/Footer';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'semantic-ui-css/semantic.min.css';
import AdminNavbar from './components/AdminNavbar';
import ProfileCard from 'pages/ProfileCard';
import StudentPage from './pages/StudentPage';
import Upload from './pages/Upload';
import Settings from './pages/Settings';
import { lineDataset } from './lib/lineData';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import { useHistory } from 'react-router';
import { UserProvider } from './contexts/UserContext';

function App() {
  const [cohortData, setCohortData] = useState([]);
  const [defaultBootcamp, setBootcamp] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // place fetch request to API for bootcamp name
  }, [defaultBootcamp]);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch('http://localhost:3001/records', {
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      setCohortData(data.payload);
      setIsLoading(false);
    }
    getData();
    console.log('app: ', cohortData);
  }, []);

  return cohortData > 0 ? (
    'Loading'
  ) : (
    <UserProvider>
      <Sidebar />
      <div className="md:ml-64">
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <Switch>
            <Route exact path="/">
              <Dashboard data={cohortData} />
            </Route>

            <Route exact path="/tables">
              <Tables />
            </Route>

            <Route path="/student/:id">
              <StudentPage data={cohortData} />
            </Route>

            <Route path="/student">
              <StudentPage data={cohortData} />
            </Route>

            <Route path="/upload">
              <Upload />
            </Route>

            <Route exact path="/settings">
              <SettingsDashboard setBootcamp={setBootcamp} />
            </Route>

            <Redirect from="*" to="/" />
          </Switch>
        )}
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
