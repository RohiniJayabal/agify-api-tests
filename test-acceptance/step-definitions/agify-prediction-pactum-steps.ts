import { binding, given, then, when } from "cucumber-tsflow";
import { spec, expect } from "pactum";
import { assert } from "chai";
import { Utils } from "./utils/utils";

@binding()
export class AgifyPredictionPactumSteps {
  private agifyApi!: string;
  private agifyApiResponse: any;
  responseStatus!: number;

  @given(/^I have access to Agify API$/)
  public initializeAgifyApiCall() {
    this.agifyApi = "https://api.agify.io/";
  }

  @when("I send GET request with valid name as {string}")
  public async getPredictedAge(name: string) {
    const apiUrl = `${this.agifyApi}?name=${name}`;
    this.agifyApiResponse = await spec().get(apiUrl).useLogLevel("ERROR");
  }

  @when(
    "I send GET requests more that allocated quota",
    "Too many requests",
    20000
  )
  public async sendRequestsBeyondQuota() {
    const apiUrl = `${this.agifyApi}?name=billybob`;
    for (let i = 0; i < 20; i++) {
      try {
        this.agifyApiResponse = await spec().get(apiUrl).useLogLevel("ERROR");
      } catch (error) {
        // Do nothing
      }
    }
  }

  @when("I send GET request without name param")
  public async getPredictedAgeWithoutNameParameter() {
    const apiUrl = `${this.agifyApi}?`;
    this.agifyApiResponse = await spec().get(apiUrl).useLogLevel("ERROR");
  }

  @then("the response status should be {int}")
  public verifyApiResponseStatus(statusCode: number) {
    expect(this.agifyApiResponse, spec).should.have.status(statusCode);
  }

  @then("should receive a response with predicted age")
  public verifyAge() {
    assert.isTrue(Utils.isValidAge(this.agifyApiResponse.body?.age));
  }

  @then("should receive a response with no predicted age")
  public verifyNoPredictedAge() {
    assert.isNull(this.agifyApiResponse.body?.age);
  }

  @then("the response should include a count of occurrences")
  public verifyNameCount() {
    assert.isAbove(this.agifyApiResponse.body?.count, 0);
  }

  @then("the response should include a count of 0")
  public verifyNoOccuranceOfName() {
    assert.equal(this.agifyApiResponse.body?.count, 0);
  }

  @then("the API should respond within stipulated time of {int} ms")
  public verifyApiResponseTimes(expectedMaxResponseTimeInMs: number) {
    expect(this.agifyApiResponse, spec).should.have.responseTimeLessThan(
      expectedMaxResponseTimeInMs
    );
  }
}
