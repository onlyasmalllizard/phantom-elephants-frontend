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
import { lineDataset } from './lib/lineData';
// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import '@material-tailwind/react/tailwind.css';
import { useHistory } from 'react-router';

import { UserProvider } from './contexts/UserContext';
import MapExample from 'components/MapExample';

function App() {
  const history = useHistory();
  const [defaultBootcamp, setBootcamp] = useState('');
  const [cohortData, setCohortData] = useState({});

  useEffect(() => {
    // place fetch request to API for bootcamp name
  }, [defaultBootcamp]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/records", {
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
          <Route exact path="/">
            <Dashboard data={lineDataset} />
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
    id: 1,
    avatar:
      'https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
    name: 'Mohit',
    email: 'example@gmail.com',
    bootcampId: 1,
    comments: [
      {
        comment: 'Heyy',
        author: 'Heyy',
        imageUrl:
          'https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
        date: Date.now,
      },
    ],
  },
  work: {
    recapTasks: [
      [
        { type: 'recap', title: 'basic javascript', score: 'amber' },
        { type: 'recap', title: 'array methods', score: 'green' },
        { type: 'recap', title: 'basic javascript', score: 'amber' },
        { type: 'recap', title: 'array methods', score: 'green' },
        { type: 'recap', title: 'array methods', score: 'green' },
      ],
      [
        { type: 'recap', title: 'basic javascript', score: 'amber' },
        { type: 'recap', title: 'array methods', score: 'green' },
        { type: 'recap', title: 'basic javascript', score: 'amber' },
        { type: 'recap', title: 'array methods', score: 'green' },
        { type: 'recap', title: 'array methods', score: 'green' },
      ],
    ],
    workshops: [
      [
        { type: 'workshop', title: 'objects and classes', score: 'amber' },
        { type: 'workshop', title: 'objects', score: 'green' },
      ],
    ],
    quiz: [
      { type: 'quiz', title: 'array methods', score: 'amber' },
      { type: 'quiz', title: 'logic', score: 'green' },
    ],
  },
};

export default App;
