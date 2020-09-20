import {ActionEx, IssueActionTypes} from './issue.actions';
export const initialState = [];
export function IssueReducer(state = initialState, action: ActionEx): Array<any> {
  switch (action.type) {
    case IssueActionTypes.Add:
      return [...state, action.payload];
    case IssueActionTypes.Remove: {
      const issueId = action.payload;
      return state.filter((el) => el.id !== issueId); }
    default:
      return state;
  }
}
