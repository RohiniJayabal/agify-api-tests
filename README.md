# agify-api-tests

# Automation using Cucumber.js (Take home test by Rohini Jayabal)

This test demonstates the implementation of Automation testing for the given API (Agify.io) using Cucumber.js in Gherkin format. The tests are written using Typescript.

## Prerequisuites (environment in which the test was created)

- node 18 (v18.20.4)
- npm 10 (10.7.0)

## Frameworks used

- cucumber.js (https://cucumber.io/)
- Axios (for API call)
- PactumJs (An alternative framework to test API, preferred by Cucumber.io community and equivalent to RESTAssured in Java. Used for tests related to error scenarios.)
- Chai (for assertions)

## How to Run

### Steps to setup the code

- `git clone` repo, `cd` into directory
- `npm ci`

### Steps to run the tests

```bash
# run tests in watch mode (watch mode helps in speeding up the development of test)
$ npm run test:watch

# run tests in normal mode
$ npm run test

# run only smoke tests
npm run test:smoketests
```

### View reports

After the tests are executed, the reports are generated and saved in HTML format. Please refer to path for a sample report -> `<ProjectDirectory>/reports/cucumber-report.html`

## Non functional tests covered

The API is expected to return the responses within 3000ms (3 sec).

## Key Observations

1. When the name param is not provided in the request, the ideal result could be Bad request (HTTP status code 400). Instead, the API is returning http status code 422. So the tests are written in the assumption that 422 is as per requirement.
2. When the name parameter is provided with an invalid value, the ideal result could be Bad request (400) or not found (404). Instead, the API is returning http status code 422. So the tests are written in the assumption that 422 is as per requirement.
