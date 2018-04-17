import {PredictiveTextInterface} from "../Adapter/PredictiveTextInterface";

export default class PredictiveText implements PredictiveTextInterface {
  private adapter: PredictiveTextInterface;

  constructor(adapter: PredictiveTextInterface) {
    this.adapter = adapter;
  }

  get(request: object): any {
    return this.adapter.get(request);
  }
}