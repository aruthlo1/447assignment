import React, { useState } from 'react';

function UpdateCourseForm({ course, onUpdateCourse }) {
  const [course_title, setcourse_title] = useState(course.course_title);
  const [instructor, setinstructor] = useState(course.instructor);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updated Course object
    const updatedCourse = {
      id: course.id,
      course_title: course_title,
      instructor: instructor,
    };

    // Call the parent component's onUpdateCourse function to update the Course
    onUpdateCourse(updatedCourse);
  };

  return (
    <div>
      <h2>Update Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input type="text" value={course.id} readOnly />
        </div>
        <div>
          <label>Course Title:</label>
          <input type="text" onChange={(e) => setcourse_title(e.target.value)} />
        </div>
        <div>
          <label>Instructor:</label>
          <input type="number" onChange={(e) => setinstructor(parseInt(e.target.value))} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateCourseForm;