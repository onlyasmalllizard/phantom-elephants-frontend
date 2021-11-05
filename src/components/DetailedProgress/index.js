/*
take in student data

Display Quizzes, Workshops, Recaps, Reflections, and Feedback separated into week view
Dropdown to switch week
*/
import { useState } from 'react';
import OutlineDropdown from 'components/OutlineDropdown';
import DropDown from 'components/DropDown';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import H4 from '@material-tailwind/react/Heading4';

import Tab from '@material-tailwind/react/Tab';
import TabList from '@material-tailwind/react/TabList';
import TabItem from '@material-tailwind/react/TabItem';
import TabContent from '@material-tailwind/react/TabContent';
import TabPane from '@material-tailwind/react/TabPane';
import H6 from '@material-tailwind/react/Heading5';
import Paragraph from '@material-tailwind/react/Paragraph';
import FeedbackView from 'components/FeedbackView';
import ReflectionsView from 'components/ReflectionsView';

const viewOptions = [
  'Week 1',
  'Week 2',
  'Week 3',
  'Week 4',
  'Week 5',
  'Week 6',
  'Week 7',
  'Week 8',
  'Week 9',
  'Week 10',
  'Week 11',
  'Week 12',
];

const DetailedProgress = ({ student }) => {
  const [week, setWeek] = useState(0);
  const [hasWork, setHasWork] = useState(student.hasWork);
  const [openTab, setOpenTab] = useState(1);
  console.log(student);

  // Day is 0 for Monday, 1 for Tuesday, ... 4 for Friday
  const calculateIndex = (day) => {
    return 5 * week + day;
  };
  return (
    <Tab>
      <TabList color="lightBlue">
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(1);
          }}
          ripple="light"
          active={openTab === 1 ? true : false}
          href="tabItem"
        >
          Recap Task
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(2);
          }}
          ripple="light"
          active={openTab === 2 ? true : false}
          href="tabItem"
        >
          Workshops
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(3);
          }}
          ripple="light"
          active={openTab === 3 ? true : false}
          href="tabItem"
        >
          Quizzes
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(4);
          }}
          ripple="light"
          active={openTab === 4 ? true : false}
          href="tabItem"
        >
          Feedback
        </TabItem>
        <TabItem
          onClick={(e) => {
            e.preventDefault();
            setOpenTab(5);
          }}
          ripple="light"
          active={openTab === 5 ? true : false}
          href="tabItem"
        >
          Reflections
        </TabItem>
      </TabList>
      <OutlineDropdown
        text={viewOptions[0]}
        state={week}
        setState={setWeek}
        options={viewOptions}
      />
      <TabContent>
        <TabPane active={openTab === 1 ? true : false}>Recap Task</TabPane>
        <TabPane active={openTab === 2 ? true : false}>
          Workshops
          <H6>Monday</H6>
          <H6>Tuesday</H6>
          <H6>Wednesday</H6>
          <H6>Thursday</H6>
          <H6>Friday</H6>
        </TabPane>
        <TabPane active={openTab === 3 ? true : false}>
          Quizzes
          <H6>Monday</H6>
          <H6>Tuesday</H6>
          <H6>Wednesday</H6>
          <H6>Thursday</H6>
          <H6>Friday</H6>
        </TabPane>
        <TabPane active={openTab === 4 ? true : false}>
          {hasWork ? (
            <FeedbackView
              feedbackComments={student.feedbackCommentsArray}
              feedbackExperience={student.feedbackExArray}
              feedbackAverageExp={student.feedbackExDayAvgArray}
              calculateIndex={calculateIndex}
            />
          ) : (
            <H6>{`${student.name} has no submitted work!`}</H6>
          )}
        </TabPane>
        <TabPane active={openTab === 5 ? true : false}>
          <ReflectionsView
            reflections={student.reflections}
            week={week}
            calculateIndex={calculateIndex}
          />
        </TabPane>
      </TabContent>
    </Tab>
  );
};

export default DetailedProgress;
