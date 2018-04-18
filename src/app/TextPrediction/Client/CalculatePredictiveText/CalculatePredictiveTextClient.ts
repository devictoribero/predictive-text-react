import PredictiveTextClientInterface from "./CalculatePredictiveTextClientInterface";
import HTTPClientInterface from "../../../HTTP/Client/HTTPClientInterface";

export default class CalculatePredictiveTextClient implements PredictiveTextClientInterface {
  protected BASEPATH = '/root';
  private clientHTTP: HTTPClientInterface;

  constructor(clientHTTP: HTTPClientInterface) {
    this.clientHTTP = clientHTTP;
  }

  handle(data: object): any {
    return this.clientHTTP.get('get', data);
  }
}