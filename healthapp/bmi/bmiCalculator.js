"use strict";
const calculateBmi = (altura, peso) => {
    let bmi = peso / (altura / 100) ** 2;
    //   console.log(bmi);
    switch (true) {
        case bmi < 18.5:
            return "Underweight range";
        case bmi >= 18.5 && bmi < 24.9:
            return "Normal range";
        case bmi >= 24.9 && bmi < 29.9:
            return "Overweight range";
        case bmi >= 29.9:
            return "Obese range";
    }
};
console.log(calculateBmi(180, 74));
