"use client";
import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/hooks";
import axios, { AxiosError } from "axios";

function useAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();
  const cookies = useCookies();

  const checkAuthToken = useCallback(async (signal: AbortSignal) => {
    // if(!document || !document.cookie) return;

    // const authToken = document.cookie.split("auth=")[1];
    // console.log(document, authToken)

    // if (!authToken) {
    //   // User not logged in
    //   // And trying to access other pages
    //   if (pathname !== "/sign-up" && pathname !== "/login") {
    //     toast?.show("error", "Please login first!", 401);
    //     router.push("/login");
    //   }

    //   return;
    // }

    // User is logged in
    // And trying to access sign-up and login pages

    axios
      .get(`/api/auth?pathname=${pathname.split("/")[1]}`, {
        signal,
        timeout: 2000,
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

        const obj = err.response?.data as {
          body?: Record<string, unknown>;
          error?: string;
          status: number;
        };

        if (
          obj?.status === 401 &&
          pathname !== "/sign-up" &&
          pathname !== "/login"
        ) {
          toast?.show("error", obj?.error || "", 401);
          router.push("/login");
          return;
        }

        console.log(err.message);

        toast?.show(
          "error",
          obj?.error || "Internal Server Error",
          obj?.status || 500
        );
      });
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    checkAuthToken(controller.signal);

    const intervalId = setInterval(checkAuthToken, 2 * 60 * 1000); // 2 min

    return () => {
      clearInterval(intervalId);
      controller.abort();
    };
  }, []);
}

export default useAuth;
