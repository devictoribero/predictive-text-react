import CalculatePredictiveTextServiceInterface from "./CalculatePredictiveTextServiceInterface";
import CalculatePredictiveTextAdapterInterface from "../../Adapter/CalculatePredictiveText/PredictiveTextAdapterInterface";

export default class CalculatePredictiveTextService implements CalculatePredictiveTextServiceInterface {
  private adapter: CalculatePredictiveTextAdapterInterface;

  constructor(adapter: CalculatePredictiveTextAdapterInterface) {
    this.adapter = adapter;
  }

  handle(request: object): any {
    return this.adapter.handle(request);
  }
}