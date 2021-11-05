export const FILTER_BY_ID = "FILTER_BY_ID";

const filterIDs = {
  0: "bootcampID",
  1: "bootcampID",
  2: "bootcampID",
  3: "bootcampID",
  4: "bootcampRegion",
  5: "bootcampRegion",
  6: "bootcampRegion",
  7: "bootcampRegion",
};
// const  = {
//     0: 'bootcampID',
//     1: 'bootcampID',
//     2: 'bootcampID',
//     3: 'bootcampID',
//     4: 'bootcampRegion',
//     5: 'bootcampRegion',
//     6: 'bootcampRegion',
//     7: 'bootcampRegion',
// }

const reducer = (state, { type, payload }) => {
  switch (type) {
    case FILTER_BY_ID:
    //   return { ...state, ...state.filter((student) => student[filterIDs[payload]] === ) };
    default:
      return state;
  }
};

export default reducer;
