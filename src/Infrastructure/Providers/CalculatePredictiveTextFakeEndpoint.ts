import RootAPI from "../FakeAPI/Root/RootAPI";

export default class CalculatePredictiveTextFakeEndpoint extends RootAPI {

  get(url: string, data: object): Array<string> {
    return ['text1', 'text2'];
  }

}