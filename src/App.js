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

        <Routes>
          {/* Route for Employee Registration Form */}
          <Route path="/" element={<EmployeeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
