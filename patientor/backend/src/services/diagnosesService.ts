import diagnosesData from "../../data/diagnoses.ts";
import type { Diagnosis } from "../types.ts";

const getDiagnoses = (): Diagnosis[] => {
  return diagnosesData;
};

const addDiagnosis = () => {
  return null;
};

export default {
  getDiagnoses,
  addDiagnosis,
};
