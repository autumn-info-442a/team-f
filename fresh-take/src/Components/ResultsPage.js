import React, { Component } from "react";
import "../style.css";
import CardList from "./CardList";


class ResultsPage extends Component {
  render() {
    console.log(this.props.userData)
    return (
      <div className="container mb-5">

        <div className="row text-center">
          <div className="col mt-5 mb-5">
            <h2>Hello {this.props.userData[0]}, welcome to your customized plan.</h2>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <p>{ } Calories / Day</p>
          </div>
          <div className="col">
            <p>{ } Servings of Vegetables</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <p>{ } Servings of Fruits</p>
          </div>
          <div className="col">
            <p>{ } Min of Exercise</p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <p>{ } Cups of Water</p>
          </div>
          <div className="col">
          </div>
        </div>

        <div className="row text-center">
          <div className="col mt-3 mb-3">
            <h3>{ } Curated Nutrition Tips For You</h3>
          </div>
        </div>

        <div className="row text-center">
          <div className="col text-center">
            <strong>{ } Did you know?</strong>
          </div>
          <div className="col text-center">
            <p>{ } Nutritional Advice Here</p>
          </div>
        </div>

        <CardList cuisine="default" />

        <div className="row text-center">
          <div className="col mt-4 mb-3">
            <h3>{ } Suggested Meals</h3>
          </div>
        </div>

        <CardList cuisine="default" />

      </div>
    );
  }
}
export default ResultsPage;