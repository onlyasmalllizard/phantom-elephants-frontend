export const tallyScores = (acc, curr) => {
  acc[curr] ? ++acc[curr] : (acc[curr] = 1);
  return acc;
};
