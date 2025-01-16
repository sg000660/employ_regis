import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Employee';
import EmployeeList from './employeeList';  // Import EmployeeList component
import NavBar from './Navbar'; // Import the NavBar component

const App = () => {
  return (
    <Router>
      <div>
        {/* Add NavBar component here */}
        <NavBar />

        <Routes>
          {/* Route for the Employee Registration Form */}
          <Route path="/" element={<EmployeeForm />} />
          
          {/* Route for the Employee List */}
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
