export default abstract class RootAPI {

  public BASEPATH = '/root';

  abstract get(url: string, request: object): any;

}