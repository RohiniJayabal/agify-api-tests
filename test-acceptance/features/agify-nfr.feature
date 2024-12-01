@AgePrediction
Feature: Predict age based on a given name using Agify.io API.
   As a user of Agify.io,
   I want to validate the non functional requirements,
   So that I can use the API as per allocated quota.

   @nfr 
   Scenario Outline: verify if too many requests handled
      Given I have access to Agify API
      When I send GET requests more that allocated quota
      Then the response status should be <httpStatusCode>
      Examples:
      |   httpStatusCode  |
      |    429            |