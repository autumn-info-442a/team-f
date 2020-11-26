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
            <p className="intro">
              content
            </p>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Dashboard;
