// takes an array as an argument so need a parameter and
// returns 10 times the array length for 10 minutes per exercise
function calculateWorkoutLength(arr) {
    return arr.length * 10;
}

// takes two arguments an array and a number of exercises and
// returns a new array generated with random exercises based on
// the number passed into the parameter
function generateRandomExercises(arr, exNum) {
    const randomExercises = [];
    //generates a random value out of an array ***
    for (let i = 0; i < exNum; i++) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        randomExercises.push(arr[randomIndex]);
    }
    return randomExercises;
}