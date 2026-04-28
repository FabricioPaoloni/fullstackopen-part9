//this program accepts 2 parameters, the frist one is for the height, the second for the weight. Both must be numbers.

const calculateBmi = (altura: number, peso: number) => {
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
    default:
      return "Error, try again";
  }
};

const altura: number = Number(process.argv[2]);
const peso: number = Number(process.argv[3]);

if (isNaN(altura) || isNaN(peso)) {
  console.log("Wrong input, height and weight must be numbers");
} else {
  console.log(calculateBmi(altura, peso));
}
