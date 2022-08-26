import parseOptionalArrayParam from "../../../../../src/controllers/utils/parse-optional-array-param";
import ParseError from "../../../../../src/errors/ParseError";

describe("### parse-optional-array-params utility ###", () => {
  test("it returns an empty array if the param is undefined", () => {
    const result = parseOptionalArrayParam(undefined);

    expect(result).toStrictEqual([]);
  });

  test("it returns an array containing the single string param", () => {
    const result = parseOptionalArrayParam("hope");

    expect(result).toStrictEqual(["hope"]);
  });

  test("it just returns the same array sent as param", () => {
    const param = ["love"];
    const result = parseOptionalArrayParam(param);

    expect(result).toStrictEqual(param);
  });

  test("it throws an Parse error if param type is not expected", () => {
    expect(() => parseOptionalArrayParam(1)).toThrowError(ParseError);
  });
});
