"use client";

import { useEffect, useState } from "react";
import axiosClient from "@/lib/axios-client";

type User = {
  id: number;
  employee_code: string;
  name: string;
  department: string;
  position: string;
  email: string;
  avatar: string;
  phoneNumber: string;
  password: string | null;
  sex: string;
  createAt: string;
  updateAt: string;
};

type GetMeProps = {
  userId: number;
  onUnauthorized?: () => void;
  onMismatch?: (actualId: number) => void;
};

export default function GetMe({
  userId,
  onUnauthorized,
  onMismatch,
}: GetMeProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "ok" | "unauthorized" | "mismatch" | "error"
  >("idle");
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const run = async () => {
      setStatus("loading");
      setErrorMessage(null);
      try {
        const response = await axiosClient.get<{ result: User }>(
          `/users/${userId}`
        );
        const result = response.data?.result;
        if (!result) {
          throw new Error("Missing user data");
        }

        if (result.id !== userId) {
          if (!isMounted) return;
          setUser(result);
          setStatus("mismatch");
          onMismatch?.(result.id);
          return;
        }

        if (!isMounted) return;
        setUser(result);
        setStatus("ok");
      } catch (error: any) {
        const status = error?.response?.status;
        if (!isMounted) return;
        if (status === 401 || status === 403) {
          setStatus("unauthorized");
          onUnauthorized?.();
          return;
        }
        setStatus("error");
        setErrorMessage(error?.message ?? "Failed to load user");
      }
    };

    run();

    return () => {
      isMounted = false;
    };
  }, [userId, onMismatch, onUnauthorized]);

  if (status === "loading" || status === "idle") {
    return <div>Loading user...</div>;
  }

  if (status === "unauthorized") {
    return <div>Unauthorized</div>;
  }

  if (status === "mismatch") {
    return <div>User mismatch</div>;
  }

  if (status === "error") {
    return <div>{errorMessage ?? "Error"}</div>;
  }

  return (
    <div>
      <div>Verified user</div>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </div>
  );
}
