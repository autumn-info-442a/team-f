# Homework 4
## Architecture
### 11/02/2020
**PM:** _Nicola Kalderash_
<br>
**Designer:** _Tiffany Wong_
<br>
**Developer:** _Christopher Yee_
____
### SurveyModel
- Responsible for containing user inputted survey answers and calculating suggested nutrition plans from the input
Client view
- The ButtonController and the ResultView communicate with the model. They communicate:
 - The ButtonController can send the information of each question page to the SurveyModel so it will manipulate the user’s data
 - The ResultView can ask the SurveyModel about the user’s inputted answers and suggested nutritional information
| Code Stubs | Survey Model Stub Of Code |
| ---- | ----|


 `function getCalorie(age, weight, gender, height) {
 //TODO calculate estimated calorie with algorithm
 return [amount of suggested calories]
} ` <br></br>

 `function getVegetables(age, gender) {
 //TODO calculate vegetable servings with algorithm
 return [amount of vegetable servings suggested]
} ` <br></br>

 ` function getFruits(age, gender) {
 //TODO calculate fruit servings with algorithm
 return [amount of fruit servings suggested]
} ` <br></br>
 ` function getWater(weight, activity) {
 //TODO calculate water per day with algorithm
 return [amount of water suggested]
} ` </br></br>
`  function getExercise(age) {
 //TODO calculate recommended amount of exercise with algorithm
 return [amount of exercise needed]
} ` <br></br>
____
### InformationModel ###
- Responsible for containing all the external nutrition resources, articles, and suggested meals
- Client view
- The CardController communicates with the model. They communicate:
 - The CardController can ask the InformationModel for the suggested resources and meals
____
### ButtonController
- Responsible for saving user input and sending information to Survey Model
- Client View
- The HomeView, NameView, PersonalView, BudgetView, AccessibleView, CuisineView, and NutritionView communicate with the controller. They communicate:
 - Each HomeView, NameView, PersonalView, BudgetView, AccessibleView, CuisineView, and NutritionView shares user input to the ButtonController when they click a button to continue to the next step of the survey
---
### CardController
- Responsible for saving and linking nutrition information in the suggested meals and nutrition resource cards
- Client View
- The ResultView communicates with the controller. They communicate:
 - The ResultView sends input to the CardController when a user clicks a meal or nutrition resource card
---
### ResultView
- Responsible for displaying the nutrition survey results based on the model data of user input
- Client view
- The SurveyModel and InformationModel communicate with the view. They communicate:
 - The SurveyModel updates user information to the ResultView to display the user’s suggested number of nutrition intake/servings
 - The InformationModel updates user information to the ResultView to display the user’s nutrition tips, resources, and suggested meals
---
### HomeView
- Responsible for displaying the initial home page layout (banner, cards, and button UI)
- Client view
- The CardController and ButtonController communicate with the view. They communicate:
 - The HomeView communicates with CardController by sending input when a user clicks a meal card
 - The HomeView communicates with ButtonController by sending input when a user clicks button to personalize survey
---
### SurveyView
- Holds within it _NameView_, _PersonalView_, _BudgetView_, _AccessibleView_, _CuisineView_, & _NutritionView_

#### _NameView_
 - Responsible for displaying questions about asking users for their name.
 - Client View
 - The ButtonController communicates with the view. They communicate:
   - The NameView communicates with ButtonController by sending input when a user clicks the button to continue to the next question
<br></br>
#### _PersonalView_
 - Responsible for displaying text input for users height, weight, and age, in addition to displaying drop down responses for gender and physical activity level.
 - Client View
 - The ButtonController communicates with the view. They communicate:   
   -  The PersonalView communicates with ButtonController by sending input when a user clicks the button to continue to the next question
#### _BudgetView_
 - Responsible for displaying sliding scale for budget and user’s selection
 - Client view
 - The ButtonController communicates with the view. They communicate:
  - The BudgetView communicates with ButtonController by sending input when a user clicks the button to continue to the next question <br></br>
#### _AccessibleView_ <br></br>
 - Responsible for displaying accessible fresh food question and user input
 - Client view
 - The ButtonController communicates with the view. They communicate:
  - The BudgetView communicates with ButtonController by sending input when a user clicks the button to continue to the next question
#### _CuisineView_
 - Responsible for displaying multiple cuisine options that user selects
 - Client view
 - The ButtonController communicates with the view. They communicate:
  - The CuisineView communicates with ButtonController by sending input when a user clicks the button to continue to the next question
#### _NutritionView_
 - Responsible for displaying nutritional goal question and user’s selection
 - Client view
 - The ButtonController communicates with the view. They communicate:
  - The NutritionView communicates with ButtonController by sending input when a user clicks the button to continue to the next question
