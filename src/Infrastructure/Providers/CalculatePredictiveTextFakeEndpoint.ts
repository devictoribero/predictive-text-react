import RootAPI from "../FakeAPI/Root/RootAPI";

export default class FakeEndpointTextPrediction extends RootAPI {
  BASEPATH = '/textprediction';

  get(url: string, request: object): Array<string> {
    return ['text1', 'text2'];
  }

}