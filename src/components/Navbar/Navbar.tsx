"use client";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import searchIcon from "@/assets/search-icon.png";
import { useToast, useUniqueId } from "@/hooks";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import axios, { AxiosError } from "axios";

const links = ["explore", "post", "forum", "ask", "profile"];

function Navbar() {
  const uniqueId = useUniqueId();
  const cookies = useCookies();
  const router = useRouter();
  const pathname = usePathname();
  const toast = useToast();

  useEffect(() => {
    function checkAuthToken() {
      const authToken = cookies.get("auth");

      if (!authToken && pathname !== "/sign-up" && pathname !== "/login") {
        toast?.show("error", "Please login first!", 401);
        router.push("/login");
        return;
      }

      if (authToken && (pathname === "/sign-up" || pathname === "/login")) {
        router.push("/");
        return;
      }

      if (authToken) {
        axios
          .get("/api/auth", {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then((res) => {
            if (res.data["status"] === 503) {
              console.log(res.data);
              toast?.show("error", "Database Error", 503);
              return;
            } else if (res.data["status"] === 500) {
              console.log(res.data);
              toast?.show("error", "Oops, Something went wrong!", 500);
              return;
            } else if (res.data["status"] !== 200) {
              toast?.show(
                "error",
                "Invalid User, PLease login again",
                res.data["status"]
              );
              cookies.remove("auth");
              router.push("/login");
            }
          })
          .catch((e: AxiosError) => {
            console.log("error: ", e.message);
            toast?.show("error", "Internal Server Error", 500);
          });
      }
    }
    checkAuthToken();

    const intervalId = setInterval(() => {
      checkAuthToken();
    }, 4 * 60 * 1000); // 4 mins

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        pathname === "/profile" ? styles.profileNav : ""
      } ${
        pathname === "/sign-up" || pathname === "/login" ? styles.middleNav : ""
      }`}
    >
      <h1 className={styles.logoWrapper}>
        <Image
          className={styles.logoImage}
          src="/logo.webp"
          width={236}
          height={336}
          alt="deverse logo"
          priority
        />
        <p className={styles.logoText}>Deverse</p>
      </h1>
      {pathname === "/sign-up" || pathname === "/login" ? (
        <></>
      ) : (
        <ul className={styles.linkWrapper}>
          <li className={styles.searchWrapper}>
            <Image src={searchIcon} alt="" className={styles.searchIcon} />
            <input
              type="search"
              className={styles.searchInput}
              placeholder="search"
            />
          </li>

          {links.map((link, i) => {
            if (link === "explore") {
              return (
                <li key={uniqueId()}>
                  <Link
                    href="/"
                    className={`${styles.linkText} ${
                      pathname === "/" ? styles.linkActive : ""
                    }`}
                  >
                    explore
                  </Link>
                </li>
              );
            } else if (link === "profile") {
              return (
                <li key={uniqueId()}>
                  <Link href="/profile">
                    <Image
                      src="/user.png"
                      width={512}
                      height={512}
                      alt="default profile logo"
                      className={`${styles.defaultProfileLogo} ${
                        pathname === "/profile" ? styles.profileActive : ""
                      }`}
                    />
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={uniqueId()}>
                  <Link
                    href={"/" + link}
                    className={`${styles.linkText} ${
                      pathname === "/" + link ? styles.linkActive : ""
                    }`}
                  >
                    {link}
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      )}
    </nav>
  );
}
export default Navbar;
