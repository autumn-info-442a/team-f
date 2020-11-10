# Problem Statement

While information surrounding nutrition might appear as prominent as ever due to technology and communication platforms, lack of accurate, personalized nutrition information continues to predominantly impact teenagers and young adults in minority communities. Without adequate access to nutritional education and healthy diet, low-income communities of color encounter greater disparities in quality of life, lifespan, and/or disease incidences[[1]](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2729116/). A couple user interviews from individuals of these communities and with Public Health backgrounds reveal that main causes of the problem root from lack of time to sift through nutritional information suited for their needs, as many are busy with other pressing needs such as work to sustain their income. Additionally, for both busy individuals and teenagers, some nutritional content is not as accessible such as the language of lengthy, difficult academic sources, leaving minimal options for visually understandable and concise information.

While there are existing solutions to address accurate nutrition information and meal plans, like nutrition.gov and ChooseMyPlate, their information is not fully personalized towards an individual’s current situation and demographic, such as culturally competent and affordable options that communities of color may feel more personally connected to. Given this current context, how might we bring accurate, straightforward, and personalized nutrition information for underrepresented minority teenagers/young adults to improve knowledge on nutritious habits?

# Solution Statement


## Overview of Fresh Take ##
Our solution supports teenagers and young adults in minority communities who may have limited experience in building nutritious habits and lifestyles, but would like to learn more. This is implemented in a form of a personalized plan where a user submits their information in an engaging survey, which is then calculated to provide nutritional recommendations, curated nutrition tips, and culturally relevant meals. The web application interface is as follows:

Figma Link: <br></br> [Fresh Take](https://www.figma.com/file/0rxNfC7CmNp9xTu8dCy3Q0/INFO-442-Design?node-id=12380%3A0)
<br></br>

### Landing Page ###
![LandingPage](img/1_home.png)

 __Fresh Take Logo:__
The logo is shown on every screen of the interface, and the logo is contained in its own box, hyperlinked to this landing page URL. 

__Create Plan banner card:__ Card should be responsive to size changes, but should still have the photo/text (“Personalize your nutrition…” above the Create Plan button at all times. Only the Create Plan button should be clickable, and it will lead you to the first page of the survey.

__Info/quote/testimonial cards:__ On desktop port these cards should be aligned horizontally, but when reducing the viewport on a smaller device the cards may be stacked vertically. Photos should be included on the top part of the card, but if there is no photo the card will default to a preselected blank placeholder. It should be view-only and not clickable.
Popular meal cards: A maximum of 6 popular meals should be shown on the home page at once. If a user wants to see more meals, they can click the Popular Meals tab in the nav bar or a Show More button that will be designed at the bottom of the 6 meal previews to redirect to the Popular Meals page. Each meal card redirects to an external hyperlink showing the recipe.

__Popular meal cards:__ A maximum of 6 popular meals should be shown on the home page at once. Each meal card redirects to an external hyperlink showing the recipe.

__About us:__ The About Us section displays text blurbs of creators and profile photos. Image and text should be displayed horizontally side-by-side if the viewport is wider such as on a desktop view, and should be act responsively on narrower mobile views with a stacked image on top and text blurb below.

<br></br>
## Create Plan Survey ##
### Name ###
![NameInfo](img/2_name.png)<br></br>
After selecting the Create Plan button on the landing page, the user is directed into a new page in a slideshow card modal display. A user may enter their name in the input box. If no input is entered, the box is blank and the Continue button is disabled and they will not be able to proceed forward. The user can click on the left Back button at any time, and on this first slide the Back button will lead them back to the landing page. On the bottom is a progress bar that increases each time to press Continue to go to the next question, proportional to the amount of questions the survey has.
### Tell Us About Yourself ###
![YourPersonalInfo](img/3_personal_info.png)<br></br>
Height, age, and weight are all text entry inputs that require a number. If an alphabetical character is inputted in any of these, an error message pops up right above the Continue button that says “Enter a number for one of your inputs.” Physical activity level is a drop down with the options “Little to no activity,” “Moderate activity,” “High activity.” If one of the inputs are empty (excluding the input next to “in” for Height and Gender, which are not required), then the Continue button is disabled. Pressing the back button will not store any of the correct information and then go back to the previous slide (Name).

Height, age, and weight information will be stored into an equation that calculates the recommended calorie amount and food portion sizes provided to the user after completing the survey. Physical activity level will also be calculated with height, age, and weight into an equation that suggests the minutes of physical activity.
### Budget ###
![YourBudget](img/4_budget.png)<br></br>
User can input their maximum weekly budget by clicking and dragging on the slider scale. The slider placement should also show the number it is on below the slider square. The continue button does not have a disabled state and is active at all times--if the user does not move the slider the default will be at $0.

If the user inputs $60 or less, it will signal on the back end to populate a list of pre-made resources for budgeting (such as a budget track sheet and/or relevant affordable food options), which is provided after the survey for curated nutrition tips/resources.
### Accessible Foods ###
![AccessibleFoods](img/5_fresh_food.png)<br></br>
The user may input one option using the radio buttons. If no options are selected/it is empty, the continue button is disabled. If a user selects "not often" or "never,” then it will signal on the backend to draw from the list of recipes that are labeled as “accessible”--meaning that the ingredients use/are able to be substituted for alternatives like canned vegetables or other staple foods. (The meals and recipes will be stored in a database with tags that label its contents such as accessibility).
### Cuisine ###
![CuisineImg](img/6_cuisine.png)<br></br>
A user can select as many options as they want for their cuisine choices. The empty state starts with 0 selected (outlined and no fill pill). The Continue button is active at all times--if a user continues without selecting any, the meal and nutrition options will be randomly selected for them in the plan in the results page. If a user selects 1 or more options, all meals tagged under the selected categories (e.g. Southern cuisine) will be shown to them under the recommended meals in the results page.
### Goal-Setting ###
![Goals](img/7_nutrition.png)<br></br>
The user may input one option using the radio buttons. This is the last question, and when the user reaches the last question slide the button is labeled as Submit. If no options are selected/it is empty, the Submit button is disabled.

Depending on the user's answer choice, it will signal the relevant tagged dataset, such as "lose_fat," "healthy, "gain_weight," or "general." For example, if a user selects to be healthier, the resources pulled will be about health habits + tips in the "Curated nutrition tips for you" section of the Results page. Selecting "nothing specific" will randomize all the resources and provide overarching resources.

### Results ###
![Results](img/8_results.png)<br></br>

__Recommendations:__ All calories, serving sizes of fruits and vegetables, cups of water, and exercise should be calculated from the personal information of weight, age, height, and physical activity. Each calculation is based on a separate equation that will be used from existing research/calculations around nutritional standards.

__Curated nutrition tips for you:__ Advice and resources personalized to the user are provided here, which the team will curate from online existing nutrition publications and articles, verified with credible sources based on nutritional research. These resources are selected based on the survey answers from the goal setting preferences in addition to the budget question. For example, if the user qualifies for the budget number cutoff, there will be resources linked around the topic, in addition to tagged advice tips surrounding budgeting with food. The resource cards below the pre-written advice tips hyperlink to external sources, or are attachments that they can read and use.

__Suggested meals:__ Suggested meals list a range from 3 - 6 cards curated from their preferences picked in the Cuisine question. If they selected that their food and vegetables were not accessible, the recipes that are tagged as “accessible” should only appear here as well. All cards should be linked to external hyperlinks verified by our project team.