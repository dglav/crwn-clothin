import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectNavHidden } from "../../redux/header/header.selectors";

import { toggleNavHidden, hideNav } from "../../redux/header/header.actions";
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPageNav: false
    };
  }

  handleSignOut = () => {
    auth.signOut();
    this.props.hideNav();
  };

  render() {
    const { signOutStart } = this.props;
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <CartIcon />
        <div
          className={`options ${this.props.navHidden ? "full-page-nav" : ""}`}
        >
          <Link
            className="option"
            to="/shop"
            onClick={() => this.props.hideNav()}
          >
            SHOP
          </Link>
          <Link
            className="option"
            to="/contact"
            onClick={() => this.props.hideNav()}
          >
            CONTACT
          </Link>
          {this.props.currentUser ? (
            <Link className="option" to="/" onClick={signOutStart}>
              SIGN OUT
            </Link>
          ) : (
            <Link
              className="option"
              to="/signin"
              onClick={() => this.props.hideNav()}
            >
              SIGN IN
            </Link>
          )}
          <CartIcon />
          {this.props.navHidden ? (
            <Link
              className="option"
              to="/checkout"
              onClick={() => this.props.hideNav()}
            >
              GO TO CART
            </Link>
          ) : null}
        </div>
        <div
          className="menu-toggle"
          onClick={() => this.props.toggleNavHidden()}
        >
          &#9776;
        </div>
        {this.props.hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = state =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    navHidden: selectNavHidden
  });

const mapDispatchToProps = dispatch => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
  hideNav: () => dispatch(hideNav()),
  signOutStart: () => dispatch(signOutStart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
