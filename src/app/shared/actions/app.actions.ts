export class SetUserName {
  static readonly type = '[app] set username';
  constructor(public payload: string) {}
}
