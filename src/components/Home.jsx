import React from "react";
import logo from './logo.jpg';
import './../App.css'
import {Spring} from 'react-spring';
function Home() {
  return (

      <div className="home">
        <div class="container">
        <Spring
        from={{opacity:0, marginTop: -500}}
        to={{opacity:1,marginTop: 0}}>
        {props => (
          <div style={props}>
          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Home</h1>
              <p>
              Welcome to the Official website of Sneakers Ireland. Feel free
              to browse through our website. You can reach out to us with
              any requests through the Contact page.
              </p>
            </div>
          </div>
          </div>
        )}
        </Spring>
        </div>
      </div>

  );
}
export default Home;
