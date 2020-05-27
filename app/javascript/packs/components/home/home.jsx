import React from 'react';

import MyLogo from "../../../../assets/images/my_logo.png";

class Home extends React.Component {
  render() {
    return (
      <div className="home-page__outer-container">
        <header>
          <div className="home-page__logo-container">
            <div className="home-page__links-container">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/thesuhaibkhan"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                href="https://github.com/SKhan1211/servicepros-famous-books"
              >
                Github
              </a>
              <a target="_blank" href="https://www.thesuhaibkhan.com">
                Personal Site
              </a>
            </div>
            <img src={MyLogo}></img>
            <div className="home-page__logo-gradient"></div>
            <button>Enter Now</button>
          </div>
        </header>
        <footer>
          <p>Coding Challenge By Suhaib Khan</p>
          <div className="home-page__tech-container">
            <div className="home-page__logo-gradient"></div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" />
          </div>
        </footer>
      </div>
    );
  }
};

export default Home;