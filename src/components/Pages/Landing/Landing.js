import React from "react";
import "./Landing.css";
import image from '../../../assets/trs.gif'
import { FaAddressCard, FaMicrophoneAlt } from "react-icons/fa";


const Landing = () => {
  return (
    <>
      <main className="main">
        {/* <!-- Header --> */}
        <header className="header">
          <div className="container flex-between">
            <div className="logo">
              <a href="#">
                {/* <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/logo.svg" alt="" /> */}
              </a>
            </div>
            <nav className="main-navgation flex-between flex-ver-top">
              <div className="nav-links">

              </div>
              <div className="nav-buttons">
                <a href="#" className="log-in">Login</a>
                <a href="#" className="sign-up btn btn-sm">Sign Up</a>
              </div>
            </nav>
            <div className="burger-menu">
              <i className="fa-regular fa-bars icon"></i>
            </div>
          </div>
        </header>
        {/* <!-- Landing --> */}
        <section className="landing">
          <div className="landing-text">
            <h1>More than just  Transcription</h1>
            <p>
              Automatically transcribe your audio files and share them with your friends, stydents or colleagues.
            </p>
            <a href="/home" className="btn btn-lg">Get Started</a>
          </div>
          <div className="landing-image">

            <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/illustration-working.svg" alt="Working Illustration" />
            {/* <img src={image} alt="Working Illustration" /> */}
          </div>
        </section>
        {/* <!-- Features --> */}
        <section className="features" id="features">
          <div className="container">

            {/* <!-- Advanced Features --> */}
            <div className="more-features">
              <div className="section-header">
                <h2>How It Works</h2>
                <p>
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="more-features-content">
                <div className="feature">
                  <div className="feature-illustration">
                    <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-brand-recognition.svg" alt="Feature Illustration Icon" />
                  </div>
                  <div className="feature-details">
                    <h3>Get Started</h3>
                    <p>
                      Click the get started button to join the automatic transcription dashboard. Then navigate to the transcribe page
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-illustration">
                    <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-detailed-records.svg" alt="Feature Illustration Icon" />
                  </div>
                  <div className="feature-details">
                    <h3>Transcribe audio</h3>
                    <p>
                      In the transcribe page, click the transcribe button to start transcribing your live speech. You can also navigate to the import page and upload your audio files for transcription.
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-illustration">
                    <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-fully-customizable.svg" alt="Feature Illustration Icon" />
                  </div>
                  <div className="feature-details">
                    <h3>Save File</h3>
                    <p>
                      After transcribing your audio files, click the save button to save your transcribed files.
                      Then navigate to the home page to see all your transcription files, where you can download, edit or delete them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Pricing --> */}
        <section className="pricing" id="pricing">
          <div className="container">
            <div className="section-header">
              <h2>Boost your links today</h2>
              <a href="/home" className="btn btn-lg">Get Started</a>
            </div>
          </div>
        </section>
        {/* <!-- Footer --> */}
        <footer className="footer" id="resources">
          <div className="container">
            {/* <!-- Website Logo --> */}
            <div className="logo">
              <a href="#">
                {/* <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/logo.svg" alt="" /> */}
              </a>
            </div>
            {/* <!-- Quick Links --> */}
            <div className="quick-links">
              <div className="links-group">
                <span>Features</span>
                <div>

                  <a href="#">Branded Links</a>
                  <a href="#">Analytics</a>
                </div>
              </div>
              <div className="links-group">
                <span>Resources</span>
                <div>
                  <a href="#">Blog</a>
                  <a href="#">Developers</a>
                  <a href="#">Support</a>
                </div>
              </div>
              <div className="links-group">
                <span>Company</span>
                <div>
                  <a href="#">About</a>
                  <a href="#">Our Team</a>
                  <a href="#">Careers</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
            {/* <!-- Social Media --> */}
            <div className="social-media">
              <a href="#">
                <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-facebook.svg" alt="Facebook Logo" />
              </a>
              <a href="#">
                <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-twitter.svg" alt="Twitter Logo" />
              </a>
              <a href="#">
                <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-pinterest.svg" alt="Pinterest Logo" />
              </a>
              <a href="#">
                <img src="https://raw.githubusercontent.com/MohamedAridah/frontendmentor_url-shortening-api/main/images/icon-instagram.svg" alt="Instagram Logo" />
              </a>
            </div>
          </div>


        </footer>
      </main>
    </>
  );
};

export default Landing;
