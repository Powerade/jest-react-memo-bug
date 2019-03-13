import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@babel/polyfill';

Enzyme.configure({ adapter: new Adapter() });


describe('App', () => {
  test('should render My App', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
