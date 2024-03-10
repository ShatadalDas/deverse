"use client";

import styles from "./BioSection.module.scss";
import Image from "next/image";
import Link from "next/link";

import editIcon from "@/assets/edit-icon-2.svg";

import websiteIcon from "@/assets/website-icon.svg";
import linkedinIcon from "@/assets/linkedin-icon.svg";
import youtubeIcon from "@/assets/youtube-icon.svg";
import resumeFileIcon from "@/assets/resumefile-icon.svg";
import githubIcon from "@/assets/github-icon.svg";
import gitlabIcon from "@/assets/gitlab-icon.svg";
import leetcodeIcon from "@/assets/leetcode-icon.svg";
import codechefIcon from "@/assets/codechef-icon.svg";
import codeforcesIcon from "@/assets/codeforces-icon.svg";
import { useId } from "react";
import { usePathname } from "next/navigation";
import { useUniqueId } from "@/hooks";

const links = [
  [websiteIcon, "johndoe.com", "/"],
  [linkedinIcon, "/john_doe", "/"],
  [youtubeIcon, "@johndoe", "/"],
  [resumeFileIcon, "resume/cv", "/"],
  [githubIcon, "/JohnDoe", "/"],
  [gitlabIcon, "/johnDoe", "/"],
  [leetcodeIcon, "/john_doe", "/"],
  [codechefIcon, "/johndoe", "/"],
  [codeforcesIcon, "/johndoe", "/"],
];

function BioSection() {
  const uniqueId = useUniqueId();
  const pathname = usePathname();

  return (
    <section className={styles.bioSection}>
      <Link href={pathname + "?edit=bio"} className={styles.editIconLink}>
        <Image src={editIcon} alt="" className={styles.editIcon} />
      </Link>
      <p className={styles.bioDes}>
        {
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam nobis, delectus reiciendis at laboriosam quisquam dolor. Cupiditate eos suscipit vitae? Dolore temporibus quod doloremque itaque at omnis, aliquam in vitae nobis excepturi eum provident porro sint adipisci ipsam cum ea dolorum, ipsum et aperiam rem quis facilis quas incidunt. Tenetur?"
        }
      </p>

      <ul className={styles.linksList}>
        {links.map((linkData) => (
          <li key={uniqueId()}>
            <Link href={linkData[2]}>
              <Image src={linkData[0]} alt="" />
              <span>{linkData[1]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default BioSection;
