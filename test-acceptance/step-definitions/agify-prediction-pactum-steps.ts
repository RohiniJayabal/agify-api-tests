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

  @when("I send GET request without name param")
  public async getPredictedAgeWithoutNameParameter() {
    const apiUrl = `${this.agifyApi}?`;
    this.agifyApiResponse = await spec().get(apiUrl).useLogLevel("ERROR");
  }

  @then("the response status should be {int}")
  public verifyApiResponseStatus(statusCode: number) {
    expect(this.agifyApiResponse, spec).should.have.status(statusCode);
  }

  @then(/^should receive a response with ([^"]*) age$/)
  public verifyAge(validOrInvalid: string) {
    switch (validOrInvalid.toLowerCase()) {
      case "valid":
        assert.isTrue(Utils.isValidAge(this.agifyApiResponse.body?.age));
        break;
      case "invalid":
        assert.isFalse(Utils.isValidAge(this.agifyApiResponse.body?.age));
        break;
      default:
        throw new Error(
          'Invalid feature input. The options are "valid" or "invalid"'
        );
    }
  }

  @then("the API should respond within stipulated time of {int} ms")
  public verifyApiResponseTimes(expectedMaxResponseTimeInMs: number) {
    expect(this.agifyApiResponse, spec).should.have.responseTimeLessThan(
      expectedMaxResponseTimeInMs
    );
  }
}
