from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS



app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'  # SQLite database for simplicity
db = SQLAlchemy(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Define Student model
class Student(db.Model):
    __tablename__ = 'students'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    credits_earned = db.Column(db.Integer, nullable=False)

# Define Course model
class Course(db.Model):
    __tablename__ = 'courses'
    id = db.Column(db.Integer, primary_key=True)
    course_title = db.Column(db.String(100), nullable=False)
    instructor = db.Column(db.Integer, db.ForeignKey('instructors.id'), nullable=False)


# Define Instructor model
class Instructor(db.Model):
    __tablename__ = 'instructors'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    course_department = db.Column(db.String(100), nullable=False)

# Define Enrollment model for the many-to-many relationship
class Register(db.Model):
    __tablename__ = 'registers'
    id = db.Column(db.Integer, primary_key=True)
    course_id = db.Column(db.Integer, db.ForeignKey('courses.id'), nullable=False)
    student_id = db.Column(db.Integer, db.ForeignKey('students.id'), nullable=False) 

students = [
    {"id": 1, "name": "John Doe", "credits_earned": 60},
    {"id": 2, "name": "Jane Smith", "credits_earned": 45},
    # Add more students here
]

courses = [
    {"id": 1, "course_title": "testcourse", "instructor": 1},
    {"id": 2, "course_title": "secondcourse", "instructor": 2},
]

instructors = [
    {"id": 1, "name": "Tom Quincy", "course_department": "Math"},
    {"id": 2, "name": "Martha Thomas", "course_department": "Chemistry"},
]

# App
# Routes
#Students
@app.route('/students', methods=['GET'])
def get_students():
    return jsonify(students)

@app.route('/students', methods=['POST'])
def add_student():
    new_student = request.get_json()
    counter  = 0
    for student in students:
        counter += 1
    counter += 1
    new_student['id'] = counter
    students.append(new_student)
    return jsonify({"message": "Student added successfully"})

@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    updated_student = request.get_json()
    for student in students:
        if student['id'] == id:
            student.update(updated_student)
            return jsonify({"message": "Student updated successfully"})
    return jsonify({"message": "Student not found"}), 404

@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    for student in students:
        if student['id'] == id:
            students.remove(student)
            return jsonify({"message": "Student deleted successfully"})
    return jsonify({"message": "Student not found"}), 404

#Courses
@app.route('/courses', methods=['GET'])
def get_courses():
    return jsonify(courses)

@app.route('/courses', methods=['POST'])
def add_course():
    new_course = request.get_json()
    counter  = 0
    for course in courses:
        counter += 1
    counter += 1
    new_course['id'] = counter
    courses.append(new_course)
    return jsonify({"message": "Course added successfully"})

@app.route('/courses/<int:id>', methods=['PUT'])
def update_course(id):
    updated_course = request.get_json()
    for course in courses:
        if course['id'] == id:
            course.update(updated_course)
            return jsonify({"message": "Course updated successfully"})
    return jsonify({"message": "Course not found"}), 404

@app.route('/courses/<int:id>', methods=['DELETE'])
def delete_course(id):
    for course in courses:
        if course['id'] == id:
            courses.remove(course)
            return jsonify({"message": "Course deleted successfully"})
    return jsonify({"message": "Course not found"}), 404
#Instructors
@app.route('/instructors', methods=['GET'])
def get_instructors():
    return jsonify(instructors)

@app.route('/instructors', methods=['POST'])
def add_instructor():
    new_instructor = request.get_json()
    counter  = 0
    for instructor in instructors:
        counter += 1
    counter += 1
    new_instructor['id'] = counter
    instructors.append(new_instructor)
    return jsonify({"message": "Instructor added successfully"})

@app.route('/instructors/<int:id>', methods=['PUT'])
def update_instructor(id):
    updated_instructor = request.get_json()
    for instructor in instructors:
        if instructor['id'] == id:
            instructor.update(updated_instructor)
            return jsonify({"message": "Instructor updated successfully"})
    return jsonify({"message": "Instructor not found"}), 404

@app.route('/instructors/<int:id>', methods=['DELETE'])
def delete_instructor(id):
    for instructor in instructors:
        if instructor['id'] == id:
            instructors.remove(instructor)
            return jsonify({"message": "Instructor deleted successfully"})
    return jsonify({"message": "Instructor not found"}), 404

@app.route('/registers', methods=['POST'])
def add_register():
    data = request.get_json()
    course_id = data.get('course_id')
    student_id = data.get('student_id')

    # Check if the course and student exist
    course = Course.query.get(course_id)
    student = Student.query.get(student_id)

    if course and student:
        new_register = Register(course_id=course_id, student_id=student_id)
        db.session.add(new_register)
        db.session.commit()
        return jsonify({"message": "register association added successfully"})
    else:
        return jsonify({"message": "Course or student not found"}), 404
    
@app.route('/registers', methods=['GET'])
def get_registers():
    registers = Register.query.all()
    register_data = [{"id": c.id, "course_id": c.course_id, "student_id": c.student_id} for c in registers]
    return jsonify(register_data)

@app.route('/registers/<int:id>', methods=['DELETE'])
def delete_register(id):
    register_to_delete = Register.query.get(id)

    if register_to_delete:
        db.session.delete(register_to_delete)
        db.session.commit()
        return jsonify({"message": "register association deleted successfully"})
    else:
        return jsonify({"message": "register association not found"}), 404

@app.route('/populate_classes', methods=['GET'])
def populate_classes():
    # Iterate through the test data and create Class instances
    for course_data in courses:
        course_id = course_data['id']  # Assuming each course has an 'id' field
        for student_data in students:
            student_id = student_data['id']  # Assuming each student has an 'id' field
            
            # Create a Class instance and associate the course and student
            new_register = Register(course_id=course_id, student_id=student_id)
            db.session.add(new_register)

    # Commit the session to save the data to the database
    db.session.commit()

    return jsonify({"message": "Test data for classes populated successfully"})


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)