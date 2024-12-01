@AgePrediction
Feature: Predict age based on a given name using Agify.io API.
   As a user of Agify.io,
   I want to predict the age associated with a name,
   So that I can gain insights into demographics.

   @smoke @performance
   Scenario Outline: Predict age based on name
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be <httpStatusCode>
         And should receive a response with predicted age
         And the response should include a count of occurrences
         And the API should respond within stipulated time of <responseTime> ms
      Examples:
         | name        |  httpStatusCode | responseTime |
         | john        |     200         |     3000     |
         | billybob    |     200         |     3000     |
         | billy bob   |     200         |     3000     |
         | steve       |     200         |     3000     |
         | John Doe    |     200         |     3000     |

   @invalid @performance
   Scenario Outline: Getting Age prediction with invalid and valid names
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be <httpStatusCode> 
         And should receive a response with no predicted age
         And the API should respond within stipulated time of <responseTime> ms
      Examples:
         |        name              | httpStatusCode | responseTime |
         |   invalid-name-random    |      200       |     3000     |
         |                          |      200       |     3000     |
         |   100                    |      200       |     3000     |

   @invalid 
   Scenario Outline: Verify Agify Age prediction API behavior with bad request
      Given I have access to Agify API
      When I send GET request without name param
      Then the response status should be <httpStatusCode>
      Examples:
      |   httpStatusCode  |
      |    422            |
