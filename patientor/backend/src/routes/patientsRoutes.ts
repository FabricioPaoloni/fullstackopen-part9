import express, { type Response } from "express";
import type { NonSensitivePatient } from "../types.ts";
import patientService from "../services/patientService.ts";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  const data = patientService.getNonSensitivePatients();
  res.send(data);
});

router.post("/", (_req, res) => {
  res.send("saving a new patient");
});

export default router;
