"use client";

import Image from "next/image";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import searchIcon from "@/assets/search-icon.png";

const links = ["explore", "post", "forum", "ask", "profile"];

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={`${styles.navbar} ${pathname === "/profile" ? styles.profileNav : ""}`}>
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
      <ul className={styles.linkWrapper}>
        <li className={styles.searchWrapper}>
          <Image src={searchIcon} alt="" className={styles.searchIcon}/>
          <input type="search" className={styles.searchInput} placeholder="search" />
        </li>

        {links.map((link, i) => {
          if (link === "explore") {
            return (
              <li key={i}>
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
              <li key={i}>
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
              <li key={i}>
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
    </nav>
  );
}
export default Navbar;
