import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const EmployeeForm = () => {
  // State to hold form data
  const [employee, setEmployee] = useState({
    id: '',
    name: '',
    age: '',
    contact: '',
    email: '',
    department: '',
  });

  // State to hold the list of employees
  const [employees, setEmployees] = useState([]);

  // State for departments
  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];

  // Hook for navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new employee to the employee list
    setEmployees([...employees, employee]);

    // Reset the form fields
    setEmployee({
      id: '',
      name: '',
      age: '',
      contact: '',
      email: '',
      department: '',
    });

    alert('Employee Registered Successfully!');
    console.log(employee); // You can replace this with an API call
  };

  // Function to filter employees by department
  const filterByDepartment = (department) => {
    return employees.filter((emp) => emp.department === department);
  };

  // Handle the navigation to EmployeeList page
  const navigateToEmployeeList = () => {
    navigate('/employee-list'); // Navigate to the EmployeeList page
  };

  // Handle navigation to Employees by Department page
  const navigateToEmployeesByDepartment = () => {
    navigate('/employees-by-department', { state: { employees } }); // Passing employees data to the new page
  };

  return (
    <div className="max-w-lg mx-auto my-12 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center mb-4">Employee Registration Form</h1>

      {/* Buttons for employee list */}
      <div className="mb-6 text-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
          onClick={navigateToEmployeeList} // On click, navigate to the employee list page
        >
          List of All Employees
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          onClick={navigateToEmployeesByDepartment} // On click, navigate to the employees by department page
        >
          List Employees by Department
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2 font-medium">Employee ID</label>
        <input
          type="text"
          name="id"
          value={employee.id}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="mb-2 font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="mb-2 font-medium">Age</label>
        <input
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="mb-2 font-medium">Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={employee.contact}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        />

        <label className="mb-2 font-medium">Department</label>
        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
          className="mb-4 p-2 border border-gray-300 rounded"
        >
          <option value="">Select Department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-green-500 text-white p-2 rounded cursor-pointer hover:bg-green-600 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
