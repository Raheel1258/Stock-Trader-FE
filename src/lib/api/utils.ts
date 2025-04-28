"use client";

import { getUserAuth } from "../firebase";

const GET = async <T>(url: string): Promise<T> => {
  const auth = await getUserAuth();
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

const POST = async <T>(url: string, body: object): Promise<T> => {
  const auth = await getUserAuth();
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

export { GET, POST };
