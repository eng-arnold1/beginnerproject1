// functions
/* parametised functions
returning functions
*/

/*
function function_name(params) {
    //body of function
}
// function to add two numbers
*/
function add_two_numbers(x, y) {
    const sum = x + y
    console.log(sum);
}

add_two_numbers(4, 6);

//returning functions
function calculate_age() {
    const year_of_birth = 2010;

    const age = 2024 - year_of_birth;

    return `${age} , ${year_of_birth}`;
}
console.log(calculate_age());


// returning functionss with pararmeters
function calculate_student_grade(student_name, student_class, marks) {
    let student_grade = "";

    if (marks > 90) {
        student_grade = "D1"
    } else if (marks > 80 && marks < 90) {
        student_grade = "D2"
    } else {
        student_grade = "NOT A DISTINCTION"
    }

    return `${student_name} of ${student_class} has a ${student_grade}`
}

console.log(calculate_student_grade("Arnold", "Primary seven", 98));


//function with initialised parameters

function grade_student(english_marks = 60, biology_marks = 40) {
    const total_marks = english_marks + biology_marks
    return {
        total_marks,
        english_marks,
        biology_marks
    }
}
console.log(grade_student(70, 90));
console.log(grade_student(65));


//Arrow function alternative
const grade_student_arrow_function = (english_marks = 60, biology_marks = 40) => {
    const total_marks = english_marks + biology_marks
    return {
        total_marks,
        english_marks,
        biology_marks
    }
}
console.log(grade_student(90, 90));




//functions in a function (clojure)

const staff_members_details = () => {
    const teacher_names = ["Jackson", "James"];

    return {
        teacher_names, // More concise way to return an object property with the same name as the variable
    };
};

const teacherList = staff_members_details();
console.log(teacherList.teacher_names);
