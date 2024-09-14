import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React,{ Component } from "react";
import EmployeesComponent  from "./employee/employees.component";
import { AddEmployeesComponent } from "./employee/add-employee.component";
import EditEmployeesComponent from "./employee/employee.edit.component";

export class AppRoutes extends Component<{},{}>{
    render(){
        return(
            <Router>                
            <ul>
                <li>
                    <Link to="/employees">Employees</Link>
                </li>
                <li>
                    <Link to="/employee">Add Employee</Link>
                </li>
            </ul>
            <Route exact path="/" component={EmployeesComponent} />
             <Route path="/employees" component={EmployeesComponent} />
            <Route exact path="/employee" component={AddEmployeesComponent} />
            <Route path="/employee/:id" component={EditEmployeesComponent} /> 
            </Router>   
        )
    }
}