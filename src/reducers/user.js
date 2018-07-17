import { SET_USER, REMOVE_USER } from "../constants/ActionTypes";
import { fromJS } from "immutable";
const initialState = fromJS({
  email: "",
  name: "Chris"
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return fromJS(action.data);
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default user;
