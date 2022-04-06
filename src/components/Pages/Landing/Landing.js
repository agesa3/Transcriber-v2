import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Welcome To Transcriber</h1>
            <div className="landingImage">
              <img src="" alt="Landing Image" />
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <button>Login</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button>Signup</button>
              </div>
            </div>
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
