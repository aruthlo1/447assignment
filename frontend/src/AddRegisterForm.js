import React, { useState } from 'react';

function AddRegisterForm({ onAddRegister }) {
  const [student_id, setStudent] = useState('');
  const [course_id, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    const newRegister = {
      student_id: student_id,
      course_id: course_id,
    };

    // Send the new student data to the parent component for handling
    onAddRegister(newRegister);

    // Clear the form inputs
    setStudent('');
    setCourse('');
  };

  return (
    <div>
      <h2>Add a New Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Student:
          <input
            type="number"
            value={student_id}
            onChange={(e) => setStudent(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="number"
            value={course_id}
            onChange={(e) => setCourse(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default AddRegisterForm;