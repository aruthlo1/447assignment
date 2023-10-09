import React, { useState } from 'react';

function AddInstructorForm({ onAddInstructor }) {
  const [name, setName] = useState('');
  const [courseDepartment, setCourseDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new instructor object
    const newInstructor = {
      name: name,
      course_department: courseDepartment,
    };

    // Send the new instructor data to the parent component for handling
    onAddInstructor(newInstructor);

    // Clear the form inputs
    setName('');
    setCourseDepartment('');
  };

  return (
    <div>
      <h2>Add a New Instructor</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Course Department:
          <input
            type="text"
            value={courseDepartment}
            onChange={(e) => setCourseDepartment(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Instructor</button>
      </form>
    </div>
  );
}

export default AddInstructorForm;