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
- Client view
- The ButtonController and the ResultView communicate with the model. They communicate:
    - The ButtonController can send the information of each question page to the SurveyModel so it will manipulate the user’s data
    - The ResultView can ask the SurveyModel about the user’s inputted answers and suggested nutritional information


```
function getCalorie(age, weight, gender, height) {
  //TODO calculate estimated calorie with algorithm
  return [amount of suggested calories]
} 

function getVegetables(age, gender) {
  //TODO calculate vegetable servings with algorithm
  return [amount of vegetable servings suggested]
}

function getFruits(age, gender) {
 //TODO calculate fruit servings with algorithm
 return [amount of fruit servings suggested]
}

function getWater(weight, activity) {
 //TODO calculate water per day with algorithm
 return [amount of water suggested]
}

function getExercise(age) {
 //TODO calculate recommended amount of exercise with algorithm
 return [amount of exercise needed]
} 
```
____
### InformationModel ###
- Responsible for containing all the external nutrition resources, articles, and suggested meals 
- Client view
- The CardController communicates with the model. They communicate: 
  - The CardController can ask the InformationModel for the suggested resources and meals

``` 
function getNutritionArticle(internal_article) {
	//TODO import an informational article
	return [one article]
}
```
____
### SurveyController
- Responsible for saving user input, managing flow of the survey, and sending information to SurveyModel
- Client View
- The SurveyView communicates with the controller. They communicate: 
  - The SurveyView shares user input to the SurveyController when they click a button to continue to the next step of the survey

```
Class UserInfo extends Component {
  //TODO implement actual component
  render() {
    return(
      info = [ ];
    )
  }
}
Export default UserInfo;
```

---
### CardController
- Responsible for saving and linking nutrition information in the suggested meals and nutrition resource cards
- Client View
- The ResultView communicates with the controller. They communicate: 
  - The ResultView sends input to the CardController when a user clicks a meal or nutrition resource card
```
Class CardController extends Component {
  //TODO implement actual component
    render() {
      return(
      // get list of data needed to make card in json file
      // iterate through list and make card
      // return list of cards
      )
    }
  }
Export default CardController;
```
---
### ResultView
- Responsible for displaying the nutrition survey results based on the model data of user input
- Client view
- The SurveyModel and InformationModel communicate with the view. They communicate: 
  - The SurveyModel updates user information to the ResultView to display the user’s suggested number of nutrition intake/servings
  - The InformationModel updates user information to the ResultView to display the user’s nutrition tips, resources, and suggested meals
```
Class ResultView extends Component {
  //TODO implement actual component
  render() {
    return(
      <CustomMetrics />
      <SuggestedHealthAdvice />
      <SuggestedMeals />
    )
  }
}
Export default ResultView;
```

---
### HomeView
- Responsible for displaying the initial home page layout (banner, cards, and button UI) 
- Client view
- The CardController and SurveyController communicate with the view. They communicate: 
  - The HomeView communicates with CardController by sending input when a user clicks a meal card
  - The HomeView communicates with SurveyController by sending input when a user clicks button to personalize survey
```
Class HomeView extends Component {
  //TODO implement actual component
    render() {
      return(
        <Header />
        <CreatePlan />
        <SampleUsers />
        <SampleMeals />
        <p>{About Us}</p>
        <Footer />
      )
    }
  }
Export default HomeView;
```
---
### SurveyView
- Responsible for displaying all survey related questions and answer input for the users 
- Client View
- The SurveyView communicates with the SurveyController by sending input when a user interacts with the buttons or UI elements in this view
```
class CustomPlan extends Component {
  //TODO implement actual component
  render() {
    <form>
      <div>{Name Question}</div>
      <div>{Height Question}</div>
      <div>{Weight Question}</div>
      <div>{Age Question}</div>
      <div>{Gender Question}</div>
      <div>{Physical Activity Question}</div>
      <div>{Budget Question}</div>
      <div>{Accessible Food Question}</div>
      <div>{Cuisine Question}</div>
      <div>{Nutrition Question}</div>
    </form>
  }
}
Export default CustomPlan;
```
