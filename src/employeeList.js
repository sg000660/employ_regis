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
    <div className="p-6 bg-gray-100 min-h-screen">
      <EmployeeForm addEmployee={addEmployee} />

      <h2 className="text-2xl font-semibold text-center my-6">Employee List</h2>

      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees registered yet.</p>
      ) : (
        <table className="min-w-full bg-white border-collapse shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Age</th>
              <th className="px-4 py-2 border-b text-left">Contact</th>
              <th className="px-4 py-2 border-b text-left">Email</th>
              <th className="px-4 py-2 border-b text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{employee.id}</td>
                <td className="px-4 py-2 border-b">{employee.name}</td>
                <td className="px-4 py-2 border-b">{employee.age}</td>
                <td className="px-4 py-2 border-b">{employee.contact}</td>
                <td className="px-4 py-2 border-b">{employee.email}</td>
                <td className="px-4 py-2 border-b">{employee.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeList;
