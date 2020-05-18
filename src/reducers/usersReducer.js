export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      // console.log('FETCH_USER reducer');
      return [...state, action.payload];
    default:
      // console.log('Default usersReducer');
      return state;
  }
};
