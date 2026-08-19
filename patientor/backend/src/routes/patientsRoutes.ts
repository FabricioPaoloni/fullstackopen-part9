import express, { type Response } from "express";
import type { NonSensitivePatient, NewPatientEntry } from "../types.ts";
import patientService from "../services/patientService.ts";
import parseNewPatientEntry from "../utils.ts";
import { z } from "zod";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatient[]>) => {
  const data = patientService.getNonSensitivePatients();
  res.send(data);
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry: NewPatientEntry = parseNewPatientEntry(req.body);
    const addedPatient = patientService.addPatient(newPatientEntry);
    res.json(addedPatient);
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      res.status(400).send({ error: error.issues });
    } else res.status(400).send({ error: "unknown error" });
  }
});

export default router;
