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
**Navigation Bar** (On each page):
- NB-1: Navigation bar should be shown on every screen of the interface
- NB-2: There’s a way to navigate to the About page
- NB-3: About tab must be highlighted on hover, and hyperlinks to About page
- NB-4: Fresh Take logo links to the landing page in nav bar
---
[**Landing Page:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#landing-page)
- L-1: “Create Plan” banner card should always be visible independent of device size
- L-2: “Create Plan” button redirects to the “Name” page
- L-3: Display profile testimonial cards on landing page
- L-4: There should be a max 3 testimonial cards aligned per horizontal row for desktop views, and stacked vertically on top of each other on smaller viewports
---
[**Name Page:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#create-plan-survey)
- N-1: Text input box saves user’s name to use in “Results” page
- N-2: “Continue” button is disabled until at least 1 character is inputted
- N-3: “Continue” button goes to the “Tell Us About Yourself” page.
- N-4: Size of progress bar corresponds to ratio between current question number and total number of questions
- N-5: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
---
[**Tell Us About Yourself:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#tell-us-about-yourself)
- T-1: “Height”, “age”, and “weight” input accepts number input only
- T-2: Pressing “Continue” button goes to the “Budget” page
- T-3: “Continue” button is disabled if height (for ft), age, weight, and physical activity level are empty
- T-4: Size of progress bar corresponds to ratio between current question number and total number of questions
- T-5: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
- T-6: User input from “height,” “age,” “weight,” “gender,” and “physical activity level” is saved to use for [calculation of calories](http://www.calories-calculator.net/Calculator_Formulars.html) in “Results” page
- T-7: If gender is not inputted or self-described, the calorie equation will be averaged from the provided two calorie formulas
---
[**Budget:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#budget)
- B-1: Size of progress bar corresponds to ratio between current question number and total number of questions
- B-2: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
- B-3: Slider may be dragged in increments of whole dollar numerical amounts
- B-4: Continue button is enabled at all times
- B-5: Range of the slider should be from $0 to $100+
- B-6: Default number of slider is $0
- B-7: When the user inputs $60 or less, the data is tagged so budgeting resources can be displayed after the survey in the “Results” page
---
[**Accessible Foods:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#accessible-foods)
- AF-1: Size of progress bar corresponds to ratio between current question number and total number of questions
- AF-2: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
- AF-3: If no options are selected/it is empty, the continue button is disabled
- AF-4: When a user selects “not often” or “never,” retrieve dataset that is tagged as “accessible meals” to display for suggested meals in “Results” page
---
[**Cuisine:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#cuisine)
- C-1: Size of progress bar corresponds to ratio between current question number and total number of questions
- C-2: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
- C-3: User may select multiple food options
- C-4: There is no minimum amount of choices needed to be selected
- C-5: Continue button is in an active state at all times
- C-6: Selected pill options are highlighted, and unselected pills are un-highlighted
- C-7: Empty state starts with 0 selected pills
- C-8: If no options are selected, the suggested meals in the “Results” page are randomly displayed
- C-9: If a user selects 1 or more pill options, all meals tagged under the selected categories (e.g. Southern cuisine) will be shown to them under the recommended meals in the “Results” page
---
[**Goal Setting:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#goal-setting)
- G-1: Size of progress bar corresponds to ratio between current question number and total number of questions
- G-2: “Back” button allows users to go back to the previous page. Pressing back does not save current page data.
- G-3: “Submit” button is disabled until 1 choice has been selected
- G-4: Based on the user’s answer (e.g. Gain weight), all nutrition resources tagged under that selected category will render in the curated nutrition tips in “Results” page
- G-5: After pressing “Submit”, all answers are saved and will retrieve the data tagged from the answer choices to render the “Results” page
---
[**Results:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#results)
- R-1: {Name} placeholder is replaced with the “Name” input from the Name page
- R-2: Calories are calculated with the formula equation ([Daily Calorie Calculator](http://www.calories-calculator.net/Calculator_Formulars.html)), taking in user input data from “Tell Us About Yourself” page: use age, weight, gender, height, activity levels variables for formula
- R-3: Cups of water are calculated with [water intake formula](https://www.slenderkitchen.com/article/how-to-calculate-how-much-water-you-should-drink-a-day), taking in user input data from “Tell Us About Yourself” page: weight, activity level
- R-4: Minutes of exercise are calculated with [physical activity guidelines](https://www.cdc.gov/physicalactivity/basics/age-chart.html), taking in user input data from “Tell Us About Yourself” page: age
- R-5: Servings of fruits and vegetables are calculated with a [serving chart](https://www.medicalnewstoday.com/articles/219305#how_much_food_do_I_need_per_day), taking in user input data from “Tell Us About Yourself” page: age, gender
- R-6: “Curated nutrition tips for you” section are selected from a dataset of existing online nutritional resources curated by team
- R-7: “Curated nutrition tips for you” retrieve specific nutritional resources that are tagged based on answers from “Goal Setting” and “Budget” page
- R-8: “Suggested meals” section display cards based on answer selection from “Budget” and “Cuisine” pages (e.g. selecting under $60 on budget and “American cuisine” displays meals tagged as affordable and American)
- R-9: Displays nutrition resources with images hyperlinked to articles
- R-10: All suggested meal cards must display a relevant image hyperlinked to meal article
---
[**About Us:**](https://github.com/autumn-info-442a/team-f/tree/main/homework-2#about-us)
- A-1: Accessed by clicking the About tab on Navigation Bar
- A-2: Read only page
- A-3: Display images of creators
- A-4: Text blurbs next to creators
- A-5: Images are hyperlinked and link to creators’ LinkedIn
