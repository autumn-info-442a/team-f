import React, { Component } from "react";
import "../style.css";
// import Footer from "./Footer";
// import CardList from "./CardList";
import Header from "./Header";


class CustomPlan extends Component {
  render() {
    return (
        <div>
            <form >
            {/* <Header /> */}
            {/* Question1 */}
                <div>
                    {/* left side */}
                    <div>
                        <div style={{display:"flex"}}>
                            <div>
                                <h1>Let's get started on your own plan.</h1>
                                <p>What's your name?</p>
                                <input type="text" id="name" name="name" className="nameInput"></input>
                            </div>
                            <img 
                                src={require("../img/name_icon.jpg")}
                                alt="test"
                                aria-hidden="true"
                                width="10%"
                                height="10%'"
                            />
                        </div>
                    </div>
                </div>
            {/* Question2 */}
                <div>
                    {/* Height */}
                    <label htmlFor="height" className="col-lg-1">
                        Height
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        required
                    ></input>
                    <input
                        type="text"
                        className="form-control"
                        required
                    ></input>
                    {/* Weight */}
                    <label htmlFor="weight" className="col-lg-1">
                        Weight
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        required
                    ></input>
                    {/* Gender */}
                    <label htmlFor="gender" className="col-lg-1">
                        Gender
                    </label>
                    <div>
                        <select
                        id="category"
                        className="form-control"
                        name="category"
                        required
                        >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Do not wish to answer">Do not wish to answer</option>
                        </select>
                    </div>
                    {/* Age */}
                    <label htmlFor="weight" className="col-lg-1">
                        Age
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        required
                    ></input>
                    {/* Physical Acitivity Level */}
                    <label htmlFor="gender" className="col-lg-1">
                        Physical Acitivity Level 
                    </label>
                    <div>
                        <select
                        id="category"
                        className="form-control"
                        name="category"
                        required
                        >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Do not wish to answer">Do not wish to answer</option>
                        </select>
                    </div>
                </div>
                {/* Question 3 */}
                <label htmlFor="gender" className="col-lg-1">
                        What is your estimated weekly budget?
                </label>
                <input type="range" min="0" max="100" value="50" className="slider" id="myRange"></input>
                {/* Question 4 */}
                <p>I can easily buy fresh fruits and vegetables where I shop</p>
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">Always</label>
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Often</label>
                <input type="radio" id="age3" name="age" value="100" />
                <label for="age3">Sometimes</label>
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Not Often</label>
                <input type="radio" id="age3" name="age" value="100" />
                <label for="age3">Never</label>
                {/* Question 5 */}
                <p>What type of cuisine do you eat on a regular basis?</p>
                <input type="checkbox" name="favorite1" value="chocolate" /> Chocolate
                <input type="checkbox" name="favorite2" value="vanilla" /> Vanilla
                <input type="checkbox" name="favorite3" value="mint" /> Mint
                {/* Question 6 */}
                <p>What is your main nutrition goal?</p>
                <input type="radio" id="age1" name="age" value="30" />
                <label for="age1">Loss Fat</label>
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Be heathier</label>
                <input type="radio" id="age3" name="age" value="100" />
                <label for="age3">Gain Weight</label>
                <input type="radio" id="age2" name="age" value="60" />
                <label for="age2">Nothing specific</label>
                <input type="submit" value="Submit" className="submitButton"></input>
            </form>
        </div>
    );
  }
}

export default CustomPlan