import ParseError from "@errors/ParseError";

export default function parseOptionalArrayParam(param: unknown): string[] {
  if (!param) {
    return [];
  }

  if (typeof param === "string") {
    return [param];
  }

  if (Array.isArray(param)) {
    return param;
  }

  throw new ParseError(param);
}
