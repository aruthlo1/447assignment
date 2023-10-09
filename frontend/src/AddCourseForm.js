import React, { useState } from 'react';

function AddCourseForm({ onAddCourse }) {
  const [course_title, setcourse_title] = useState('');
  const [instructor, setInstructor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new Course object
    const newCourse = {
      course_title: course_title,
      instructor: instructor,
    };

    // Send the new Course data to the parent component for handling
    onAddCourse(newCourse);

    // Clear the form inputs
    setcourse_title('');
    setInstructor('');
  };

  return (
    <div>
      <h2>Add a New Course</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Course Title:
          <input
            type="text"
            value={course_title}
            onChange={(e) => setcourse_title(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Instructor:
          <input
            type="number"
            value={instructor}
            onChange={(e) => setInstructor(parseInt(e.target.value))}
            required
          />
        </label>
        <br />
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default AddCourseForm;