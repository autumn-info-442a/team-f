import React, { Component } from "react";
import "../style.css";
import CardList from "./CardList";

class ResultsPage extends Component {
  constructor(props) {
    super(props)
  }

  calcCalories = () => {
    /* Calorie calculation based on Harris Benedict Formula, a calorie formula using the variables of height,
    weight, age, and gender to calculate basal metabolic rate (BMR). The BMR is multiplied by appropriate exercise factor.
    
    Exercise level factor: 
    - Never: 1.2
    - Light: 1.375
    - Moderate: 1.55
    - Very: 1.725
    - Extra: 1.9
    */

    let physical = 1.2;
    if (this.props.userData.physical === "Light") {
      physical = 1.375;
    } else if (this.props.userData.physical === "Moderate") {
      physical = 1.55;
    } else if (this.props.userData.physical === "Very") {
      physical = 1.725;
    } else if (this.props.userData.physical === "Extra") {
      physical = 1.9;
    }

    let inch = this.props.userData.in;
    if (inch == undefined) {
      inch = 0;
    }

    let totalInches = (parseFloat(this.props.userData.ft) * 12) + parseFloat(inch);

    let calories = 0;
    // Male calorie calculation
    if (this.props.userData.gender === "Male") {
      calories = Math.round(physical * (66 + (6.23 * this.props.userData.lbs) + (12.7 * totalInches)
        - (6.8 * this.props.userData.age)));
    }

    // Female calorie calculation
    else if (this.props.userData.gender === "Female") {
      calories = Math.round(physical * (655 + (4.35 * this.props.userData.lbs) + (4.7 * totalInches)
        - (4.7 * this.props.userData.age)));
    }

    // Do Not Wish to Answer or Non-Binary calorie calculation
    else if ((this.props.userData.gender === "Non-binary") || (this.props.userData.gender === "Do not wish to answer")) {
      let maleCal = Math.round(physical * (66 + (6.23 * this.props.userData.lbs) + (12.7 * totalInches)
      - (6.8 * this.props.userData.age)));
      
      let femaleCal = Math.round(physical * (655 + (4.35 * this.props.userData.lbs) + (4.7 * totalInches)
      - (4.7 * this.props.userData.age)));

      let notAnswerCal;
      notAnswerCal = (maleCal + femaleCal) / 2;
      calories = notAnswerCal;
    }
    return calories;
  }

  calcWater = () => {
    
  }

  render() {
    // calculate all the calories before returing 
    let userData = this.props.userData;
    return (
      <div className="container mb-5">

        <div className="row text-center">
          <div className="col mt-5 mb-5">
            <h2>Hello {userData.name}, welcome to your customized plan.</h2>
          </div>
        </div>

        <div className="row text-center">
          <div className="col">
            <p>{this.calcCalories()} Calories / Day</p>
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
            <p>{this.calcWater()} Cups of Water</p>
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