import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [creditsEarned, setCreditsEarned] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new student object
    const newStudent = {
      name: name,
      credits_earned: creditsEarned,
    };

    // Send the new student data to the parent component for handling
    onAddStudent(newStudent);

    // Clear the form inputs
    setName('');
    setCreditsEarned('');
  };

  return (
    <div>
      <h2>Add a New Student</h2>
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
          Credits Earned:
          <input
            type="number"
            value={creditsEarned}
            onChange={(e) => setCreditsEarned(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudentForm;