import express from "express";
import cors from "cors";
import diagnosesRouter from "./src/routes/diagnosesRoutes.ts";
import patientsRouter from "./src/routes/patientsRoutes.ts";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get("/api/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

//using routers for diagnoses and patients
app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
