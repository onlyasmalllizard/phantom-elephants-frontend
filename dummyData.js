const faker = require("faker");

function genDate(day) {
  let date = new Date();
  date.setDate(date.getDate() + day - 154);
  return date.toISOString().split("T")[0].replace("/", "-");
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// array of 12x5 subject list
// array of 12 recap task titles
// array of
// an incremental multplier through each bootcamp

const SoC_EXAMPLE1 = {
  cohort1: [
    {
      info: {
        id: 1,
        name: "bootcamp1",
        region: "West-Midlands",
        startDate: "12-05-21",
      },
      students: [
        {
          info: {
            name: "James Perrett",
            username: "PerrettJ4",
            avatar: "./../images/legend",
          },
          work: {
            recapTasks: [
              [
                { title: "basic javascript", score: "amber" },
                { title: "array methods", score: "green" },
                { title: "basic javascript", score: "amber" },
                { title: "array methods", score: "green" },
                { title: "array methods", score: "green" },
              ],
              [
                { title: "basic javascript", score: "amber" },
                { title: "array methods", score: "green" },
                { title: "basic javascript", score: "amber" },
                { title: "array methods", score: "green" },
                { title: "array methods", score: "green" },
              ],
            ],
            workshops: [
              [
                { title: "objects and classes", score: "amber" },
                { title: "objects", score: "green" },
              ],
            ],
            quiz: [
              { title: "array methods", score: "amber" },
              { title: "logic", score: "green" },
            ],
          },
        },
      ],
    },
  ],
  cohort2: {},
};

const SoC_EXAMPLE2 = {
  cohort1: [
    {
      info: {
        name: "bootcamp1",
        region: "West-Midlands",
        startDate: "12-05-21",
      },
      students: [
        {
          info: {
            name: "James Perrett",
            username: "PerrettJ4",
          },
          work: [
            [
              {
                week: 1,
                day: 1,
                recapTasks: { title: "basic javascript", score: "amber" },
                workshops: [{ title: "objects and classes", score: "amber" }],
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkr" },
                  afternoon: { experienceRating: 3, comment: "skkraaap" },
                },
              },
              {
                recapTasks: {},
                workshops: [{}],
                quiz: {},
                didAttend: false,
                feedback: {
                  morning: { experienceRating: null, comment: null },
                  afternoon: { experienceRating: null, comment: null },
                },
              },
              {
                recapTasks: {},
                workshops: [{ title: "objects and classes", score: "amber" }],
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkkkreesh" },
                  afternoon: { experienceRating: 4, comment: "skkkkraap" },
                },
              },
              {
                recapTasks: {},
                workshops: [{}],
                quiz: {},
                didAttend: false,
                feedback: {
                  morning: { experienceRating: null, comment: null },
                  afternoon: { experienceRating: null, comment: null },
                },
              },
              {
                recapTasks: { title: "basic javascript", score: "amber" },
                workshops: [{ title: "objects and classes", score: "amber" }],
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkkkreesh" },
                  afternoon: { experienceRating: 4, comment: "shheeesh" },
                },
              },
            ],
            [
              {
                recapTasks: { title: "basic javascript", score: "amber" },
                workshops: { title: "objects and classes", score: "amber" },
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkr" },
                  afternoon: { experienceRating: 3, comment: "skkraaap" },
                },
              },
              {
                recapTasks: {},
                workshops: {},
                quiz: {},
                didAttend: false,
                feedback: {
                  morning: { experienceRating: null, comment: null },
                  afternoon: { experienceRating: null, comment: null },
                },
              },
              {
                recapTasks: { title: "basic javascript", score: "amber" },
                workshops: { title: "objects and classes", score: "amber" },
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkkkreesh" },
                  afternoon: { experienceRating: 4, comment: "skkkkraap" },
                },
              },
              {
                recapTasks: {},
                workshops: {},
                quiz: {},
                didAttend: false,
                feedback: {
                  morning: { experienceRating: null, comment: null },
                  afternoon: { experienceRating: null, comment: null },
                },
              },
              {
                recapTasks: { title: "basic javascript", score: "amber" },
                workshops: { title: "objects and classes", score: "amber" },
                quiz: { title: "array methods", score: "5/12" },
                didAttend: true,
                feedback: {
                  morning: { experienceRating: 4, comment: "skkkkkkkkreesh" },
                  afternoon: { experienceRating: 4, comment: "skkkkraap" },
                },
              },
            ],
          ],
        },
      ],
    },
  ],
  cohort2: {},
};
function genTaskArrays(weeks) {
  let dummyRecapTasks = [];
  let dummyWorkshops = [];
  let quizes = [];
  for (let i = 0; i < weeks; i++) {
    dummyRecapTasks.push(`Recap Task ${i + 1}`);
  }
  for (let i = 0; i < weeks * 5; i++) {
    dummyWorkshops.push(`Workshop ${i + 1}`);
  }
  for (let i = 0; i < weeks * 5; i++) {
    quizes.push(`Quiz ${i + 1}`);
  }
  return dummyRecapTasks, dummyWorkshops, quizes;
}

const recapTask = [
  "Introduction to JS and computational thinking",
  "Advanced JS",
  "Node and Express",
  "Databases and APIs",
  "Testing and Paradigms",
  "Introduction to React",
  "Advanced React and Design Thinking process",
  "Project Week",
  "Retros and Deployment",
  "Advanced computer science concepts",
  "Typescript and advanced tools",
  "Platform and cloud engineering",
];
const recapTaskOriginal = [
  "Recap Task 1",
  "Recap Task 2",
  "Recap Task 3",
  "Recap Task 4",
  "Recap Task 5",
  "Recap Task 6",
  "Recap Task 7",
  "Recap Task 8",
  "Recap Task 9",
  "Recap Task 10",
  "Recap Task 11",
  "Recap Task 12",
];
const workshops = [
  "Workshop 1",
  "Workshop 2",
  "Workshop 3",
  "Workshop 4",
  "Workshop 5",
  "Workshop 6",
  "Workshop 7",
  "Workshop 8",
  "Workshop 9",
  "Workshop 10",
  "Workshop 11",
  "Workshop 12",
  "Workshop 13",
  "Workshop 14",
  "Workshop 15",
  "Workshop 16",
  "Workshop 17",
  "Workshop 18",
  "Workshop 19",
  "Workshop 20",
  "Workshop 21",
  "Workshop 22",
  "Workshop 23",
  "Workshop 24",
  "Workshop 25",
  "Workshop 26",
  "Workshop 27",
  "Workshop 28",
  "Workshop 29",
  "Workshop 30",
  "Workshop 31",
  "Workshop 32",
  "Workshop 33",
  "Workshop 34",
  "Workshop 35",
  "Workshop 36",
  "Workshop 37",
  "Workshop 38",
  "Workshop 39",
  "Workshop 40",
  "Workshop 41",
  "Workshop 42",
  "Workshop 43",
  "Workshop 44",
  "Workshop 45",
  "Workshop 46",
  "Workshop 47",
  "Workshop 48",
  "Workshop 49",
  "Workshop 50",
  "Workshop 51",
  "Workshop 52",
  "Workshop 53",
  "Workshop 54",
  "Workshop 55",
  "Workshop 56",
  "Workshop 57",
  "Workshop 58",
  "Workshop 59",
  "Workshop 60",
];
const quizes = [
  "Quiz 1",
  "Quiz 2",
  "Quiz 3",
  "Quiz 4",
  "Quiz 5",
  "Quiz 6",
  "Quiz 7",
  "Quiz 8",
  "Quiz 9",
  "Quiz 10",
  "Quiz 11",
  "Quiz 12",
  "Quiz 13",
  "Quiz 14",
  "Quiz 15",
  "Quiz 16",
  "Quiz 17",
  "Quiz 18",
  "Quiz 19",
  "Quiz 20",
  "Quiz 21",
  "Quiz 22",
  "Quiz 23",
  "Quiz 24",
  "Quiz 25",
  "Quiz 26",
  "Quiz 27",
  "Quiz 28",
  "Quiz 29",
  "Quiz 30",
  "Quiz 31",
  "Quiz 32",
  "Quiz 33",
  "Quiz 34",
  "Quiz 35",
  "Quiz 36",
  "Quiz 37",
  "Quiz 38",
  "Quiz 39",
  "Quiz 40",
  "Quiz 41",
  "Quiz 42",
  "Quiz 43",
  "Quiz 44",
  "Quiz 45",
  "Quiz 46",
  "Quiz 47",
  "Quiz 48",
  "Quiz 49",
  "Quiz 50",
  "Quiz 51",
  "Quiz 52",
  "Quiz 53",
  "Quiz 54",
  "Quiz 55",
  "Quiz 56",
  "Quiz 57",
  "Quiz 58",
  "Quiz 59",
  "Quiz 60",
];

// GENERATING SCORES FOR WORK TASKS
function genQuizScoreAsString() {
  let genQuizSize = () => getRandomInt(8, 16);
  let quizSize = genQuizSize();

  let quizScore = getRandomInt(Math.floor(quizSize / 2), quizSize);
  return {
    scoreAsString: `${quizScore}/${quizSize}`,
    percentage: Math.floor((quizScore / quizSize) * 100),
  };
}
const workColors = ["red", "amber", "green"];
const genColorScore = () => workColors[getRandomInt(0, 3)];

function genRecapTask(day) {
  return { title: recapTask[day - 1], score: genColorScore() };
}
function genWorkshopTasks(day) {
  let workshopsCompleted = [];
  let numCompleted = getRandomInt(0, 3);
  for (let i = 0; i < numCompleted; i++) {
    workshopsCompleted.push({
      title: workshops[+day + i - 1],
      score: genColorScore(),
    });
  }
  return workshopsCompleted;
}
function genQuiz(day) {
  return { title: quizes[day - 1], ...genQuizScoreAsString() };
}
function genAttend(cf) {
  let chance = getRandomInt(0, 11);
  return chance < 1 ? false : true;
}
function genFeedback(day) {
  let morning = {};
  let afternoon = {};
  let chance1 = getRandomInt(0, 2);
  if (chance1 > 0) {
    morning = {
      experienceRating: getRandomInt(1, 6),
      comment: faker.lorem.sentence(),
    };
  }
  let chance2 = getRandomInt(0, 2);
  if (chance2 > 0) {
    afternoon = {
      experienceRating: getRandomInt(1, 6),
      comment: faker.lorem.sentence(),
    };
  }
  return { morning, afternoon };
}
const day = {
  recapTasks: { title: "basic javascript", score: "amber" },
  workshops: [{ title: "objects and classes", score: "amber" }],
  quiz: { title: "array methods", score: "5/12" },
  didAttend: true,
  feedback: {
    morning: { experienceRating: 4, comment: "skkkkkkkkreesh" },
    afternoon: { experienceRating: 4, comment: "skkkkraap" },
  },
};

function genDay(day) {
  let attendance = genAttend();
  return attendance
    ? {
        date: genDate(day),
        week: Math.ceil(day / 5),
        day: day,
        didAttend: true,
        recapTasks:
          day === 1
            ? null
            : (day - 1) % 5 === 0
            ? genRecapTask(Math.ceil(day / 5))
            : null,
        workshops: genWorkshopTasks(day),
        quiz: genQuiz(day),
        feedback: {
          ...genFeedback(day),
        },
        reflection: faker.lorem.sentences(getRandomInt(2, 5)),
      }
    : {
        date: genDate(day),
        week: Math.ceil(day / 5),
        day: day,
        didAttend: attendance,
        recapTasks: null,
        workshops: null,
        quiz: null,
        feedback: {
          morning: null,
          afternoon: null,
        },
        reflection: faker.lorem.sentences(getRandomInt(2, 5)),
      };
}
function genWeekRange(startWeek, endWeek) {
  let wk = [];
  for (let i = 5 * startWeek - 4; i <= 5 * endWeek; i++) {
    wk.push(genDay(i));
  }
  return wk;
}

function genStudent(id, startWeek, endWeek) {
  return {
    info: {
      id: id,
      name: faker.name.findName(),
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    },
    work: genWeekRange(startWeek, endWeek),
  };
}

const bootcamps = [
  "West Midlands",
  "East Midlands",
  "North West",
  "South East & London",
];
function genBootcamps(numOfBootcamps, bootcampSize, startWeek, endWeek) {
  let students = [];
  let bootcampsList = [];
  let bootcampID = 0;
  for (let i = 1; i <= numOfBootcamps * bootcampSize; i++) {
    students.push(genStudent(i, startWeek, endWeek));
    if (students.length % bootcampSize === 0) {
      bootcampsList.push({
        id: ++bootcampID,
        name: `Bootcamp${bootcampID}`,
        region: bootcamps[bootcampID - 1],
        startDate: genDate(1),
        students: students,
      });
      students = [];
    }
  }
  return bootcampsList;
}
// GEN BOOTCAMP/S (NumOfBootcamps, BootcampSize, StartWeek, EndWeek)
const cohortsTest = genBootcamps(3, 20, 1, 12);
console.log(cohortsTest[0].students[0]);

const legends = [
  "Liz Kaufman",
  "Lizard Morrow",
  "Juweyriya Abdikadir",
  "Mohit Sharma",
  "James Perrett",
  "Arshi",
  "Loz",
];

function genUsers() {
  let users = [];
  legends.forEach((leg, index) => {
    let user = {
      name: leg,
      bootcampID: getRandomInt(1, cohortsTest.length + 1),
      watchList: [],
      menteeID: null,
    };
    users.push(user);
  });
  return users;
}

console.log(genUsers());
