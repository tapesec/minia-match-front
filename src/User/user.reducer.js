export const MY_ACTION = "MY_ACTION";

export const typeInForm = (payload) => ({ type: MY_ACTION, payload });

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MY_ACTION:
      return {
        ...state,
        nickname: action.payload,
      };
    default:
      return state;
  }
};

export const getUser = (state) => state.user.nickname;

export default reducer;
