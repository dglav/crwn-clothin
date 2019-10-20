import { headerTypes } from "./header.types";

export const toggleNavHidden = () => ({
  type: headerTypes.TOGGLE_NAV_HIDDEN
});

export const hideNav = () => ({
  type: headerTypes.HIDE_NAV
});
