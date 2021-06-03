// E5 School:
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses: function() {
      return this.courses;
    },

    addCourse: function(courseName, courseCode) {
      this.courses.push({name: courseName, code: courseCode});
    },

    addNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote: function(courseCode, note) {
      let course = this.courses.filter(course => {
        return course.code === courseCode;
      })[0];

      if (course) {
        course.note = note;
      }
    },
  };
}


let school = {
  students: [],

  addStudent(name, year) {
    let student;
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      student = createStudent(name, year);
      this.students.push(student);
    } else {
      console.log('Invalid Year');
    }

    return student;
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse(courseName, courseCode);
  },

  addGrade(student, courseName, grade) {
    let course = student.courses.filter(course => course.name === courseName)[0];
    if (course) {
      course['grade'] = grade
    }
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

 courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`= ${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
  
  courseReport: function(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses().filter(course => {
        return course.name === courseName;
      })[0];
    }

    let courseStudents = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    if (courseStudents.length > 0) {
      console.log(`=${courseName} Grades=`);

      let average = courseStudents.reduce((total, student) => {
        console.log(`${student.name} : ${String(student.grade)}`);
        return total + student.grade;
      }, 0) / courseStudents.length;

      console.log('---');
      console.log(`Course Average: ${String(average)}`);
    }
  },
}

let student1 = school.addStudent('foo', '3rd');

school.enrollStudent(student1, 'Math', 101);
school.addGrade(student1, 'Math', 95);
student1.addCourse('Advanced Math', 102);
school.addGrade(student1, 'Advanced Math', 90);
student1.addCourse('Physics', 202);
// school.getReportCard(student1);
// console.log(student1)

let student2 = school.addStudent('bar', '1st');
school.enrollStudent(student2, 'Math', 101);
school.addGrade(student2, 'Math', 91);
// school.getReportCard(student2);
// console.log(student2);

let student3 = school.addStudent('qux', '3rd');
school.enrollStudent(student3, 'Math', 101);
school.addGrade(student3, 'Math', 93);
student3.addCourse('Advanced Math', 102);
school.addGrade(student3, 'Advanced Math', 90);
// school.getReportCard(student3);
// console.log(student3);


school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93
school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90
school.courseReport('Physics');
// = undefined

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
// foo;
// {
//   name: 'foo',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }