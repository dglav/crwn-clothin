import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { hideCart } from "./redux/cart/cart.actions";
import { checkUserSession } from "./redux/user/user.actions";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-page.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectNavHidden } from "./redux/header/header.selectors";
import { selectCollectionsForPreview } from "./redux/shop/shop.selectors";
import { selectCartHidden } from "./redux/cart/cart.selectors";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { cartHidden, hideCart, checkUserSession } = this.props;

    checkUserSession();

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       });
    //     });
    //   } else {
    //     setCurrentUser(userAuth);
    //   }
    // });

    if (!cartHidden) hideCart();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <div className={this.props.navHidden ? "mobile-nav" : ""}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    navHidden: selectNavHidden,
    collectionsArray: selectCollectionsForPreview,
    cartHidden: selectCartHidden
  });

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
  hideCart: () => dispatch(hideCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
