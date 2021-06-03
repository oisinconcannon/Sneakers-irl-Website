import React from "react";
import logo from './logo.png';
import './../App.css'

function Home() {
  return (

      <div className="home">
        <div class="container">

          <div class="row align-items-center my-5">
            <div class="col-lg-7">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">Home</h1>
              <p>
              Welcome to the Official website of Sneakers Ireland. Where
              we provide the highest quality sneakers on the market.
              You can reach out to us with any requests through the Contact page.
              </p>
            </div>
            <div class="col-lg-5">
              <h1 class="font-weight-light">About Us</h1>
              <p>
            Sneakers Ireland started off as a small side business
            which has grown dramatically. We could not have forseen
            this succes and we are extremely grateful to our loyal
            customers.<br></br><br></br>
            We originally started out on Instagram and it is still our
            most popular platform. This is a small company based in
            Galway, Ireland and it is from this location that we
            handle our stock and orders.
              </p>
            </div>
            <div class="col-lg-7">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>

        </div>
      </div>

  );
}
export default Home;
