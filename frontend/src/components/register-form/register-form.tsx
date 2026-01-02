"use client";
import { useTokens } from "@/store/token.store";
export default function RegisterForm() {
  const { accessToken, refreshToken, setTokens } = useTokens();
  console.log("Access Token:", accessToken);
  console.log("Refresh Token:", refreshToken);

  return <div>Register Form Component</div>;
}
