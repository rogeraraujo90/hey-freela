import ParseError from "@errors/ParseError";
import AppError from "@errors/AppError";
import ErrorCodes from "../../../src/errors/ErrorCodes";

describe("### ParseError ###", () => {
  test("it has the correct information", () => {
    const error = new ParseError(1);

    expect(error).toBeInstanceOf(AppError);
    expect(error).toEqual(
      expect.objectContaining({
        status: 400,
        code: ErrorCodes.PARSE_ERROR,
        title: "Parse error",
        detail: "Error parsing value 1",
      })
    );
  });
});
