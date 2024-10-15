import { FetchContracts } from "@/shared/lib/fetch";
import api from "..";
import { DishesParamsDto } from "./dish.types";
import { DishesDtoSchema } from "./dish.contracts";

export class DishService {
  static async getDishes(params: DishesParamsDto) {
    const parameters = new URLSearchParams(
      Object.entries(params).map(([key, value]) => [key, String(value)]),
    );
    const response = await api
      .get("/dish" + "?" + parameters.toString())
      .then((res) => FetchContracts.responseContract(DishesDtoSchema)(res));
    console.log("RESPONSE", response);
    return response;
  }
}
