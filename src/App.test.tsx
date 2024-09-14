import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Examining the syntax of Jest tests', () => {
  it('sums numbers', () => {
      expect(1 + 2).toEqual(3);
      expect(2 + 2).toEqual(4);
   });
});

/* describe('App component', () => {
  it('sums numbers', () => {
    expect(shallow(<App />)).toHaveLength(1)
   });
}); */