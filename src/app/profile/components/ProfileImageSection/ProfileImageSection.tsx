"use client";

import styles from "./ProfileImageSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import cameraIcon from "@/assets/camera-icon.svg";
import logoutIcon from "@/assets/logout-icon.svg";
import { CSSProperties, useState } from "react";

function ProfileImageSection() {
  const [fullName, setFullName] = useState("John Doe");

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
        <input
          type="text"
          defaultValue={fullName}
          placeholder={"name can't be empty"}
          className={styles.fullNameInput}
          onChange={(e) => setFullName(e.target.value)}
          style={{ "--width": fullName.length + "ch" } as CSSProperties}
        />

        <div className={styles.useridWrapper}>
          <p className={styles.userid}>{"@johndoe123"}</p>
          <Link href={"/"}>
            <Image src={logoutIcon} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default ProfileImageSection;
