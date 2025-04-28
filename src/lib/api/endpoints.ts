import { API_URL } from "@/constants";

const BASE_URL = API_URL;

const GET_AVAILABLE_SYMBOLS = `${BASE_URL}/api/v1/user/getAvailableGroupSymbols`;

const SEARCH_STOCKS_DATA = `${BASE_URL}/api/v1/stock/fetchHistoricalData`;

const CREATE_ALERT = `${BASE_URL}/api/v1/updateUserPreference`;

const GET_USER_ALERTS = `${BASE_URL}/api/v1/user/getUserPreference`;

export {
  GET_AVAILABLE_SYMBOLS,
  SEARCH_STOCKS_DATA,
  CREATE_ALERT,
  GET_USER_ALERTS,
};
