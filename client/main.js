import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/EmployeeList';


const App = () => {
  return (
    <EmployeeList />
  );
};

// After meteor loads in the browser, render app to the DOM
Meteor.startup(() => {
  // React render call
  ReactDOM.render(<App />, document.querySelector('.container'))
});
