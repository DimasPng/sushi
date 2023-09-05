import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, addDoc } from "firebase/firestore";
import { Meals } from "../types";

export const initializeAPI = () => {
  initializeApp({
    apiKey: "AIzaSyBvi2YUHuKIelq7t49Ii2iLxShvfK_XCt4",
    authDomain: "reactsushi-test.firebaseapp.com",
    projectId: "reactsushi-test",
    storageBucket: "reactsushi-test.appspot.com",
    messagingSenderId: "378084396985",
    appId: "1:378084396985:web:b3fb12436b39e008b4b068",
  });
  getFirestore();
};

export const getMeals = async (): Promise<Meals[]> => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "meals"));
  const meals: Meals[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as Meals;

    meals.push({
      id: doc.id,
      ...data,
    });
  });

  return meals;
};

export const createOrder = async (data: Meals) => {
  const db = getFirestore();

  await addDoc(collection(db, "orders"), data);
};
