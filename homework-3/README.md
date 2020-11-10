# Homework 3 #
## Requirements ##
<br></br>
> *PM*: **Nicola Kalderash**
<br></br>
*Developer*: **Christopher Yee**
<br></br>
*Designer*: **Tiffany Wong**
<br></br>
These are the requirements for Fresh Take's planned application centered on
more informed nutritional options.
<br></br>

---
**Navigation Bar (on each page):**
- NB-1: Navigation bar should be shown on every screen of the interface
- NB-2: There’s a way to navigate to the About page
- NB-3: About tab must be highlighted on hover, and hyperlinks to About page
- NB-4: Fresh Take logo must link to the landing page in nav bar
---
[**Landing Page:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#landing-page)
- L-1: “Create Plan” banner card should always be visible independent of device size
- L-2: “Create Plan” button must redirect to the “Name” page
- L-3: Profile testimonial cards must be displayed in the landing page
- L-4: There should be a max 3 testimonial cards aligned per horizontal row for desktop views, and stacked vertically on top of each other on smaller viewports
---
[**Create Plan Survey Questions:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#create-plan-survey)

- S-1: “Back” button that appears throughout the survey must allow users to go back to the previous page. Pressing back does not save current page data.
---
[**Name Page:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#create-plan-survey)
- N-1: “Continue” button is disabled until at least 1 character is inputted
- N-2: “Continue” button must go to the “Tell Us About Yourself” page
---
[**Tell Us About Yourself:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#tell-us-about-yourself)
- T-1: “Height”, “age”, and “weight” input must only accept number input
- T-2: Pressing “Continue” button must go to the “Budget” page
- T-3: “Continue” button is disabled if height (for ft), age, weight, and physical activity level are empty

---
[**Budget:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#budget)
- B-1: Slider must be dragged in increments of whole dollar numerical amounts
- B-2: Continue button is enabled at all times
- B-3: Range of the slider should be from $0 to $100+
- B-4: Default number of slider is $0

---
[**Accessible Foods:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#accessible-foods)
- AF-1: If no options are selected, the continue button is disabled
---
[**Cuisine:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#cuisine)
- C-1: Answer choices must allow user to select multiple food options
- C-2: There is no minimum amount of choices needed to be selected
- C-3: Continue button is in an active state at all times
- C-4: Selected pill options are must be highlighted, and unselected pills are unhighlighted
- C-5: Empty state starts with 0 selected pills

---
[**Goal Setting:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#goal-setting)
- G-1: “Submit” button is disabled until 1 choice has been selected
- G-2: Clicking “Submit” must go to the “Results” page

---
[**Results:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#results)
- R-1: Nutrition resources and suggested meal cards must display images hyperlinked to articles
- R-2: Calories must be displayed with from the calculated number (Daily Calorie Calculator), taking in user input from “Tell Us About Yourself” page: age, weight, gender, height, activity levels variables for formula
- R-3: If gender is not inputted or is self-described, the calorie equation must show the  average of the provided two calorie formulas
- R-4: Cups of water must be displayed with from the calculated number in the water intake formula, taking in user input from “Tell Us About Yourself” page: weight, activity level
- R-5: Minutes of exercise must be displayed with from the calculated number in physical activity guidelines, taking in user input from “Tell Us About Yourself” page: age
- R-6: Servings of fruits and vegetables must be displayed with from the calculated number in the serving chart, taking in user input from “Tell Us About Yourself” page: age, gender
- R-7: “Curated nutrition tips for you” section must be shown from a provided list of existing online nutritional resources curated by team
- R-8: “Curated nutrition tips for you” must display specific nutritional resources that are based on survey preferences from “Goal Setting” and “Budget” page
- R-9: “Suggested meals” section should include both meals based on user’s cuisine preferences, plus accessible meal options curated by the team if a user selects “Not often” or “Never” in the “Accessible Food” question
- R-10: The “Suggested meals” should display meal cards at all times, so if no user cuisine preferences are selected, it should display a default preselected list of meal cards from the team

---
