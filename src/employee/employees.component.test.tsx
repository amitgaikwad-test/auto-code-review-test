import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';
import EmployeesComponent from './employees.component';
import { Provider } from 'react-redux';
import { employeeReducer } from '../reducers/employee.reducer';

configure({adapter: new Adapter()});


describe('Employee Container', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let sandbox: any;
  const employees =
  {
    employeeReducer :{
      employees :[
        {
          "name": "Amit",
          "company": "Pqr",
          "salary": 1000,
          "email": "a@gmail.com",
          "address": {
            "city": "Kolhapur",
            "state": "Maharashtra",
            "country": "India"
          }
        }
      ]
    }  
  } 
  

  const storeWithNoBalanceData = {
    BetsReducer: {
      betsBalanceData: {},
    },
  };

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should render', () => {
    const store = mockStore(employees);
    const wrapper = mount((
      <Provider store={store}>
        <EmployeesComponent />
      </Provider>
    ));
    expect(wrapper.find(EmployeesComponent)).toHaveLength(1);
  });


  it('props should have value in employees field', () => {
    const store = mockStore(employees);
    const wrapper = mount((
      <Provider store={store}>
        <EmployeesComponent />
      </Provider>
    ));
    expect(wrapper.props().store.getState().employeeReducer.employees).toHaveLength(1);
  });
  
})

