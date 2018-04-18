export default abstract class RootAPI {

  abstract get(url: string, request: object): any;

}