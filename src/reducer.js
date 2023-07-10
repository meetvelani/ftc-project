export const initialState = {
  userLoggedIn: sessionStorage.getItem("token") ? true : false,
  createPostData:{},
  isLoading:false
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_LOGIN_STATUS":
      return {
        ...state,
        userLoggedIn: action.status,
      };
    case "SET_CREATE_POST_DATA":
      return {
        ...state,
        createPostData: action.data,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.status,
      };
    default:
      return state;
  }
}

export default reducer;
