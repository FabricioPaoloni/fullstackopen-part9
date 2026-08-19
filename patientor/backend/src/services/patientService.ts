import patientsData from "../../data/patients.ts";
import type {
  NewPatientEntry,
  NonSensitivePatient,
  Patient,
} from "../types.ts";
import { v1 as uuid } from "uuid";

const getPatients = (): Patient[] => {
  return patientsData;
};

const getNonSensitivePatients = (): NonSensitivePatient[] => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };
  patientsData.push(newPatient);
  console.log(newPatient);
  return newPatient;
};

export default {
  getPatients,
  getNonSensitivePatients,
  addPatient,
};
