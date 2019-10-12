import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsFromShop } from "../../redux/shop/shop.selectors";

import "./collection-overviews.styles.scss";

import PreviewCollection from "../collection-preview/collection-preview.component";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => {
      return <PreviewCollection key={id} {...otherCollectionProps} />;
    })}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsFromShop
});

export default connect(mapStateToProps)(CollectionsOverview);
