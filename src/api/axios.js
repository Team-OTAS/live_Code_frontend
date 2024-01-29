import axios from "axios";
const BASE_URL = "http://localhost:8000/api";

// let usertoken = localStorage.getItem("token");
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common[
  "Authorization"
] = `Bearer 5|XFtyOJDQVBDknZP2gEWePnhZsS4XgTRP8x8crJK0bc0353a7`;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["X-XSRF-TOKEN"] =
  "eyJpdiI6ImZqendibWo2a3JmSWxreW1HMHplWUE9PSIsInZhbHVlIjoic2NKYzVpcDl0aHZtNlFrNUU2dEpRNVMyclRrc2VqdkZvMm9JSXREQXN5Tm5iUS9OVTBRRzVveVlKNS9XZmVNSHhKVm1zL3Iyd21hTm13YlIyRUJHaUp2OVBEVnVUV3lSRXR5b0pMYnZFV203cnNFTk1JWWhZbTVGZlRnUXBPL1kiLCJtYWMiOiI2ZGJiOWNiM2Q1NGNkZTA1ZjVmNDI5MzY2MzM5NzUzZGI3MTRjOTc1MTE4ZDE1Zjg3ODBjZGU2YjZhMzc4YTI3IiwidGFnIjoiIn0%3D";
// console.warn("user token", usertoken);

export default axios;
