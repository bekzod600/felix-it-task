import axios from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = "https://zerodevtask-api.onrender.com";

// axiosClient.defaults.headers = {
//   Accept: "application/json",
// };

axiosClient.defaults.timeout = 5000;

export default axiosClient;
