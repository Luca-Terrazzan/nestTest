/**
 * User dto
 *
 * @export
 * @class User
 */
export class User {
  /**
   * User name
   *
   * @private
   * @type {string}
   * @memberof User
   */
  private readonly name: string;

  constructor(name: string) {
    this.name = name;
  }
}
