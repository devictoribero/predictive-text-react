import RootAPIInterface from "./RootAPIInterface";

export default abstract class RootAPI implements RootAPIInterface {
  public BASEPATH = '/root';

  abstract get(url: string, request: object): string;

}