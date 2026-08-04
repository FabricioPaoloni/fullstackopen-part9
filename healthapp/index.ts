import express from "express";
import { calculateBmi } from "./bmi/bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";

const app = express();

app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

//GET for BMI
app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  //check for height and weight number types (type validation)
  if (!height) {
    res.status(400).json({ error: "malformatted parameters" });
  }
  if (!weight) {
    res.status(400).json({ error: "malformatted parameters" });
  }
  if (typeof height !== "string") {
    throw new Error("malformatted parameters");
    // res.status(500).json({ error: "la variable height debe ser un número" });
  }
  if (typeof weight !== "string") {
    throw new Error("malformatted parameters");
    // res.status(500).json({ error: "la variable weight debe ser un número" });
  }
  if (isNaN(parseInt(height))) {
    res.status(400).json({ error: "malformatted parameters" });
  }
  if (isNaN(parseInt(weight))) {
    res.status(400).json({ error: "malformatted parameters" });
  }
  //validation ends
  const heightParsed = parseInt(height);
  const weightParsed = parseInt(weight);

  const bmiResult = calculateBmi(heightParsed, weightParsed);

  // console.log(height, weight, bmiResult);

  res.json({ weight: weightParsed, height: heightParsed, bmi: bmiResult });
});

app.post("/exercises", (req, res) => {
  // console.log(req.body);
  const { daily_exercises, target } = req.body;
  if (!target || !daily_exercises) {
    res.status(400).json({ error: "parameters missing" });
  }

  // console.log(daily_exercises);
  const day1: number | null =
    daily_exercises[0] !== undefined ? Number(daily_exercises[0]) : null;
  const day2: number | null =
    daily_exercises[1] !== undefined ? Number(daily_exercises[1]) : null;
  const day3: number | null =
    daily_exercises[2] !== undefined ? Number(daily_exercises[2]) : null;
  const day4: number | null =
    daily_exercises[3] !== undefined ? Number(daily_exercises[3]) : null;
  const day5: number | null =
    daily_exercises[4] !== undefined ? Number(daily_exercises[4]) : null;
  const day6: number | null =
    daily_exercises[5] !== undefined ? Number(daily_exercises[5]) : null;
  const day7: number | null =
    daily_exercises[6] !== undefined ? Number(daily_exercises[6]) : null;
  const day8: number | null =
    daily_exercises[7] !== undefined ? Number(daily_exercises[7]) : null;

  if (day8 !== null) {
    res.status(400).json({ error: "Too many days for a week :/ Maximun is 7" });
  } else {
    let inputError = false;
    const userArray = [day1, day2, day3, day4, day5, day6, day7, day8];
    //we check for target input first
    if (isNaN(target)) {
      res.status(400).json({ error: "malformatted parameters" });
      //we change this value to print an error if the user introduced wrong values
    }
    // if (target < 0 || target > 12) {
    //   res
    //     .status(400)
    //     .send(
    //       "Target must be between 0 and 12, it represent an average number of training hours per day",
    //     );
    // }
    userArray.map((day) => {
      if (isNaN(Number(day)) || Number(day) > 12) {
        inputError = true;
      }
    });

    if (inputError) {
      res.status(400).json({ error: "malformatted parameters" });
    } else {
      // console.log(userArray);
      const userArrayFiltered = userArray.filter((day) => day !== null);
      if (userArrayFiltered.length === 0) {
        res.status(400).json({ error: "parameters missing" });
      } else {
        res.json(calculateExercises(userArrayFiltered, target));
      }
    }
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
