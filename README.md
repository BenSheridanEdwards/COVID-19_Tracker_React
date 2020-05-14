# COVID-19 Tracker

[![CircleCI](https://circleci.com/gh/BenSheridanEdwards/COVID-19_Tracker_React.svg?style=svg)](https://circleci.com/gh/BenSheridanEdwards/COVID-19_Tracker_React)

[Description](#description) | [User Stories](#user-stories) | [Mockups](#mockups) | [App Showcase](#app-showcase) | [Features](#features) | [Improvements](#improvements) | [Installation Instructions](#installation) | [Credits](#credits)

## <a name="description">Description</a>

COVID-19 Tracker made with React Hooks, Chart.js, and Material-UI.

Uses the COVID-19 API to fetch daily data on the reported number of infected, recovered and deaths from the Coronavirus. 

By default, you'll see a line graph, showing the collated data from all over the world. By using the country picker drop-down menu, you can filter by country and see bar graphs showing figures for each individual country. 

**Tech Stack:** *JavaScript, React, Node, CSS, Material-UI, HTML, Jest, Enzyme, Webpack, Babel, Charts.js, CircleCI, Code Climate, Firebase*

You'll find the app [here](https://covid-19-tracker-react.web.app/), use cmd/window + click to open in a new tab.

## <a name="user-stories">User Stories</a>

```
As a user of the COVID-19 Tracker, when I first start the app,
I expect to see a line graph of the world data for cases of people who have been infected, recovered and sadly died from the virus.
```

```
As a user of the COVID-19 Tracker, when I select a country from the drop-down menu,
I expect to see a bar graph of the number of people who have been infected, recovered and have died from the virus in that country.
```

## <a name="mockups">Mockups</a>

When the user first loaded the app, they'll see the global figures on a line graph:

<img src="https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppMockup-LineGraph.png" width="600" />

Upon selecting a country, they'll see that country's figures on a bar graph:

<img src="https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppMockup-BarGraph.png" width="600" />

## <a name="app-showcase">App Showcase</a>

See global figures as a line graph, and select individual countries to see their figures on a bar graph:

![App Screenrecording](https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/AppShowcase-COVID-19-Tracker.gif)

Country picker drop down menu:

<img src="https://github.com/BenSheridanEdwards/COVID-19_Tracker_React/blob/master/src/images/CountryPicker.png" width="200" height="400" />

### <a name="features">Features</a>

- See global data for those infected and those who have died from COVID-19
- Select a country, and see its data for the number of infected cases, the number of cases of people who have recovered and the number of people who have died from COVID-19 

### <a name="improvements">Improvements & Bugs</a>

#### Improvements

- Project logo
  - Higher Quality Image
  - Might just use the words 'COVID-19 Tracker', with a cartoon image of a virus, and remove the emoji completely

#### Bugs

- App crashes when a user attempts to switch back the global figures after selecting a country


## <a name="installation">Installation Instructions</a>

Clone this repository from github then change directory into it.

```
$ git clone git@github.com:BenSheridanEdwards/COVID-19_Tracker_React.git
$ cd COVID-19_Tracker_React
```

### Launching the App from the Command Line

From inside the React project, you can run `yarn start` in the terminal to launch the app in the browser.

```
$ yarn start
```

Launching the app from the command line should open up a new tab in your default browser. If it doesn't, you can navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Running Tests

From inside the React project, you can run `yarn start` in the terminal to run the test suite. 

```
$ yarn test
```

### Seeing Test Coverage

From inside the React project, you can run 'yarn test -- --coverage' in the terminal to see the code coverage for this project.

```
$ yarn test -- --coverage
```

## <a name="credits">Credits</a>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was tested with [Jest](https://jestjs.io/) & [Enzyme](https://enzymejs.github.io/enzyme/). 

This project uses continuous integration and deployment with [CircleCI](https://circleci.com/) & [Firebase](https://firebase.google.com/).

This project utilises [Code Climate](https://codeclimate.com/) to ensure high code quality.
