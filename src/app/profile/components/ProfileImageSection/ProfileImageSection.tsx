"use client";

import styles from "./ProfileImageSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import cameraIcon from "@/assets/camera-icon.svg";
import logoutIcon from "@/assets/logout-icon.svg";
import { useState } from "react";
import editIcon from "@/assets/edit-icon-2.svg";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/hooks";

function ProfileImageSection() {
  const [fullName, setFullName] = useState("John Doe");
  const router = useRouter();
  const cookie = useCookies();
  const toast = useToast();

  function handleLogout() {
    cookie.remove("auth");
    toast?.show("success", "Logged out successfully", 200);
    router.push("/sign-up");
  }

  return (
    <section className={styles.profileImageSection}>
      <div className={styles.profileImageWrapper}>
        <Image
          src="/user.png"
          width={512}
          height={512}
          alt="default profile logo"
          className={styles.profileImg}
        />
        <button>
          <Image
            src={cameraIcon}
            alt="change profile image icon"
            className={styles.profileCameraIcon}
          />
        </button>
      </div>

      <div className={styles.usernameWrapper}>
        <div className={styles.userName}>
          <span>{fullName}</span>
          <button>
            <Image src={editIcon} alt="" />
          </button>
        </div>

        <div className={styles.useridWrapper}>
          <p className={styles.userid}>{"@johndoe123"}</p>
          <button onClick={handleLogout}>
            <Image src={logoutIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
export default ProfileImageSection;
