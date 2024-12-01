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

After the tests are executed, the reports are generated and saved in HTML format. Please refer to path for a sample report ->

1. Default report : `<ProjectDirectory>/reports/agify-cucumber-test-report.html`
2. Smoke test report: `<ProjectDirectory>/reports/agify-cucumber-smoke-test-report.html`
3. Non functional test report: `<ProjectDirectory>/reports/agify-cucumber-nfr-test-report.html`

## Non functional tests covered

1. The API is expected to return the responses within 3000ms (3 sec).
1. I noticed that after sending number of requests, the agify API is throttled and returns too many requests (429). This is a NFR requirement and added a test around the same too. This may be bit flaky and fail when ran, as I do not know the allocated quota as of now. I just assumed it to be 100 for now.

## Key Observations

1. When the name param is not provided in the request, the ideal result could be Bad request (HTTP status code 400). Instead, the API is returning http status code 422. So the tests are written in the assumption that 422 is as per requirement.
2. When the name parameter is provided with an invalid value, the ideal result could be Bad request (400) or not found (404). Instead, the API is returning http status code 200. So the tests are written in the assumption that 200 is as per requirement.
