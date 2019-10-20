import { createSelector } from "reselect";

const selectHeader = state => state.header;

export const selectNavHidden = createSelector(
  [selectHeader],
  header => header.fullPageNav
);
