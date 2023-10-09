import React, { useState } from 'react';

function UpdateInstructorForm({ instructor, onUpdateInstructor }) {
  const [name, setName] = useState(instructor.name);
  const [courseDepartment, setCourseDepartment] = useState(instructor.course_department);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated instructor object
    const updatedInstructor = {
      id: instructor.id,
      name: name,
      course_department: courseDepartment,
    };

    // Call the parent component's onUpdateInstructor function to update the instructor
    onUpdateInstructor(updatedInstructor);
  };

  return (
    <div>
      <h2>Update Instructor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={instructor.id} readOnly />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Course Department:</label>
          <input type="text" onChange={(e) => setCourseDepartment(e.target.value)} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateInstructorForm;