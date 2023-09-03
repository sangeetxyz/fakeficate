import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/fire";

export const getRandomNamePair = (
  namePairs: { name1: string; name2: string }[],
) => {
  const randomIndex = Math.floor(Math.random() * namePairs.length);
  return namePairs[randomIndex];
};

export const uploadToFirebase = async (
  data: {
    name: string;
    mode: string;
    for: string;
    sex: string;
    date: Date;
  },
  secretCode: string,
) => {
  await setDoc(doc(db, "codes", secretCode), data);
};
