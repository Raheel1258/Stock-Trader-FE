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

export { setAuthCookies, getAuthCookies };
