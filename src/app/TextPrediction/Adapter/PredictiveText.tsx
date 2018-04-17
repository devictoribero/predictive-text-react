import {PredictiveTextInterface} from "../Client/PredictiveTextInterface";

export default class PredictiveText implements PredictiveTextInterface {
  private client: PredictiveTextInterface;

  constructor(client: PredictiveTextInterface) {
    this.client = client;
  }

  get(request: object): any {
    return this.client.get(request);
  }
}