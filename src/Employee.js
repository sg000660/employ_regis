import React, { useState } from 'react';

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

  // State for departments
  const departments = ['HR', 'Engineering', 'Sales', 'Marketing'];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission (you can connect it to an API to submit the data)
    alert('Employee Registered Successfully!');
    console.log(employee); // You can replace this with an API call
  };

  return (
    <div style={styles.container}>
      <h1>Employee Registration Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Employee ID</label>
        <input
          type="text"
          name="id"
          value={employee.id}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={employee.age}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Contact Number</label>
        <input
          type="tel"
          name="contact"
          value={employee.contact}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label>Department</label>
        <select
          name="department"
          value={employee.department}
          onChange={handleChange}
          required
          style={styles.input}
        >
          <option value="">Select Department</option>
          {departments.map((department, index) => (
            <option key={index} value={department}>
              {department}
            </option>
          ))}
        </select>

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

// Styling
const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#28a745',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default EmployeeForm;
