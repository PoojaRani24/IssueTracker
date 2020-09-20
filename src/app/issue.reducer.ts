import {ActionEx, IssueActionTypes} from './issue.actions';
export const initialState = [];
export function IssueReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case IssueActionTypes.Add:
      //   console.log([...state]);
      //  console.log(action.payload);
      //  console.log([...state,action.payload]);
      return [...state, action.payload]
    case IssueActionTypes.Remove:{
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1)
      ];}
    default:
      return state;
  }
}