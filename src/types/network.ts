interface NetworkSuccessResponse<T> {
  state: "success";
  data: T;
}

interface NetworkErrorResponse {
  state: "error";
  error: string;
}

type NetworkResponse<T> = NetworkSuccessResponse<T> | NetworkErrorResponse;

export type { NetworkResponse };
