//a function calculateExercises that calculates the average time of daily exercise hours, compares it to the target amount of daily hours and returns an object

interface returnObjectFormat {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

export const calculateExercises = (
  userDataArray: number[],
  target: number,
): returnObjectFormat => {
  //   let returnObject = {};
  // console.log(userDataArray);
  const periodLength = userDataArray.length;
  const trainingDays = userDataArray.filter((value) => value > 0).length;
  const average =
    userDataArray.reduce((acc, value) => acc + value) / periodLength;

  const succes = average >= target;
  let rating: number = 1;
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
  const ratingDescriptionArray = [
    "Not enough, you should try harder",
    "Accomplished, but there is room for improvement",
    "Excelente. Exceeded the expectations!",
  ];
  const returnObject = {
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

if (process.argv[1] === import.meta.filename) {
  //like in the example, the first argument is the target
  const target: number = Number(process.argv[2]);
  const day1: number | null = process.argv[3] ? Number(process.argv[3]) : null;
  const day2: number | null = process.argv[4] ? Number(process.argv[4]) : null;
  const day3: number | null = process.argv[5] ? Number(process.argv[5]) : null;
  const day4: number | null = process.argv[6] ? Number(process.argv[6]) : null;
  const day5: number | null = process.argv[7] ? Number(process.argv[7]) : null;
  const day6: number | null = process.argv[8] ? Number(process.argv[8]) : null;
  const day7: number | null = process.argv[9] ? Number(process.argv[9]) : null;
  const day8: number | null = process.argv[10]
    ? Number(process.argv[10])
    : null;

  if (day8 !== null) {
    console.log("Too many days for a week :/ Maximun is 7");
  } else {
    let inputError = false;
    const userArray = [day1, day2, day3, day4, day5, day6, day7, day8];
    //we check for target input first
    if (isNaN(target)) {
      inputError = true;
      //we change this value to print an error if the user introduced wrong values
    }
    userArray.map((day) => {
      if (isNaN(Number(day)) || Number(day) > 7) {
        inputError = true;
      }
    });
    //we could improve the validations warranting that the number of hours don't exceed some logical number like 8 or 12 hours of training at most. I'll leave that for later
    if (inputError) {
      console.log("Data introduced is wrong, only numbers are accepted");
    } else {
      const userArrayFiltered = userArray.filter((day) => day !== null);
      if (userArrayFiltered.length === 0) {
        console.log(
          "No training days passed. Introduce at least information for day1, introduce 0 if you want to express 0 hours of training that day or any day.",
        );
      } else {
        console.log(calculateExercises(userArrayFiltered, target));
      }
    }
  }
}
