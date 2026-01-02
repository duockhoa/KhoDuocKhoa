// lib/axios-proxy.ts (Server-side)
import axios from "axios";

const axiosServer = axios.create({
  baseURL: process.env.NEXT_SERVER_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
  timeout: 12000,
});

export default axiosServer;
