import HTTPClientInterface from "./HTTPClientInterface";
import FakeEndpointInterface from "../../../Infrastructure/FakeAPI/Common/FakeEndpointInterface";

export default class HTTPClient implements HTTPClientInterface {

  handle(fakeEndpoint: FakeEndpointInterface, data: string): any {
    return fakeEndpoint.handle(data)
  }

}