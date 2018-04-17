import RootAPI from "../FakeAPI/Root/RootAPI";

export default class FakeEndpointTextPrediction extends RootAPI {
  private path = '/predictiveText';

  get(url: string, request: object): string {
    return '';
  }

}