// import axios from "axios";
import axios from './../api/axios';
import Cookies from 'js-cookie';

export default async function fetchXsrfToken() {
  try {
    const response = await axios.get("/sanctum/csrf-cookie", {
      withCredentials: true,
    });
    const xsrfToken = Cookies.get("XSRF-TOKEN");
    // // console.log("XSRF TOKEN RESPONSE", response);
    // console.log("XSRF TOKEN", xsrfToken.data);
    return xsrfToken;
  } catch (error) {
    // console.error('Error fetching XSRF token:', error);
    // Handle error appropriately, e.g., throw an error or return a default value
  }
}

// /	"user_name": "S-00000011",
// "password": "LTmISLdz"
