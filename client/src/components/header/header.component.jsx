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

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./header.styles.scss";

class HeaderClass extends Component {
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
            <Link
              className="option"
              to="/"
              onClick={() => this.handleSignOut()}
            >
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
        {this.props.hidden ? <CartDropdown /> : null}
      </div>
    );
  }
}

// const Header = ({ currentUser, hidden }) => (
//   <div className="header">
//     <Link to="/" className="logo-container">
//       <Logo className="logo" />
//     </Link>
//     <div className="options">
//       <Link className="option" to="/shop">
//         SHOP
//       </Link>
//       <Link className="option" to="/contact">
//         CONTACT
//       </Link>
//       {currentUser ? (
//         <Link className="option" to="/" onClick={() => auth.signOut()}>
//           SIGN OUT
//         </Link>
//       ) : (
//         <Link className="option" to="/signin">
//           SIGN IN
//         </Link>
//       )}
//       <CartIcon />
//     </div>
//     <div className="menu-toggle">&#9776;</div>
//     {hidden ? null : <CartDropdown />}
//   </div>
// );

const mapStateToProps = state =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    navHidden: selectNavHidden
  });

const mapDispatchToProps = dispatch => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
  hideNav: () => dispatch(hideNav())
});

// export default connect(mapStateToProps)(Header);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderClass);
