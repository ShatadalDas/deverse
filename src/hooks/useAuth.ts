"use client";
import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/hooks";
import axios, { AxiosError } from "axios";

function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();

  const checkAuthToken = useCallback(
    async (signal: AbortSignal) => {
      axios
        .get(`/api/auth?pathname=${pathname.split("/")[1]}`, {
          signal,
          timeout: 1 * 60 * 1000, // 1 min
        })
        .then((res) => {
          console.log("User is authentic!");
          if (
            (res.status !== 202 && pathname === "/sign-up") ||
            pathname === "/login"
          ) {
            toast?.show("info", "Already logged in!", 301);
            router.push("/");
            return;
          }
        })
        .catch((err: AxiosError) => {
          if (err.message === "canceled") return;

          const res = err.response?.data as {
            body?: Record<string, unknown>;
            error?: string;
            status: number;
          };

          if (
            res?.status === 401 &&
            pathname !== "/sign-up" &&
            pathname !== "/login"
          ) {
            toast?.show("error", res?.error || "", 401);
            router.push("/login");
            return;
          }

          console.log(err.message);

          toast?.show(
            "error",
            res?.error || "Internal Server Error",
            res?.status || 500
          );
        });
    },
    [pathname, router, toast]
  );

  useEffect(() => {
    const controller = new AbortController();
    checkAuthToken(controller.signal);

    const intervalId = setInterval(checkAuthToken, 2 * 60 * 1000); // 2 min

    return () => {
      clearInterval(intervalId);
      controller.abort();
    };
  }, [checkAuthToken]);
}

export default useAuth;
