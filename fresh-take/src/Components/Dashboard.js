import React, { Component } from "react";
import "../style.css";
import Footer from "./Footer";
import CardList from "./CardList";
import Header from "./Header";
import CustomPlan from "./CustomPlan";

class Dashboard extends Component {
  render() {

    function homeButton() {
      let custom = document.getElementById("custom");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "block";
      custom.style.display = "none";
    }

    function customButton() {
      let custom = document.getElementById("custom");
      let dashboard = document.getElementById("dashboard");
      dashboard.style.display = "none";
      custom.style.display = "block";
    }

    return (
      <div>
        <div onClick={homeButton}>
          <Header />
        </div>

        <div id="custom">
          <CustomPlan />
        </div>

        <div id="dashboard">
        {/* Personalization section */}
        <div className="personalCard">
            <div className="personalTitleCard">
              <h3 className="personalTitle">Personalize your nutrition to fit your preferences.</h3>
            </div>
            <div className="card-body" onClick={customButton}>
              <button className="personalButton">
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
                Fresh Take is a personalized nutrition plan that helps you live a 
                more balanced and healthy lifestyle. Designed for people of all backgrounds, 
                this is a perfect fit even if you’ve had limited experience in building a 
                nutritious lifestyle, but are looking to get started on it. All you need to 
                do is create your plan in a few minutes by answering questions about yourself, 
                and we’ll curate recommendations for you including suggested nutritional servings, 
                personalized nutritional advice, and culturally relevant meals based on your preferences.
              <p>
                For more information and questions, contact anyone on the team-
                Chris Yee: cyee20@uw.edu
                Nicola Kalderash: kderash0@uw.edu
                Tiffany Wong: wongct@uw.edu
              </p>
              </p>

 
            </div>
          </main>
          <Footer />
        </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
