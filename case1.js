// database of students and their grades - array of objects
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
  { name: "David", grade: 95 },
  { name: "Eve", grade: 88 },
  { name: "Frank", grade: 70 },
  { name: "Grace", grade: 82 },
  { name: "Hannah", grade: 90 },
  { name: "Ian", grade: 76 },
  { name: "Jack", grade: 89 },
  { name: "Karen", grade: 94 },
  { name: "Leo", grade: 80 },
  { name: "Mia", grade: 91 },
  { name: "Nina", grade: 87 },
];

// function grading early return
function getGrade(name,grade) {
    if (grade >= 90) {
        console.log(`${name} has an A grade.`);
        return;
    } 
    
    if (grade >= 80) {
        console.log(`${name} has a B grade.`);
        return;

    } 
    
    if (grade >= 70) {
        console.log(`${name} has a C grade.`);
        return;
    } 
    
    if (grade >= 60) {
        console.log(`${name} has a D grade.`);
        return;
    } 
    
    if (grade < 60) {
        console.log(`${name} has an F grade.`);
        return;
    } 
    
    if (grade < 0 || grade > 100) {
        console.log(`${name} has an invalid grade.`);
        return;
    }
}

// looping for each
students.forEach((student) => {
    getGrade(student.name, student.grade);
})