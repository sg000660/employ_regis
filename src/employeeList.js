import React, { useState } from 'react';
import EmployeeForm from './Employee'; // Import EmployeeForm component

const EmployeeList = () => {
  // State to hold the list of employees
  const [employees, setEmployees] = useState([]);

  // Function to add employee to the list
  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <div>
      <EmployeeForm addEmployee={addEmployee} />
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees registered yet.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.age}</td>
                <td>{employee.contact}</td>
                <td>{employee.email}</td>
                <td>{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

// Styling
const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#f4f4f4',
    textAlign: 'left',
    padding: '10px',
  },
  tableRow: {
    textAlign: 'left',
    padding: '10px',
  },
};

export default EmployeeList;
