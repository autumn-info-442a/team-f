import React, { Component } from "react";
import "../style.css";
import CardList from "./CardList";


class ResultsPage extends Component {
  render() {
    console.log(this.props.userData)
    return (
      <div>
        <h1>Hello {this.props.userData[0]}, Welcome to your Customize Plan</h1>
        <p>{} Calories / Day</p>
        <p>{} Servings of Vegetables</p>
        <p>{} Servings of Fruits</p>
        <p>{} Min of Exercise</p>
        <p>{} Cups of Water</p>
        <p>{} Curated Nutrition Tips For You</p>
        <p>{} Did you know?</p>
        <p>{} Nutritional Advice Here</p>
        <CardList cuisine="default"/>
        <p>{} Suggested Meals</p>
        <CardList cuisine="default"/>
      </div>
    );
  }
}
export default ResultsPage;