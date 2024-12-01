@AgePrediction
Feature: Predict age based on a given name using Agify.io API.
   As a user of Agify.io,
   I want to predict the age associated with a name,
   So that I can gain insights into demographics.

   @smoke
   Scenario Outline: Predict age based on name
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be 200
         And should receive a response with predicted age
         And the response should include a count of occurrences
      Examples:
         | name        |
         | john        |
         | billybob    |
         | billy bob   |
         | steve       |
         | John Doe    |

   @redpath @smoke
   Scenario Outline: Getting Age prediction with invalid and valid names
      Given I have access to Agify API
      When I send GET request with valid name as '<name>'
      Then the response status should be 200 
         And should receive a response with no predicted age
      Examples:
         |        name              |
         |   invalid-name-random    |
         |                          |
         |   100                    |

   @redpath 
   Scenario Outline: Verify Agify Age prediction API behavior with bad request
      Given I have access to Agify API
      When I send GET request without name param
      Then the response status should be <httpStatusCode>
      Examples:
      |   httpStatusCode  |
      |    422            |
