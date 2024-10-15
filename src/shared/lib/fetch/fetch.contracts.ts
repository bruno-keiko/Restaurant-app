import { ZodType } from "zod";
import { FetchValidationError } from "./fetch.validation.error";

export class FetchContracts {
  static responseContract<Data>(schema: ZodType<Data>) {
    return (response: unknown): Data => {
      const validation = schema.safeParse(response);
      if (validation.error) {
        throw new FetchValidationError(validation.error.errors);
      }
      return validation.data;
    };
  }

  static requestContract<Data>(schema: ZodType<Data>, data: unknown) {
    const validation = schema.safeParse(data);

    if (validation.error) {
      throw new FetchValidationError(validation.error.errors);
    }
    return validation.data;
  }
}
