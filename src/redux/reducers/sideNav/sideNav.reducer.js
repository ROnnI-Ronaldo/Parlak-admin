const INITIAL_STATE = {
  collapsed: false,
};

export const sideNavReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COLLAPSE_SIDE_NAV":
      return {
        collapsed: !state.collapsed,
      };
    default:
      return state;
  }
};
