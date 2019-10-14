import { headerTypes } from "./header.types";

const INITIAL_STATE = {
  fullPageNav: false
};

const headerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case headerTypes.TOGGLE_NAV_HIDDEN:
      return {
        ...state,
        fullPageNav: !state.fullPageNav
      };
    case headerTypes.HIDE_NAV:
      return {
        ...state,
        fullPageNav: false
      };
    default:
      return state;
  }
};

export default headerReducer;
