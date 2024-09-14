import React, { Component } from "react";
import { connect } from "react-redux";
import { getEmployee } from "../actions/employee.action";
import { IEmployee } from "../models/employee.interface";

type EditEmployeesProps = {
  match: any;
  getEmployee?: any;
  employee: IEmployee;
};
class EditEmployeesComponent extends Component<EditEmployeesProps, {}> {
  componentDidMount() {
    this.props.getEmployee(this.props.match.params.id);
    //
  }
  render() {
    let { employee } = this.props;
    employee = employee || {};
    let { address } = employee;
    address = address || {};
    return (
      <div>
        <div>Name : {employee.name}</div>
        <div>Email : {employee.email}</div>
        <div>Company : {employee.company}</div>
        <div>Salary : {employee.salary}</div>
        <div>City : {address.city}</div>
        <div>State : {address.state}</div>
        <div>Country : {address.country}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  employee: state.employeeReducer.employee,
});

const mapDispatchToProps = (dispatch: any) => ({
  getEmployee: (id: string) => dispatch(getEmployee(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditEmployeesComponent);
