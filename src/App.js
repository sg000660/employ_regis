import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Employee';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the Employee Management System</h1>
        <Routes>
          {/* Route for the Employee Registration Form */}
          <Route path="/register" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
