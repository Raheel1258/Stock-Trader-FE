import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";

const register = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
  return signOut(auth);
};

const getUserAuth = async () => {
  const user = auth.currentUser;
  if (!user) return "";
  const token = await user.getIdToken();
  return token;
};

export { register, login, logout, getUserAuth };
