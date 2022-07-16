import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Footer from "../landing/footer/Footer";
import { StandardToken, LPTokens } from "../../hooks/Morocofetcher";
import "./morocogod.scss";
import {
  Spinner,
  UserInfo,
  MyReward,
  UserReward,
} from "../../hooks/Morocofetcher";
function MoroccoGod({ active }) {
  const [pancakeToken, setpancakeToken] = useState(
    "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"
  );
  const history = UserInfo();
  const myreward = MyReward();
  const userreward = UserReward();
  const { deployStandardToken } = StandardToken();
  const { deployLPToken } = LPTokens();
  const [projectDescription, setprojectDescription] = useState("0");
  const [project, setproject] = useState("");
  const stake = async () => {
    let approve = await deployStandardToken(projectDescription);
    console.log("approveee", approve);
  };

  const unstake = async () => {
    let approve = await deployLPToken();
    console.log("approveee", approve);
  };
  return (
    <div>
      <section
        className={active ? "top-cards-div pt-4 ml-5" : "top-cards-div pt-4"}
      >
        <div className="container">
          <p className="pts text-color">
            KungPao Token (PAO) CONTRACT ADDRESS :
            0x634c376B95Dce178E9448C41979E2CCC3814B26C
          </p>
          <div className="row px-sm-0 px-4">
            <div className="col-md-6 col-12 mx-auto">
              <a>
                <button className="w-100 box">
                  <div className="innerCards">
                    <div className="newheader">
                      <h4>
                        <img src="/box-icon.svg"></img> PAO
                      </h4>
                    </div>
                    {/* <hr /> */}
                    <p className="mt-1 text-center">
                      My Balance {history / 10 ** 18} PAO
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter amount to stake"
                      onChange={(e) => setprojectDescription(e.target.value)}
                    ></input>
                    <button className="btn btn-stake" onClick={stake}>
                      Stake
                    </button>
                  </div>
                </button>
              </a>
            </div>
            <div className="col-md-6 col-12 mx-auto">
              <a>
                <button className="w-100">
                  <div className="innerCards ">
                    <div className="newheader">
                      <h4>
                        <img src="/box-icon.svg"></img> PAO
                      </h4>
                    </div>
                    {/* <hr /> */}
                    <p className="mt-1 text-center">
                      My Balance {history / 10 ** 18} PAO
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter amount to withdraw"
                      onChange={(e) => setproject(e.target.value)}
                    ></input>
                    <button className="btn btn-stake" onClick={unstake}>
                      Withdraw Reward
                    </button>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <div className={active ? "ml-footer" : ""}>
                <Footer />
            </div> */}
    </div>
  );
}

export default MoroccoGod;
