let studentsName = ['Araf', 'Jamal', 'Kamal', 'Rofiq', 'Sakil', 'Roxi', 'Sohel', 'Juel', 'Araf', 'Kamal', 'Roxi'];

function makeUnique(giveArray) {
    let uniqueStudentName = [];

    for (let x = 0; x < giveArray.length; x++) {
        let studentName = giveArray[x];

        if (uniqueStudentName.includes(studentName) === false) {
            uniqueStudentName.push(studentName);
        }
    }
    return uniqueStudentName;
}

let result = makeUnique(studentsName);
console.log(result);

