import { useCallback, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/hooks";
import axios from "axios";

function useAuth() {
  const cookies = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();

  const checkAuthToken = useCallback(async () => {
    const authToken = cookies.get("auth");

    if (!authToken) {
      // User not logged in
      // And trying to access other pages
      if (pathname !== "/sign-up" && pathname !== "/login") {
        toast?.show("error", "Please login first!", 401);
        router.push("/login");
      }
      return;
    }

    // User is logged in
    // And trying to access sign-up and login pages
    if (pathname === "/sign-up" || pathname === "/login") {
      router.push("/");
      return;
    }

    try {
      const res = await axios.get("/api/auth", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (res.status === 200) {
        console.log("User is authentic!");
      } else if (res.data["status"] === 500) {
        toast?.show("error", "Oops, Something went wrong", 500);
      } else {
        console.error("Authentication Error:", res.data["error"]);
        toast?.show(
          "error",
          "Invalid User. Please login again",
          res.data["status"]
        );
        cookies.remove("auth");
        router.push("/login");
      }
    } catch (err: any) {
      console.error("Error fetching auth status:", err.message);
      toast?.show("error", "Internal Server Error", 500);
    }
  }, [cookies, pathname, router, toast]);

  useEffect(() => {
    checkAuthToken();
    
    const intervalId = setInterval(checkAuthToken, 4 * 60 * 1000); // 4 mins

    return () => clearInterval(intervalId);
  }, [checkAuthToken]);
}

export default useAuth;
