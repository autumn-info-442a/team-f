import React, { Component } from "react";
import "../style.css";
import ResultsPage from "./ResultsPage";


class CustomPlan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isDataSubmitted: false,
            userData: {
                name: undefined,
                ft: undefined,
                in: undefined,
                lbs: undefined,
                gender: "Do not wish to answer",
                age: undefined,
                physical: "Never",
                money: undefined,
                nutr: undefined,
                cuisine: undefined,
                goal: undefined,
            },
            errors: {}
        }
    }

    handleValidation() {
        let input = this.state.userData;
        let formValidation = true;
        let errors = {};

        //Name
        if (!input["name"]) {
            formValidation = false;
            errors["name"] = "Enter name";
        }

        //Height (ft)
        if (!input["ft"]) {
            formValidation = false;
            errors["ft"] = "Enter height";
        }

        //Weight
        if (!input["lbs"]) {
            formValidation = false;
            errors["lbs"] = "Enter weight";
        }

        //Age
        if (!input["age"]) {
            formValidation = false;
            errors["age"] = "Enter age";
        }

        //Nutrition - Fresh Foods and Vegetables
        // if ((!input["Always"]) || (!input["Often"]) || (!input["Sometimes"])
        //     || (!input["Not Often"]) || (!input["Never"])) {
        //     formValidation = false;
        //     errors["nutr"] = "Select an answer";
        // }

        // //Goal
        // if (!input["goal"]) {
        //     formValidation = false;
        //     errors["goal"] = "Select an answer";
        // }

        this.setState({ errors: errors });
        return formValidation;
    }

    updateUserData = (key, value) => {
        let tempUserData = this.state.userData;
        tempUserData[key] = value
        this.setState({ userData: tempUserData })
    }

    getSelectedCheckboxValues = (name) => {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        return values;
    }

    onFormChange = (event) => {
        let target = event.target;
        let key = target.name;
        let value = target.value;
        this.updateUserData(key, value)
    }

    onSubmit = (event) => {
        console.log('in submit')
        event.preventDefault()
        if (this.handleValidation()) {
            // let survey = document.getElementById("survey");
            // let result = document.getElementById("result");
            // survey.style.display = "none";
            // result.style.display = "block";

            this.updateUserData("nutr", this.getSelectedCheckboxValues("nutr"))
            this.updateUserData("cuisine", this.getSelectedCheckboxValues("cuisine"))
            this.updateUserData("goal", this.getSelectedCheckboxValues("goal"))

            this.setState({ isDataSubmitted: true });
        }

    }
    render() {
        //todo: conditionally render rest of components instead of hiding/showing display
        if (this.state.isDataSubmitted) {
            return (
                <div id="result">
                    <ResultsPage userData={this.state.userData} />
                </div>
            )
        } else {
            return (
                <form>
                    <div className="container" id="survey">
                        {/* Get Started */}
                        <div className="container">
                            <div className="row">
                                <div>
                                    <div className="col">
                                        <h2 className="mt-5 mb-5">Let's get started on your own plan.</h2>
                                    </div>
                                </div>
                                <img
                                    src={require("../img/name_icon.jpg")}
                                    alt="test"
                                    aria-hidden="true"
                                    width="7%"
                                    height="7%'"
                                    className="mt-4 ml-5"
                                />
                            </div>

                            {/* Name */}
                            <div className="row mb-3">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputName">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        value={this.state.userData.name}
                                        onChange={this.onFormChange}
                                    />
                                    <span>{this.state.errors["name"]}</span>
                                </div>
                            </div>

                            {/* Height */}
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="inputPhysical">Height</label>
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <input
                                                id="ft"
                                                className="form-control"
                                                type="number"
                                                min="0"
                                                placeholder="ft"
                                                name="ft"
                                                value={this.state.userData.ft}
                                                onChange={this.onFormChange}
                                            />
                                            <span>{this.state.errors["ft"]}</span>
                                        </div>
                                        <div className="form-group col-md-2">
                                            <input
                                                id="in"
                                                className="form-control"
                                                type="number"
                                                min="0"
                                                placeholder="in"
                                                name="in"
                                                value={this.state.userData.in}
                                                onChange={this.onFormChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Weight */}
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputWeight">Weight</label>
                                            <input
                                                id="lbs"
                                                className="form-control"
                                                type="number"
                                                min="0"
                                                placeholder="lbs"
                                                name="lbs"
                                                required
                                                value={this.state.userData.lbs}
                                                onChange={this.onFormChange}
                                            />
                                            <span>{this.state.errors["lbs"]}</span>
                                        </div>

                                        {/* Age */}
                                        <div className="form-group col-md-2">
                                            <label htmlFor="inputAge">Age</label>
                                            <input
                                                id="age"
                                                className="form-control"
                                                type="number"
                                                placeholder="years"
                                                name="age"
                                                value={this.state.userData.age}
                                                onChange={this.onFormChange}
                                            />
                                            <span>{this.state.errors["age"]}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Gender */}
                            <div className="row mb-3">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputGender">Gender</label>
                                    <select
                                        id="gender"
                                        className="form-control"
                                        name="gender"
                                        value={this.state.userData.gender}
                                        onChange={this.onFormChange}
                                    >
                                        <option value="Do not wish to answer">Do not wish to answer</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                        <option value="Non-binary">Non-binary</option>
                                    </select>
                                </div>
                            </div>

                            {/* Physical Activity Level */}
                            <div className="row mb-3">
                                <div className="form-group col-md-5">
                                    <label htmlFor="inputPhysical">Physical Activity Level</label>
                                    <select
                                        id="physical"
                                        className="form-control"
                                        required
                                        name="physical"
                                        value={this.state.userData.physical}
                                        onChange={this.onFormChange}
                                    >
                                        <option value="Never">Little to no activity</option>
                                        <option value="Light">Lightly active (light exercise 1-3 days/week)</option>
                                        <option value="Moderate">Moderately active (moderate exercise 3-5 days/week)</option>
                                        <option value="Very">Very active (hard exercise 6-7 days/week)</option>
                                        <option value="Extra">Extra active (very hard daily exercise or 2X day training)</option>
                                    </select>
                                </div>
                            </div>

                            {/* Weekly Budget */}
                            <div className="row mb-3">
                                <div className="form-group col-md-9">
                                    <label htmlFor="inputPhysical">What is your estimated weekly budget?</label>
                                    <input
                                        id="money"
                                        className="slider"
                                        type="range"
                                        min="0"
                                        max="100"
                                        name="money"
                                        value={this.state.userData.money}
                                        onChange={this.onFormChange}
                                    />
                                </div>
                            </div>

                            {/* Fresh Fruits and Vegetables */}
                            <div className="row mb-2">
                                <div className="form-group col">
                                    <label htmlFor="inputPhysical">I can easily buy fresh fruits and vegetables where I shop.</label>
                                    <div class="form-check">
                                        <input class="form-check-input" id="always" type="radio" name="nutr" value="Always" />
                                        <label class="form-check-label" for="always">Always</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="often" type="radio" name="nutr" value="Often" />
                                        <label class="form-check-label" for="often">Often</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="sometimes" type="radio" name="nutr" value="Sometimes" />
                                        <label class="form-check-label" for="sometimes">Sometimes</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="not" type="radio" name="nutr" value="Not Often" />
                                        <label class="form-check-label" for="not">Not Often</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="never" type="radio" name="nutr" value="Never" />
                                        <label class="form-check-label" for="never">Never</label>
                                    </div>
                                    {/* <span>{this.state.errors["nutr"]}</span> */}
                                </div>
                            </div>

                            {/* Cuisine */}
                            <div className="row">
                                <div className="form-group col-9">
                                    <label htmlFor="inputPhysical">What type of cuisine do you eat on a regular basis?</label>
                                    <div className="row">
                                        <div className="form-group col">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="african" name="cuisine" value="African" />
                                                <label class="form-check-label" for="african">African cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="american" name="cuisine" value="American" />
                                                <label class="form-check-label" for="american">American cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="caribbean" name="cuisine" value="Caribbean" />
                                                <label class="form-check-label" for="caribbean">Caribbean cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="eastAsian" name="cuisine" value="East/Southeast Asian" />
                                                <label class="form-check-label" for="eastAsian">East/Southeast Asian cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="european" name="cuisine" value="European" />
                                                <label class="form-check-label" for="european">European cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="latinAmerican" name="cuisine" value="Latin American" />
                                                <label class="form-check-label" for="latinAmerican">Latin American cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="mediterranean" name="cuisine" value="Mediterranean" />
                                                <label class="form-check-label" for="mediterranean">Mediterranean cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="middleEastern" name="cuisine" value="Middle Eastern" />
                                                <label class="form-check-label" for="middleEastern">Middle Eastern cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="nativeAmerican" name="cuisine" value="Native American" />
                                                <label class="form-check-label" for="nativeAmerican">Native American cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="pacificIslander" name="cuisine" value="Pacific Islander" />
                                                <label class="form-check-label" for="pacificIslander">Pacific Islander cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="southAsian" name="cuisine" value="South Asian" />
                                                <label class="form-check-label" for="southAsian">South Asian cuisine</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="checkbox" id="southern" name="cuisine" value="Southern" />
                                                <label class="form-check-label" for="southern">Southern cuisine</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Nutrition goal */}
                            <div className="row mb-3">
                                <div className="form-group col">
                                    <label htmlFor="inputPhysical">What is your main nutrition goal?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" id="loseFat" type="radio" name="goal" value="Lose fat" />
                                        <label class="form-check-label" for="loseFat">Lose fat</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="beHealthier" type="radio" name="goal" value="Be healthier" />
                                        <label class="form-check-label" for="beHealthier">Be healthier</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="gainWeight" type="radio" name="goal" value="Gain weight" />
                                        <label class="form-check-label" for="gainWeight">Gain weight</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" id="none" type="radio" name="goal" value="Nothing specific" />
                                        <label class="form-check-label" for="none">Nothing specific</label>
                                    </div>
                                    {/* <span>{this.state.errors["goal"]}</span> */}
                                </div>
                            </div>
                        </div>
                        <button id="subButton" className="submitButton mb-5" onClick={this.onSubmit}> Submit </button>
                    </div>
                </form>
            );
        }

    }
}

export default CustomPlan;