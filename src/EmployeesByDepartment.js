import React, { useState, useEffect } from 'react';

const EmployeesByDepartment = ({ employees }) => {
  // Group employees by department
  const groupByDepartment = (employees) => {
    return employees.reduce((acc, employee) => {
      const { department } = employee;
      if (!acc[department]) {
        acc[department] = [];
      }
      acc[department].push(employee);
      return acc;
    }, {});
  };

  const groupedEmployees = groupByDepartment(employees);

  return (
    <div>
      <h2>Employees by Department</h2>
      {Object.keys(groupedEmployees).length === 0 ? (
        <p>No employees to display</p>
      ) : (
        Object.keys(groupedEmployees).map((department) => (
          <div key={department}>
            <h3>{department}</h3>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Contact</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {groupedEmployees[department].map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.contact}</td>
                    <td>{employee.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
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

export default EmployeesByDepartment;
