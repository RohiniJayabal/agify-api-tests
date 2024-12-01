@AgePrediction
Feature: Predict age based on a given name using Agify.io API.
   As a user of Agify.io,
   I want to validate the non functional requirements,
   So that I can use the API as per allocated quota and response time SLA.

   @nfr
   Scenario Outline: Api returns response within the given 
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be 200
         And should receive a response with predicted age
         And the API should respond within stipulated time of 3000 ms
      Examples:
         | name        |
         | john        |
         | billy bob   |

   @nfr @ignore
   Scenario Outline: verify if too many requests handled
      Given I have access to Agify API
      When I send GET requests more that allocated quota
      Then the response status should be <httpStatusCode>
      Examples:
      |   httpStatusCode  |
      |    429            |

