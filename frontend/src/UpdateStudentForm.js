import React, { useState } from 'react';

function UpdateStudentForm({ student, onUpdateStudent }) {
  const [name, setName] = useState(student.name);
  const [creditsEarned, setCreditsEarned] = useState(student.credits_earned);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated student object
    const updatedStudent = {
      id: student.id,
      name: name,
      credits_earned: creditsEarned,
    };

    // Call the parent component's onUpdateStudent function to update the student
    onUpdateStudent(updatedStudent);
  };

  return (
    <div>
      <h2>Update Student</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={student.id} readOnly />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Credits Earned:</label>
          <input type="number" onChange={(e) => setCreditsEarned(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateStudentForm;