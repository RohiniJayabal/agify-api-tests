// import { binding, given, then, when } from "cucumber-tsflow";
// import axios, { AxiosError, AxiosResponse } from "axios";
// import { assert } from "chai";
// import { Utils } from "./utils/utils";
// import { PredictedAge } from "./types/types";

// const instance = axios.create();

// instance.interceptors.request.use((config) => {
//   config.headers["request-startTime"] = process.hrtime();
//   return config;
// });

// instance.interceptors.response.use((response) => {
//   const start = response.config.headers["request-startTime"];
//   const end = process.hrtime(start);
//   const milliseconds = Math.round(end[0] * 1000 + end[1] / 1000000);
//   response.headers["request-duration"] = milliseconds;
//   return response;
// });

// @binding()
// export class AgifyPredictionSteps {
//   agifyApi!: string;
//   agifyApiResponse!: AxiosResponse<PredictedAge, any>;
//   responseStatus!: number;

//   @given(/^I have access to Agify API$/)
//   public initializeAgifyApiCall() {
//     this.agifyApi = "https://api.agify.io/";
//   }

//   @when("I send GET request with valid name as {string}")
//   public async getPredictedAge(name: string) {
//     try {
//       this.agifyApiResponse = await instance.get(
//         `${this.agifyApi}?name=${name}`
//       );
//       this.responseStatus = this.agifyApiResponse.status;
//     } catch (error) {
//       this.handleAxiosError(error);
//     }
//   }

//   @when("I send GET request without name param")
//   public async getPredictedAgeWithoutNameParameter() {
//     try {
//       this.agifyApiResponse = await instance.get(`${this.agifyApi}?`);
//       this.responseStatus = this.agifyApiResponse.status;
//     } catch (error) {
//       this.handleAxiosError(error);
//     }
//   }

//   @then(/^should receive a response with ([^"]*) age$/)
//   public verifyAge(validOrInvalid: string) {
//     switch (validOrInvalid.toLowerCase()) {
//       case "valid":
//         assert.isTrue(Utils.isValidAge(this.agifyApiResponse.data.age));
//         break;
//       case "invalid":
//         assert.isFalse(Utils.isValidAge(this.agifyApiResponse.data.age));
//         break;
//       default:
//         throw new Error(
//           'Invalid feature input. The options are "valid" or "invalid"'
//         );
//     }
//   }

//   @then("the response status should be {int}")
//   public verifyApiResponseStatus(statusCode: number) {
//     assert.equal(this.responseStatus, statusCode);
//   }

//   @then("the API should respond within stipulated time of {int} ms")
//   public verifyApiResponseTimes(expectedMaxResponseTimeInMs: number) {
//     assert.isAtMost(
//       this.agifyApiResponse.headers["request-duration"],
//       expectedMaxResponseTimeInMs
//     );
//   }

//   handleAxiosError(error: any): void {
//     if (axios.isAxiosError(error)) {
//       // Check for Axios-specific errors
//       if (error.response) {
//         this.responseStatus = error.response.status;
//       } else if (error.request) {
//         throw new Error("No response received:", error.request);
//       } else {
//         throw new Error("Error setting up request:" + error.message);
//       }
//     } else {
//       throw new Error("Unexpected error:" + error);
//     }
//   }
// }
