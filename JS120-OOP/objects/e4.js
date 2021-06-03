// E4 Student:
// My Solution:
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      console.log(`${name} is a ${year} year student`)
    },

    addCourse(course = {}) {
      this.courses.push(course); 
    },

    listCourses() {
      console.log(this.courses);
    }, 

    addNote(code, note) {
      let course = this.courses.filter(course => course.code === code);
      if (Object.keys(this.notes).includes(course[0].name)) {
        this.notes[course[0].name].push(note);
      } else {
        this.notes[course[0].name] = [note];
      }

    },

    updateNote(code, note) {
      let course = this.courses.filter(course => course.code === code);
      this.notes[course[0].name] = [note];
    },

    viewNotes() {
      let keys = Object.keys(this.notes);
      keys.forEach(key => {
        console.log(`${key}: ${this.notes[key].join('; ')}`);
      });
    }
  }
}

// Book Solution:
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

    addCourse: function(course) {
      this.courses.push(course);
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

let foo = createStudent('Foo', '1st');
foo.info();
"Foo is a 1st year student"
foo.listCourses();
// = [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// = [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// = "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

