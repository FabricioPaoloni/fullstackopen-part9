import { Gender, type NewPatientEntry } from "./types.ts";
import { z } from "zod";

// //string type guard
// const isString = (text: unknown): text is string => {
//   return typeof text === "string" || text instanceof String;
// };

// //date type guard (javascript implementation)
// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// //gender type guard
// const isGender = (param: string): param is Gender => {
//   return (Object.values(Gender) as string[]).includes(param);
// };

// //name parsing function to ensure it is in the right format (string)
// const parseName = (name: unknown): string => {
//   if (!isString(name) || name === "") {
//     throw new Error("Incorrect or missing name");
//   }
//   return name;
// };

// //date parsing function to ensure it is in the right format (a string in the format "YYYY-MM-DD")
// const parseDate = (date: unknown): string => {
//   if (!isString(date) || !isDate(date)) {
//     throw new Error("Date missing or date format is invalid:" + date);
//   }
//   return date;
// };

// //ssn parsing function to ensure it is a string
// const parseSsn = (ssn: unknown): string => {
//   if (!isString(ssn) || ssn === "") {
//     throw new Error("ssn missing or incorrect format:" + ssn);
//   }
//   return ssn;
// };

// //gender parsing function to ensure it is a valid key from Gender type (const)
// const parseGender = (gender: unknown): Gender => {
//   if (!isString(gender) || !isGender(gender)) {
//     throw new Error("gender missing or gender incorrect type:" + gender);
//   }
//   return gender;
// };

// //occupation parsing function to ensure it is a string
// const parseOccupation = (occupation: unknown): string => {
//   if (!isString(occupation) || occupation === "") {
//     throw new Error("Occupation missing or incorrect type");
//   }
//   return occupation;
// };

const NewPatientSchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string(),
});

const parseNewPatientEntry = (object: unknown): NewPatientEntry => {
  //object type narrowing
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data in object");
  }

  //warranting object has the right properties
  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    // const newPatientEntry: NewPatientEntry = {
    //   name: parseName(object.name),
    //   dateOfBirth: parseDate(object.dateOfBirth),
    //   ssn: parseSsn(object.ssn),
    //   gender: parseGender(object.gender),
    //   occupation: parseOccupation(object.occupation),
    // };
    return NewPatientSchema.parse(object);
  }
  throw new Error("Incorrect data: some fields are missing");
};

export default parseNewPatientEntry;
