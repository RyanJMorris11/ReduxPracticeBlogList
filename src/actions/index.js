import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  console.log('about to fetchPosts');
  await dispatch(fetchPosts());

  // const userIds = _.uniq(_.map(getState().posts, 'userId'));
  // console.log(userIds);
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //equivolent of the above
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');
  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  // console.log('getting id:', id);
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// async-await wraps this stuff up so that it no longer returns a plain JS object
// while it's waiting, it returns the request object as a placeholder
// The request object doesn't have a type property.
// Thank babel
// export const fetchPostsBad = async () => {
//   // Bad approach!!!
//   // This breaks the rules of an action creator
//   // Must Use Middleware (e.g. redux-thunk)
//   const response = await jsonPlaceholder.get('/posts');

//   return {
//     type: 'FETCH_POSTS',
//     payload: response,
//   };
// };

// export const fetchPostsBad2 = () => {
//   // Also bad approach!
//   // Promise will return before it's ready for use
//   const promise = jsonPlaceholder.get('/posts');

//   return {
//     type: 'FETCH_POSTS',
//     payload: promise,
//   };
// };
