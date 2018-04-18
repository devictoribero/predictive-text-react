import FakeEndpointInterface from "../Common/FakeEndpointInterface";

export default class CalculatePredictiveTextFakeEndpoint implements FakeEndpointInterface {

  handle(data: object): object {
    const recommendations = ['text1', 'text2'];


    return {
      total: recommendations.length,
      data: recommendations,
    }
  }

}