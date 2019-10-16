import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollectionsFromShop = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollectionsFromShop],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionsFromShop],
    collections => collections[collectionUrlParam]
  );
