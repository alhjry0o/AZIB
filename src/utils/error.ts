// error.ts
export class AppError extends Error {
  constructor(
    public readonly code: string,
    message?: string,
    public readonly cause?: unknown,
  ) {
    super(message ?? code);
    this.name = 'AppError';
  }
}

export function toAppError(e: unknown, fallback = 'UNKNOWN'): AppError {
  if (e instanceof AppError) return e;
  if (e instanceof Error) return new AppError(fallback, e.message, e);
  return new AppError(fallback, undefined, e);
}
