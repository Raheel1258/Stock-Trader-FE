import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export { register };
