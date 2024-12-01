@AgePrediction @smoke
Feature: Predict age based on a given name using Agify.io API.
   As a user of Agify.io,
   I want to predict the age associated with a name,
   So that I can gain insights into demographics.

   @valid
   Scenario Outline: Predict age based on name
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be <httpStatusCode>
         And should receive a response with valid age
         And the API should respond within stipulated time of <responseTime> ms
      Examples:
         | name        |  httpStatusCode | responseTime |
         | john        |     200         |     3000     |
         | billybob    |     200         |     3000     |
         | steve       |     200         |     3000     |

   @valid 
   Scenario Outline: Getting Age prediction with invalid and valid names
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be <httpStatusCode> 
         And should receive a response with <validOrInvalid> age
         And the API should respond within stipulated time of <responseTime> ms
      Examples:
         |        name              |  validOrInvalid |  httpStatusCode | responseTime |
         |                          |    invalid      |       200       |     3000     |
         |   invalid-name-random    |    invalid      |       200       |     3000     |
         |   john                   |    valid        |       200       |     3000     |
         |   100                    |    invalid      |       200       |     3000     |

   @invalid 
   Scenario: Verify Agify Age prediction API behavior with bad request
      Given I have access to Agify API
      When I send GET request without name param
      Then the response status should be 422