import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import { useWeb3React } from "@web3-react/core";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";

const Navbar = ({ setNavActive, navActive }) => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const [show, setShow] = useState(false);
  const [blueshow, setBlueShow] = useState(false);

  const connectMetaMask = () => {
    console.log("here", account);
    localStorage.setItem("connectorId", "injected");
    if (account) {
      logout();
    } else {
      login("walletconnect");
    }
  };
  // const trustWallet = async () => {
  //     localStorage.setItem("connectorId", "walletconnect")
  //     if (account) {
  //         logout()
  //     } else {
  //         login("walletconnect")
  //     }
  // }
  const toggleShow = () => {
    setShow(!show);
    setNavActive(!navActive);
    if (blueshow === true) {
      setBlueShow(false);
    }
  };
  return (
    <>
      <section className="main-navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand text-sm-right text-center " href="/">
                  <HashLink to="/">
                    <img
                      src="/logo.svg"
                      className="img-fluid d-sm-block d-block"
                      alt=""
                    />
                  </HashLink>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <div class="style-bar"></div>
                  <div class="style-bar"></div>
                  <div class="style-bar"></div>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mx-auto"></ul>
                  <form className="form-inline my-2 my-lg-0"></form>
                  {account ? (
                    <button
                      className="btn-common button_design"
                      onClick={connectMetaMask}
                    >
                      Disconnect Wallet
                    </button>
                  ) : (
                    <button
                      className="btn-common button_design"
                      onClick={connectMetaMask}
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
