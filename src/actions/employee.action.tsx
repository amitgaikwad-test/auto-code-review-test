import { ActionsConstants } from "./action.constants";
import { IEmployee } from "../models/employee.interface";
import axios from "axios";
//import { Dispatch } from "react";

export function setEmployees(employees : IEmployee[]) {
    return {
        type: ActionsConstants.SET_EMPLOYEES,
        payload: employees,
    }
}

export function setEmployee(employee : IEmployee) {
    return {
        type: ActionsConstants.SET_EMPLOYEE,
        payload: employee,
    }
}



export function getEmployees(){
    return (dispatch: any)=>{
        axios.get('http://demo0116564.mockable.io/employees').then((response : any)=>{
             dispatch(setEmployees(response as IEmployee[]));
        })
    }
}

export function getEmployee(id: string){
    return (dispatch: any)=>{
        axios.get('http://demo0116564.mockable.io/employee/1').then((response : any)=>{
             dispatch(setEmployee(response as IEmployee));
        })
    }
}

