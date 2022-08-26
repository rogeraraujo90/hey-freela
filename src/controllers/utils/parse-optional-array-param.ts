import ParseError from "@errors/ParseError";

export default function parseOptionalArrayParam(
  param: unknown
): string[] | undefined {
  if (!param) {
    return undefined;
  }

  if (typeof param === "string") {
    return [param];
  }

  if (Array.isArray(param) && param.every((p) => typeof p === "string")) {
    return param;
  }

  throw new ParseError(param);
}
