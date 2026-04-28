"use strict";
//a function calculateExercises that calculates the average time of daily exercise hours, compares it to the target amount of daily hours and returns an object
const calculateExercises = (userDataArray, target) => {
    //   let returnObject = {};
    let periodLength = userDataArray.length;
    let trainingDays = userDataArray.filter((value) => value > 0).length;
    let average = userDataArray.reduce((acc, value) => acc + value) / periodLength;
    let succes = average >= target;
    let rating = 1;
    switch (true) {
        case average - target <= -0.5:
            rating = 1;
            break;
        case -0.5 < average - target && average - target < 0.5:
            rating = 2;
            break;
        case average - target >= 0.5:
            rating = 3;
    }
    let ratingDescriptionArray = [
        "Not enough, you should try harder",
        "Accomplished, but there is room for improvement",
        "Excelente. Exceeded the expectations!",
    ];
    let returnObject = {
        periodLength: periodLength,
        trainingDays: trainingDays,
        success: succes,
        rating: rating,
        ratingDescription: ratingDescriptionArray[rating - 1],
        target: target,
        average: average,
    };
    return returnObject;
};
console.log(calculateExercises([3, 0, 2, 3, 3, 3, 0], 2));
