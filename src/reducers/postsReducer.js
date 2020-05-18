export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      // console.log('FETCH_POSTS reducer');
      return action.payload;
    default:
      // console.log('Default postsReducer');
      return state;
  }
};
