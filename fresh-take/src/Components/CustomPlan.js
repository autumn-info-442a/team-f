import React, { Component } from "react";
import "../style.css";


class CustomPlan extends Component {
  render() {
    function getSelectedCheckboxValues(name) {
        const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
        let values = [];
        checkboxes.forEach((checkbox) => {
            values.push(checkbox.value);
        });
        return values;
    }

    let saveData = (event) => {
        event.preventDefault();
        let userInfo = [
          document.getElementById("name").value,
          document.getElementById("ft").value,
          document.getElementById("in").value,
          document.getElementById("lbs").value,
          document.getElementById("gender").value,
          document.getElementById("age").value,
          document.getElementById("physical").value,
          document.getElementById("money").value,
          getSelectedCheckboxValues("nutr"),
          getSelectedCheckboxValues("cuisine"),
          getSelectedCheckboxValues("goal")
        ];
        console.log(userInfo)
    };
    
    return (
        <div>
            <form>
                {/* Question1 */}
                <div>
                    <div>
                        <div style={{display:"flex"}}>
                            <div>
                                <h1>Let's get started on your own plan.</h1>
                                <p className="col-lg-1"> What's your name? </p>
                                <input id="name" className="nameInput" required></input>
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
                    <p className="col-lg-1"> Height </p>
                    <input
                        id="ft"
                        className="form-control"
                        type="number"
                        required
                    ></input>
                    <input
                        id="in"
                        className="form-control"
                        type="number"
                        required
                    ></input>
                    {/* Weight */}
                    <p className="col-lg-1"> Weight </p>
                    <input
                        id="lbs"
                        className="form-control"
                        type="number"
                        required
                    ></input>
                    {/* Gender */}
                    <p className="col-lg-1"> Gender </p>
                    <select
                        id="gender"
                        className="form-control"
                        name="gender"
                        required
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Do not wish to answer">Do not wish to answer</option>
                    </select>
                    {/* Age */}
                    <p className="col-lg-1"> Age </p>
                    <input
                        id="age"
                        className="form-control"
                        type="number"
                    ></input>
                    {/* Physical Acitivity Level */}
                    <p className="col-lg-1"> Physical Acitivity Level </p>
                    <select
                        id="physical"
                        className="form-control"
                        name="physical"
                        required
                    >
                        <option value="Very">Very</option>
                        <option value="Minimal">Minimal</option>
                        <option value="Never">Never</option>
                    </select>
                </div>
                {/* Question 3 */}
                <div>
                    <p className="col-lg-1"> What is your estimated weekly budget? </p>
                    <input 
                        id="money"
                        className="slider"
                        type="range"
                        min="0"
                        max="100"
                    ></input>
                    
                </div>
                {/* Question 4 */}
                <div>
                    <p className="col-lg-1">I can easily buy fresh fruits and vegetables where I shop</p>
                    
                    <label for="always">Always</label>
                    <input id="always" type="radio" name="nutr" value="Always"/>
                    
                    <label for="often">Often</label>
                    <input id="often" type="radio" name="nutr" value="Often"/>
                    
                    <label for="sometimes">Sometimes</label>
                    <input id="sometimes" type="radio" name="nutr" value="Sometimes"/>
                    
                    <label for="not">Not Often</label>
                    <input id="not" type="radio" name="nutr" value="Not Often"/>
                    
                    <label for="never">Never</label>
                    <input id="never" type="radio" name="nutr" value="Never"/>
                </div>
                {/* Question 5 */}
                <div>
                    <p className="col-lg-1">What type of cuisine do you eat on a regular basis?</p>
                    
                    <input id="Asian" type="checkbox" name="cuisine" value="Asian"/> Asian
                    <input id="American" type="checkbox" name="cuisine" value="American"/> American
                    <input id="Mexican" type="checkbox" name="cuisine" value="Mexican"/> Mexican
                </div>
                {/* Question 6 */}
                <div>
                    <p className="col-lg-1">What is your main nutrition goal?</p>
                    
                    <label for="lossFat">Loss Fat</label>
                    <input id="lossFat" type="radio" name="goal" value="Loss Fat"/> 
                   
                    <label for="beHealthier">Be heathier</label>
                    <input id="beHealthier" type="radio" name="goal" value="Be Heathier"/> 
                    
                    <label for="gainWeight">Gain Weight</label>
                    <input id="gainWeight" type="radio" name="goal"  value="Gain Weight"/> 

                    <label for="none">Nothing specific</label>
                    <input id="none" type="radio" name="goal"  value="Nothing Specific"/> 
                </div>
            </form>
            <button id="subButton" className="submitButton" onClick={saveData}> Submit </button>
        </div>
    );
  }
}

export default CustomPlan;