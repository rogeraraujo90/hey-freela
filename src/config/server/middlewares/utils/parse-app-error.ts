import AppError from "@errors/AppError";

export default function parseAppError(error: AppError) {
  const { code, title, detail } = error;

  return { code, title, detail };
}
