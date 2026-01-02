import axios from "@/lib/axios-client";

export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post("/auth/login", {
      employee_code: username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
