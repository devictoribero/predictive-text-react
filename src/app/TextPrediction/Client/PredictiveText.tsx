import FakeEndpointTextPrediction from "../../../Infrastructure/Providers/FakeEndpointTextPrediction";

export default class PredictiveText {

  constructor(api: FakeEndpointTextPrediction) {
    this.adapter = adapter;
  }

  get(request: object): any {
    return this.adapter.get(request);
  }
}