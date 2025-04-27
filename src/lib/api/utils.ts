const GET = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const POST = async <T>(url: string, body: object): Promise<T> => {
  const response = await fetch(url, {
    body: JSON.stringify(body),
    method: "POST",
  });
  const data = await response.json();
  return data;
};

export { GET, POST };
