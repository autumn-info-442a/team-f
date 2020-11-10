# Homework 5
## Architecture
### 11/09/2020
**PM:** _Nicola Kalderash_
<br>
**Designer:** _Tiffany Wong_
<br>
**Developer:** _Christopher Yee_
____


### 1. Work Coordination
- Who coordinates the work:
 - The project manager will coordinate the work between team members.
 - Justification: Project managers can oversee the team progress and can allocate tasks that best suit each member’s skills.
- Project management practices:
 - The Lean Methodology. This will focus on the flow, symmetry and balance to tackle needs of the group to develop as close to a perfect product for the consumer as possible.
 - Justification: Unlike the Agile method, the rationale behind using Lean over it is that a more symmetrical team can lead to a more symmetrical product. Taking care of the team and its needs and being willing to work together and communicate together helps lead to that conclusion.
- Meeting frequency & agenda planning:
 - We meet every time during class and an additional time during Saturday evenings. If needed, we will also plan another time during the end of the week or weekend to finish work. The project manager should plan the agenda before each meeting.
 - Justification: Working together is important, however there needs to be a balance between how often we may be meeting and allowing the team to work independently to accomplish tasks. Not all items need to be completed simultaneously together.

### 2. Tools to Communicate
- Facebook messenger is our choice of communication.
- Justification: The reason we chose this over other messaging apps such as Microsoft Team or Slack is because we are normally on Facebook, so it would be the fastest way to reach us.

### 3. Owning Architecture Components
**Overview of work distribution:** <br></br>

- With a small team such as ours, anything related to paperwork and submissions and final read through corrections as needed will be handled by the PM.
- Detail on design or the look and feel of the product is handled by the designer.
- Everything related to the inner workings of the product and how it functions and works on the website and to the user will be handled by the Developer.
**Owning components:**
- SurveyModel: Chris
- InformationModel: Nicola
- ButtonController: Tiffany
- CardController: Chris
- ResultView: Nicola
- HomeView: Tiffany
- SurveyView
  - NameView: Chris
  - PersonalView: Tiffany
  - BudgetView: Nicola
  - AccessibleView: Chris
  - CuisineView: Tiffany
  - NutritionView: Nicola
- Justification: With a small team, we hope to each support the development process with an equal workload of owning components. While the developer is responsible for the overall development of the application, the designer and PM will also contribute to ease each person’s workload.

### 4. Timeline
**Due 11/16**
- Have “Create Plan” button allowing user to go to another page
- Have “Popular Meal” section that links to other nutritional meals
- Design website with chosen colors
- Name page done
- Personal information page done
- Budget page done

**Due 11/23**
- Results page done
- Nutrition page done
- Cuisine page done

**Due 11/30**
- Curate list of suggested meals (4 meals for each cultural cuisine, at least 1 tagged as “accessible” aka few ingredients, cheap, simple ingredients, or easy/quick to make)
 - American
 - East/Southeast Asian
 - African
 - South Asian
 - Pacific Islander
 - Latin American
 - Mediterranean
 - Middle Eastern
 - Native American
 - Caribbean
- Curate list of resources (2 per nutritional goal -- lose fat, be healthier, gain weight, or miscellaneous)
- Curate list of budgeting resources (3 resources such as budgeting spreadsheet, budget website, etc. for nutrition plan)

**Due 12/7**
- First round of debugging done
- Review requirements and identify how much has been met or not
- Have all pages ready in working order for initial launch

Justification for timeline: Separating the work and chunking it into easily digestible and attainable sections per week allows us to focus and achieve our goals in a more successful manner.

### 5. Requirement Verification

During each build, we will run tests to double check and verify its accuracy--most of it will be manual inspections and some automated testing depending on its function as mentioned in the requirement verification points listed below. The developer will be responsible for conducting the inspections.


### Navigation Bar (on each page):###
**NB-1: Navigation bar should be shown on every screen of the interface**
- Manual testing: User can see the navigation bar on home screen and other screens at all times, no matter which browser is used.
- Justification: Visual and/or UI components are efficient to manually test because visual verification for this requirement is more apparent than checking in code.
<br></br>

**NB-2: There’s a way to navigate to the About page**
- Manual testing: User should be able to see the About page on the navigation bar in all screens and browsers and click on it to land on the About page.
- Justification: Visual and/or UI components are efficient to manually test because visual verification for this requirement is more apparent than checking in code.

**NB-3: About tab must be highlighted on hover, and hyperlinks to About page**
- Manual testing: User is able to interact with hyperlink and mouse visually shows highlight.
- Justification: Utilizes the mouse when testing on hover and its hyperlink, which is more effective visually over a code check.

**NB-4: Fresh Take logo must link to the landing page in nav bar**
- Manual inspection: Verify by seeing if there is a source link written in the code of the Fresh Take logo image. On all pages, the user should be able to click the logo and see the landing page.
- Justification: Manually inspecting the code with the necessary link will be effective and efficient to see if it is the proper source as it will be reviewed across all pages.

### Landing Page:###
**L-1: “Create Plan” banner card should always be visible independent of device size**
- Manual testing: Use different devices with different screen resolutions to check visual accuracy.
- Justification: Code will be the same regardless of device. Requires human intervention by visually checking the cards on devices.

**L-2: “Create Plan” button must redirect to the “Name” page**
- Manual inspection: href link in create plan link upon code inspection redirects to name page.
- Justification: Links need to be reliable to gain trust of the user/stakeholder. Ensuring that the link is correctly hyperlinked is important.

**L-3: Profile testimonial cards must be displayed in the landing page**
- Manual testing: User should be able to see the profile testimonial cards at all times in the landing page.
- Justification: This should be tested if it visually displays, making a manual test most effective as a live preview of the web app.

**L-4: There should be a max 3 testimonial cards aligned per horizontal row for desktop views, and stacked vertically on top of each other on smaller viewports**
- Manual testing: Verify visually with desktop inspection and mobile inspection
- Justification: Code may display correctly that the views are correct, but without user inspection it may not be the case.

### Create Plan Survey Questions:###
**S-2: “Back” button that appears throughout the survey must allow users to go back to the previous page. Pressing back does not save current page data.**
- Manual testing: The user should be able to view and click the back button on the survey page and see the previous question as expected.
- Justification: To ensure that the flow of the survey is accurate on both ways, manually testing each page to see if it returns to the previous page before it can provide visual feedback if it works or not.

### Name Page:###
**N-1: “Continue” button is disabled until at least 1 character is inputted**
- Manual testing: If the text input is blank, user should see that the “Continue” button is visually lighter in opacity and is unable to click on the button. When 1+ characters are inputted, Continue button shows full opacity and the user can interact by clicking the button.
- Justification: This is an important user feature to disable the user from breaking the program by not entering enough data. Requires human testing.

**N-2: “Continue” button must go to the “Tell Us About Yourself” page.**
- Manual inspection: href link in Continue link upon code inspection redirects to Tell Us About Yourself page.
- Justification: Links need to be reliable to gain trust of the user/stakeholder. Ensuring that the link is correctly hyperlinked is important and is best suited with human inspection.

### Tell Us About Yourself:###
**T-1: “Height”, “age”, and “weight” input must only accept number input**
- Program analysis: Webpage should not advance if string or float entered by implementing a rule that it is only number values only. This can be checked by running a script of the input and printing an error message if values are not allowed.
- Justification: Because there are numerous cases of what input can be provided, it is important for the program itself to be automatically checking and prevent any non-numerical cases right away.

**T-2: Pressing “Continue” button must go to the “Budget” page**
- Manual inspection: href link for continue button in this area will display link to budget page.
- Justification: Links need to be reliable to gain trust of the user/stakeholder. Ensuring that the link is correctly hyperlinked is important.

**T-3: “Continue” button is disabled if height (for ft), age, weight, and physical activity level are empty**
- Manual testing: Button will be displayed with light opacity and cannot be interacted with/clicked on all tested devices.
- Justification: Manual testing again helps prevent the user/stakeholder from breaking the application by accessing future portions without entering required information.


### Budget:###
**B-1: Slider must be dragged in increments of whole dollar numerical amounts**
- Manual testing: When a user drags the slider button, an associated number marking the current slider location should be displayed near the slider button. The closest number to slide up or down is the next whole number, and should not display decimals or skip numbers.
- Justification: To limit the amount of entries we load in the system it is easier to have whole dollar amounts and test that the slider interacts as intended.

**B-2: Continue button is enabled at all times**
- Manual testing: Continue button is visible at all times and can be clicked to update to the next page.
- Justification: Easier to visually identify if a button works visually with a human than simply viewing through code.

**B-3: Range of the slider should be from $0 to $100+**
- Manual testing: The left end of the slider must display $0 and the right end of the slider must display $100+.
- Justification: To prevent the application from breaking by having imaginary values or values that are out of bounds. Requires human intervention to check.

**B-4: Default number of slider is $0**
- Manual testing: Every time a user lands on this page initially or refreshes the page, the slider button must visibly sit at the $0 mark.
- Justification: To prevent the application from breaking by having imaginary values or values that are out of bounds. Requires human intervention to check.

### Accessible Foods:###
**AF-1: If no options are selected, the continue button is disabled**
- Manual testing: Button will be displayed with light opacity and cannot be interacted with/clicked on all tested devices.
- Justification: This is a visual and UI component that must show on the page when a button is disabled through a different visual treatment, and can be tested to see if clicking the button goes anywhere or not.

### Cuisine: ###
**C-1: Answer choices must allow user to select multiple food options**
- Manual testing: User should be able to select any food option, in any possible combination, by clicking any option pills and seeing the selected pills highlighted.
- Justification: This can be manually tested by seeing if the visual treatment allows the user to select the options and have it visually highlighted in response.

**C-2: There is no minimum amount of choices needed to be selected**
- Manual testing: User should be able to navigate to the next page without ever selecting any option.
- Justification: Can be efficiently tested by going on the live preview without any selection and see if it fails or passes.

**C-3: Continue button is in an active state at all times**
- Manual inspection: Program does not label or code the continue button as disabled at any time.
- Justification: To make sure that it is active in all times, reviewing the code to see what the expected cases are should be the most effective in determining the element’s function.

**C-4: Selected pill options must be highlighted, and unselected pills are unhighlighted**
- Manual testing: User can check pill options to verify if pill highlights upon selection or not.
- Justification: Because this is a visual UI treatment, clicking manually to see if a selected pill shows a highlight, or clicking again to see if it is unhighlighted, will be easily seen and documented.
**C-5: Empty state starts with 0 selected pills**
- Manual inspection: Code inspection reveals that the empty state has blank fields ready for entry.
- Justification: Because pills can be highlighted or un-highlighted for selection at any time, checking the code to see that it begins off with zero selected fields or saved data will verify what is expected.

### Goal Setting: ###
**G-1: “Submit” button is disabled until 1 choice has been selected**
- Manual testing: If no choices are selected, user should see that the “Submit” button is visually lighter in opacity and is unable to click on the button. When 1 radio button option is selected, Submit button shows full opacity and the user can interact by clicking the button.
- Justification: System cannot and should not advance without human input. Needs user to check that this is the case.

**G-2: Clicking “Submit” must go to the “Results” page**
- Manual inspection: href link for Submit button when inspecting the code should have a link to Results page.
- Justification: This is for integrity of the application and users must trust that the link is reliable. This calls for human inspection to verify that it is documented in the code.

### Results: ###
**R-1: Nutrition resources and suggested meal cards must display images hyperlinked to articles**
- Manual inspection: href link in the nutrition and suggested meal cards should have a link to an article page, and there must also be an img file coded into each card.
- Justification: This is for integrity of the application and users must trust that the link is reliable. This calls for human inspection to verify that it is documented in the code.

**R-2: Calories must be displayed with the calculated number (Daily Calorie Calculator), taking in user input from “Tell Us About Yourself” page: age, weight, gender, height, activity levels variables for formula**
- Manual Inspection: Use test numbers inserted in the “Tell Us About Yourself” page and manually calculate all the numbers for calories to see if the same result is being shown on the “Result” page.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-3: If gender is not inputted or is self-described, the calorie equation will be averaged from the provided two calorie formulas**
- Manual Inspection: Use test numbers inserted in the “Tell Us About Yourself” page and manually calculate the average of two calorie formulas to see if the same result is being shown on the “Result” page.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-4: Cups of water must be displayed with from the calculated number in the water intake formula, taking in user input from “Tell Us About Yourself” page: weight, activity level**
- Manual Inspection: Use test numbers inserted in the “Tell Us About Yourself” page and manually calculate cups of water to see if the same result is being shown on the “Result” page.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-5: Minutes of exercise must be displayed with from the calculated number in physical activity guidelines, taking in user input from “Tell Us About Yourself” page: age**
- Manual Inspection: Use test numbers inserted in the “Tell Us About Yourself” page and manually calculate minutes of exercise to see if the same result is being shown on the “Result” page.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-6: Servings of fruits and vegetables must be displayed with from the calculated number in the serving chart, taking in user input from “Tell Us About Yourself” page: age, gender**
- Manual Inspection: Use test numbers inserted in the “Tell Us About Yourself” page and manually calculate servings to see if the same result is being shown on the “Result” page.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-7: “Curated nutrition tips for you” section must be shown from a provided list of existing online nutritional resources curated by team**
- Manual inspection: curated nutrition tips for you code shows that it pulls from the actual curated list by the team.
- Justification: Double checking each calculation for each test input will allow us to know if the function is calculated correctly.

**R-8: “Curated nutrition tips for you” must display specific nutritional resources that are based on survey preferences from “Goal Setting” and “Budget” page**
- Program analysis: Values are imported from goal setting and budget page and a script is run to check that these values are accurately transferred
- Justification: Running the code to see where the resources are coming from is most effective when determining the ID or another identifier for goal-setting/budget selections

**R-9: “Suggested meals” section includes both meals based on user’s cuisine preferences, plus accessible meal options curated by the team if a user selects “Not often” or “Never” in the “Accessible Food” question**
- Automated testing: Running the code should check for the data/identifiers that connects the user’s cuisine preferences and meal options to the suggested meal code
- Justification: Running the code to see where the suggested meals are coming from is most effective if it checks that the data is connected to what options are chosen from Accessible Food or Cuisine Preferences.

**R-10: The “Suggested meals” should display meal cards at all times, so if no user cuisine preferences are selected, it should display a default preselected list of meal cards from the team**
- Manual testing: This can be tested by not selecting any cuisine preferences in the survey, then verified if the results visually display a default preselected set of meal cards in the Results page.
- Justification: To make sure that it covers all cases, testing it directly on the web app manually will allow us to see how the meal cards are displayed from the selection.
