const GET = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

const POST = async <T>(url: string, body: object): Promise<T> => {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Something went wrong");
  return data;
};

export { GET, POST };
