export const listRecapTasks = (acc, cur) =>
  cur.recapTask ? [...acc, cur.recapTask.score] : [...acc, null];
