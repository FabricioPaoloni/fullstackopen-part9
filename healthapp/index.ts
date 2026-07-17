import express from "express";
import { calculateBmi } from "./bmi/bmiCalculator.ts";

const app = express();

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

//GET for BMI
app.get("/bmi", (req, res) => {
  const { height, weight } = req.query;

  //check for height and weight number types (type validation)
  if (!height || typeof height !== "string") {
    throw new Error("la variable height debe ser un número");
    // res.status(500).json({ error: "la variable height debe ser un número" });
  }
  if (!weight || typeof weight !== "string") {
    throw new Error("la variable weight debe ser un número");
    // res.status(500).json({ error: "la variable weight debe ser un número" });
  }
  if (isNaN(parseInt(height))) {
    res.status(500).json({ error: "la variable height debe ser un número" });
  }
  if (isNaN(parseInt(weight))) {
    res.status(500).json({ error: "la variable weight debe ser un número" });
  }
  //validation ends

  const bmiResult = calculateBmi(parseInt(height), parseInt(weight));

  console.log(height, weight, bmiResult);
  res.json({ weight, height, bmi: bmiResult });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
