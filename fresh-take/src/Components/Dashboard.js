import React, { Component } from "react";
import "../style.css";

import CardList from "./CardList";
import Header from "./Header";
import Footer from "./Footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        {/* Personalization section */}
        <div className="card">
            <div className="card-body">
              <h3 className="card-title">test</h3>
            </div>
            <div className="card-body">
              <h3 className="card-title">test</h3>
            </div>
        </div>

        <div id="dashboard">
          <main>

            <div>
                <h2>123,230 plans created so far by your peers</h2>
              <section>
                <CardList />
              </section>
            </div>
          
            <div>
                <h2>Popular Meals</h2>
              <section>
                <CardList />
              </section>
            </div>
          
          <div>
                <h2> About Us</h2>
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
