import FakeEndpointInterface from "../../../Infrastructure/FakeAPI/Common/FakeEndpointInterface";

export default interface HTTPClientInterface {

  handle(fakeEndpoint: FakeEndpointInterface, data: object): any

}