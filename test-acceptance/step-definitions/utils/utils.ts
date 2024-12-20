import { AxiosResponse } from "axios";
import { isEmpty, isNil } from "lodash";

export class Utils {
  static isValidAge(age: number): boolean {
    return Number.isInteger(age) && age >= 0 && age <= 120;
  }

  static isValidCount(count: number): boolean {
    return Number.isInteger(count) && count >= 0;
  }
}
