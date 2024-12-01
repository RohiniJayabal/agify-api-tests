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
# run tests in normal mode
$ npm run test

# run only smoke tests
npm run test:smoketests

# run only nfr tests
npm run test:nfr

# run tests in watch mode (watch mode helps in speeding up the development of test)
$ npm run test:watch
```

### View reports

After the tests are executed, the reports are generated and saved in HTML format. Please refer to path for a sample report ->

1. Default report : `<ProjectDirectory>/reports/agify-cucumber-test-report.html`
2. Smoke test report: `<ProjectDirectory>/reports/agify-cucumber-smoke-test-report.html`
3. Non functional test report: `<ProjectDirectory>/reports/agify-cucumber-nfr-test-report.html`

## Non functional tests covered

1. The API is expected to return the responses within 3000ms (3 sec).
2. I observed that the Agify API gets throttled and responds with a "Too Many Requests" (429) error after sending a certain number of requests. To address this, I added a test for this behavior as part of the non-functional requirements (NFR). However, the test might be somewhat unreliable and could fail during execution since the exact request quota is currently unknown. For now, I’ve assumed the quota to be 100 requests in an hour.

## Key Observations/Assumptions

1. When the name param is not provided in the request, the ideal result could be Bad request (HTTP status code 400). Instead, the API is returning http status code 422. So the tests are written in the assumption that 422 is as per requirement.
2. When the name parameter is provided with an invalid value, the ideal result could be Bad request (400) or not found (404). Instead, the API is returning http status code 200. So the tests are written in the assumption that 200 is as per requirement.
