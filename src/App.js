import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeForm from './Employee';
import NavBar from './Navbar'; // Import the NavBar component

const App = () => {
  return (
    <Router>
      <div>
        {/* Add NavBar component here */}
        <NavBar />

        <div className="my-6 text-center">
          <h2 className="text-2xl font-semibold">Welcome to the Employee Management System</h2>
        </div>

        <Routes>
          {/* Route for the Employee Registration Form */}
          <Route path="/" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
