import { Action } from '@ngrx/store';

export enum IssueActionTypes {
  Add = '[Issue Component] Add',
  Remove = '[Issue Component] Remove'
}
export class ActionEx implements Action {
  readonly type;
  payload: any;
}
export class IssueAdd implements ActionEx {
  readonly type = IssueActionTypes.Add;
  constructor(public payload: any) {
  }
}
export class IssueRemove implements ActionEx {
  readonly type = IssueActionTypes.Remove;
  constructor(public payload: any) {
  }
}