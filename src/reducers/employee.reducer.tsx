import { ActionsConstants } from "../actions/action.constants";

const initialState = {
  employees: [],
  employee :{}
};


export const employeeReducer = (state = initialState, action: any) => {
  const tempState = Object.assign({}, state);
  switch (action.type) {
    case ActionsConstants.SET_EMPLOYEES:
      tempState.employees = action.payload.data
      return tempState;
    case ActionsConstants.SET_EMPLOYEE:
      tempState.employee = action.payload.data
      return tempState;
    default:
      return tempState;
  }
};

