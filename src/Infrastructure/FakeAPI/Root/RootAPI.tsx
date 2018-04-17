import RootAPIInterface from "./RootAPIInterface";

export default abstract class RootAPI implements RootAPIInterface {
  protected BASEPATH = '/root';

  constructor(BASEPATH: string) {
    this.BASEPATH = BASEPATH;
  }

  abstract get(url: string, request: object): string;

}