This site provides Covid 19 tracking information by state based on the open api offered by covidtracking.com. The site uses React as the primary technology.

## Code base

The code base has been bootstrapped with the create react app script. The implementation was done using a component based approach. The **covid19tracking.js** file contains the following components:

- **Header.js** - which contains the site header
- **StateSelect.js** - which provides a list of states to select from and performs a callback into the parent component to allow the user selection to be passed around components.
- **StateResults.js** - which performes the search invoking the api and then formatting the results using bootstrap cards.
- **Footer.js** - which contains the site footer disclaimer

The unit tests are located in the tests folder and there is a test suite for each of the components

## Unit testing

Unit testing is handled using Jest

### Making a Progressive Web App

The codebase uses bootstrap to make the website responsive

### Deployment

Deployment is achieved with CI/CD pipeline in AWS using AWS Amplify. The pipeline is set up to pull the code from the github respository and automatically push it to https://www.covid19tracking.fabiodemartino.com/
