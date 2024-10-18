import { ZodIssue } from "zod";

export class FetchValidationError extends Error {
  static readonly ERR_BAD_VALIDATION = "ERR_BAD_VALIDATION";
  readonly errors: ZodIssue[];

  constructor(errors: ZodIssue[]) {
    super("The following validation errors occurred: \n");
    this.name = FetchValidationError.ERR_BAD_VALIDATION;
    this.errors = errors;
  }
}
