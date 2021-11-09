const bootcamps = require('../dummyData');

export const tableHeaders = [
  { display: 'Bootcamper', id: 'name' },
  { display: 'Bootcamp', id: 'bootcampId' },
  { display: 'Region', id: 'bootcampRegion' },
  { display: 'Recap Tasks', id: 'avgRecapScore' },
  { display: 'Workshops', id: 'avgWorkshopScore' },
  { display: 'Quiz Avg %', id: 'avgQuiz' },
  { display: 'Mood Avg /5', id: 'avgExperience' },
];
export const viewOptions = [
  'All Students',
  ...bootcamps.map((bootcamp) => 'Bootcamp ' + bootcamp.id),
  ...bootcamps.map((bootcamp) => bootcamp.region),
];

export const filterOptions = {
  0: 'all',
  1: 'bootcampId',
  2: 'bootcampId',
  3: 'bootcampId',
  4: 'bootcampId',
  5: 'bootcampRegion',
  6: 'bootcampRegion',
  7: 'bootcampRegion',
  8: 'bootcampRegion',
};
export const filtationMethod = [
  'all',
  1,
  2,
  3,
  4,
  ...bootcamps.map((bootcamp) => bootcamp.region),
];
