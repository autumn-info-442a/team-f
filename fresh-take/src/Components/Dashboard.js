import React, { Component } from "react";
import "../style.css";
import Footer from "./Footer";
import CardList from "./CardList";
import Header from "./Header";


class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        {/* Personalization section */}
        <div className="personalCard">
            <div className="personalTitleCard">
              <h3 className="personalTitle">Personalize your nutrition to fit your preferences.</h3>
            </div>
            <div className="card-body">
              <button className="personalButton" >
                <h3 className="card-title" style={{color:"#4F4F4F"}}>Create Plan</h3>
              </button>
            </div>
        </div>

        {/* others */}
        <div style={{verticalAlign:"center"}}>
          <main>
            <div className="sectionTitle">
              <h2>123,230 plans created so far by your peers</h2>
            </div>
            <div>
              <section>
                <CardList />
              </section>
            </div>
            <div className="sectionTitle">
                <h2>Popular Meals</h2>
            </div>
            <div>
              <section>
                <CardList />
              </section>
           </div>
            <div className="sectionTitle">
                <h2>About Us</h2>
            </div>
            <div style={{display:"inline-flex", margin:"0 34px 0"}}>
             <img 
                src={require("../img/personal_info_icon.png")}
                alt="test"
                aria-hidden="true"
                width="10%"
                height="10%'"
              />
              <p className="intro">
                Thank you for coming to our page. This is just a test paragraph to see what
                the paragraph would look like in the about section. Please disregard anything
                you are reading at the moment as this is probably wasting your time. But you 
                if you are continously reading this, I hope you are doing well and you must 
                be very board to continue reading this :)
              </p>
 
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Dashboard;
