import CalculatePredictiveTextAdapterInterface from "./PredictiveTextAdapterInterface";
import CalculatePredictiveTextClientInterface from "../../Client/CalculatePredictiveText/CalculatePredictiveTextClientInterface";

export default class CalculatePredictiveTextAdapter implements CalculatePredictiveTextAdapterInterface {
  private client: CalculatePredictiveTextClientInterface;

  constructor(client: CalculatePredictiveTextClientInterface) {
    this.client = client;
  }

  handle(request: string): any {
    return this.client.handle(request);
  }
}