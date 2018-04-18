import FakeEndpointInterface from "../Common/FakeEndpointInterface";

export default class CalculatePredictiveTextFakeEndpoint implements FakeEndpointInterface {

  handle(data: object): Array<string> {
    return ['text1', 'text2'];
  }

}