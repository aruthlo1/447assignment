import React, { useState, useEffect } from 'react';
import AddStudentForm from './AddStudentForm';
import UpdateStudentForm from './UpdateStudentForm';
import AddCourseForm from './AddCourseForm';
import UpdateCourseForm from './UpdateCourseForm';
import UpdateInstructorForm from './UpdateInstructorForm';
import AddInstructorForm from './AddInstructorForm';
import AddRegisterForm from './AddRegisterForm';

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [registers, setRegisters] = useState([]);

  //BEGIN STUDENTS
  useEffect(() => {
    // Fetch student data from your Flask backendI 
    fetch('http://localhost:5000/students')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddStudent = async (newStudent) => {
    try {
      const response = await fetch('http://localhost:5000/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStudent),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the students list with the new student data received from the backend
      setStudents([...students, data]);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    console.log(`Deleting student with ID: ${studentId}`);
    try {
      const response = await fetch(`http://localhost:5000/students/${studentId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted student from the students list
      setStudents(students.filter((student) => student.id !== studentId));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleUpdateStudent = async (updatedStudent) => {
    try {
      const response = await fetch(`http://localhost:5000/students/${updatedStudent.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedStudent),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the students list with the updated student data
      const updatedStudents = students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      );
      setStudents(updatedStudents);
      setSelectedStudent(null); // Clear the selected student
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };
  //END STUDENTS
  //BEGIN COURSES
  useEffect(() => {
    // Fetch course data from your Flask backendI 
    fetch('http://localhost:5000/courses')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddCourse = async (newCourse) => {
    try {
      const response = await fetch('http://localhost:5000/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the courses list with the new course data received from the backend
      setCourses([...courses, data]);
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleDeleteCourse = async (courseId) => {
    console.log(`Deleting course with ID: ${courseId}`);
    try {
      const response = await fetch(`http://localhost:5000/courses/${courseId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted course from the courses list
      setCourses(courses.filter((course) => course.id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleUpdateCourse = async (updatedCourse) => {
    try {
      const response = await fetch(`http://localhost:5000/courses/${updatedCourse.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCourse),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the courses list with the updated course data
      const updatedCourses = courses.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      );
      setCourses(updatedCourses);
      setSelectedCourse(null); // Clear the selected course
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };
  //END COOURSES
  //BEGIN INSTRUCTORS
  useEffect(() => {
    // Fetch course data from your Flask backendI 
    fetch('http://localhost:5000/instructors')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setInstructors(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddInstructor = async (newInstructor) => {
    try {
      const response = await fetch('http://localhost:5000/instructors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInstructor),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the instructors list with the new instructor data received from the backend
      setInstructors([...instructors, data]);
    } catch (error) {
      console.error('Error adding instructor:', error);
    }
  };

  const handleUpdateInstructor = async (updatedInstructor) => {
    try {
      const response = await fetch(`http://localhost:5000/instructors/${updatedInstructor.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInstructor),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the instructors list with the updated instructor data
      const updatedInstructors = instructors.map((instructor) =>
      instructor.id === updatedInstructor.id ? updatedInstructor : instructor
      );
      setInstructors(updatedInstructors);
      setSelectedInstructor(null); // Clear the selected instructor
    } catch (error) {
      console.error('Error updating instructor:', error);
    }
  };

  const handleDeleteInstructor = async (instructorId) => {
    console.log(`Deleting instructor with ID: ${instructorId}`);
    try {
      const response = await fetch(`http://localhost:5000/instructors/${instructorId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted instructor from the instructors list
      setInstructors(instructors.filter((instructor) => instructor.id !== instructorId));
    } catch (error) {
      console.error('Error deleting instructor:', error);
    }
  };
  //registers
  useEffect(() => {
    // Fetch class data from your Flask backendI 
    fetch('http://localhost:5000/registers')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setRegisters(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddRegister = async (newRegister) => {
    try {
      const response = await fetch('http://localhost:5000/registers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRegister),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Update the students list with the new student data received from the backend
      setRegisters([...registers, data]);
    } catch (error) {
      console.error('Error adding class:', error);
    }
  };

  const handleDeleteRegister = async (registerId) => {
    console.log(`Deleting register association with ID: ${registerId}`);
    try {
      const response = await fetch(`http://localhost:5000/registers/${registerId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Remove the deleted register association from the registers list
      setRegisters(registers.filter((reg) => reg.id !== registerId));
    } catch (error) {
      console.error('Error deleting register association:', error);
    }
  };

  return (
    <div className="App">
      <h1>Student List</h1>
      <AddStudentForm onAddStudent={handleAddStudent} />
      {selectedStudent && (
        <UpdateStudentForm student={selectedStudent} onUpdateStudent={handleUpdateStudent} />
      )}
      <ul>
        {students.map((student) => (
          <li key={student.id} onClick={() => setSelectedStudent(student)}>
            ID: {student.id} - {student.name} - {student.credits_earned} credits &nbsp;&nbsp;
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Course List</h1>
      <AddCourseForm onAddCourse={handleAddCourse} />
      {selectedCourse && (
        <UpdateCourseForm course={selectedCourse} onUpdateCourse={handleUpdateCourse} />
      )}
      <ul>
        {courses.map((course) => (
          <li key={course.id} onClick={() => setSelectedCourse(course)}>
            ID: {course.id} - {course.course_title} &nbsp;&nbsp;
            {instructors.find((instructor) => instructor.id === course.instructor) && (
              <span>
                - Instructor: {instructors.find((instructor) => instructor.id === course.instructor).name}
              </span>
            )}
            <button onClick={() => handleDeleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Instructor List</h1>
      <AddInstructorForm onAddInstructor={handleAddInstructor} />
      {selectedInstructor && (
        <UpdateInstructorForm instructor={selectedInstructor} onUpdateInstructor={handleUpdateInstructor} />
      )}
      <ul>
        {instructors.map((instructor) => (
          <li key={instructor.id} onClick={() => setSelectedInstructor(instructor)}>
            ID: {instructor.id} - {instructor.name} - {instructor.course_department} &nbsp;&nbsp;
            <button onClick={() => handleDeleteInstructor(instructor.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h1>Register List</h1>
      <AddRegisterForm onAddRegister={handleAddRegister} />
      <ul>
        {registers.map((register) => (
          <li key={register.id}>
            {courses.find((course) => course.id === register.course_id) && (
              <span>
              Course: {courses.find((course) => course.id === register.course_id).course_title}
              </span>
            )}
            &nbsp;&nbsp;
            {students.find((student) => student.id === register.student_id) && (
              <span>
              Student: {students.find((student) => student.id === register.student_id).name}
              </span>
            )}
            &nbsp;&nbsp;
            <button onClick={() => handleDeleteRegister(register.id)}>Delete</button>
          </li>
        ))}
      </ul>   
    </div>
  );
}

export default App;
