"use server";

import { cookies } from "next/headers";

const setAuthCookies = async (token: string) => {
  const cookiesStore = await cookies();
  cookiesStore.set("auth", token, {
    httpOnly: true,
  });
};

const getAuthCookies = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.get("auth")?.value;
};

const clearAuthCookies = async () => {
  const cookiesStore = await cookies();
  return cookiesStore.delete("auth");
};

export { setAuthCookies, getAuthCookies, clearAuthCookies };
