import axios from "axios";
// import { TextEncoder } from "util";
// global.TextEncoder = TextEncoder;

const apiURL =
  // "http://cc-surgical-center-information-api.azr-hml02.dasaexp.io/v1/";
  "http://localhost:3002/v1/";

const baseApi = axios.create({
  baseURL: apiURL,
});

export default baseApi;
