import axiosServer from "@/lib/axios-server";

export const setCookie = async (payload: {
  accessToken: string;
  refreshToken: string;
}) => {
  try {
    console.log("Setting cookie with payload:", payload);
    const response = await axiosServer.post("/api/auth", payload);

    return response.data;
  } catch (error) {
    throw error;
  }
};
