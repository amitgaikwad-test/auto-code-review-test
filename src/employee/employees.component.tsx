import React,{Component} from 'react';
import { IEmployee } from '../models/employee.interface';
import { getEmployees } from '../actions/employee.action';
import { connect } from "react-redux";

type EmployeePropTypes ={
    getEmployees? : any,
    employees : IEmployee[],
    history? : any
}
class EmployeesComponent extends Component<EmployeePropTypes,{}>{
    
    componentDidMount(){
        this.props.getEmployees();
    }

    viewEmployeeDetails(email: string){
        this.props.history.push("/employee/"+email)
    }

    render(){
        const { employees } = this.props;
        return(
            <div>Employees List
                <div>
                    <table className="employeeTbl">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Company</td>
                            <td>Email</td>
                            <td>View</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    {employees &&  employees.map &&  employees.map((employee:IEmployee)=>(
                    <tr  key={employee.email}>
                    <td>{employee.name}</td>
                    <td>{employee.company}</td>
                    <td>{employee.email}</td>
                    <td onClick={()=>{this.viewEmployeeDetails(employee.email)}}>View</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                    ))}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state : any) => ({
    employees : state.employeeReducer.employees
  });

const mapDispatchToProps = (dispatch: any) => ({
    getEmployees: () => dispatch(getEmployees()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesComponent);
