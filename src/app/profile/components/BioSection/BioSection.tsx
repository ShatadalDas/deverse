import Image from "next/image";
import styles from "./BioSection.module.scss";
import Link from "next/link";
import internetIcon from "@/assets/internet-icon.svg";
import linkedinIcon from "@/assets/linkedin-icon.png";
import youtubeIcon from "@/assets/youtube-icon.svg";
import fileIcon from "@/assets/file-icon.svg";
import githubIcon from "@/assets/github-icon.svg";
import gitlabIcon from "@/assets/gitlab-icon.svg";
import leetcodeIcon from "@/assets/leetcode-icon.svg";
import codechefIcon from "@/assets/codechef-icon.svg";
import codeforcesIcon from "@/assets/codeforces-icon.svg";

type Props = {
  description: string;
  personalWebsiteLink: string;
  linkedInUsername: string;
  youtubeUsername: `@${string}`;
  resumeLink: `https://${string}`;
  githubUsername: string;
  gitlabUsername: string;
  leetCodeUsername: string;
  codeChefUsername: string;
  codeForcesUsername: string;
};

function BioSection({
  description,
  personalWebsiteLink,
  linkedInUsername,
  youtubeUsername,
  resumeLink,
  githubUsername,
  gitlabUsername,
  leetCodeUsername,
  codeChefUsername,
  codeForcesUsername,
}: Props) {
  return (
    <div>
      <p>{description}</p>

      
      <ul>
        <Link href={`https://${personalWebsiteLink}`} target="_blank">
          <li>
            <Image src={internetIcon} alt="" />
            <p>{personalWebsiteLink}</p>
          </li>
        </Link>
        <Link href={generateLinkedInLink(linkedInUsername)} target="_blank">
          <li>
            <Image src={linkedinIcon} alt="" />
            <p>{"/" + linkedInUsername}</p>
          </li>
        </Link>
        <Link href={generateYoutubeLink(youtubeUsername)} target="_blank">
          <li>
            <Image src={youtubeIcon} alt="" />
            <p>{youtubeUsername}</p>
          </li>
        </Link>

        <Link href={resumeLink} target="_blank">
          <li>
            <Image src={fileIcon} alt="" />
            <p>Resume</p>
          </li>
        </Link>
        <Link href={generateGithubLink(githubUsername)} target="_blank">
          <li>
            <Image src={githubIcon} alt="" />
            <p>{"/" + githubUsername}</p>
          </li>
        </Link>
        <Link href={generateGitlabLink(gitlabUsername)} target="_blank">
          <li>
            <Image src={gitlabIcon} alt="" />
            <p>{"/" + gitlabUsername}</p>
          </li>
        </Link>

        <Link href={generateLeetCodeLink(leetCodeUsername)} target="_blank">
          <li>
            <Image src={leetcodeIcon} alt="" />
            <p>{"/" + leetCodeUsername}</p>
          </li>
        </Link>
        <Link href={generateCodeChefLink(codeChefUsername)} target="_blank">
          <li>
            <Image src={codechefIcon} alt="" />
            <p>{"/" + codeChefUsername}</p>
          </li>
        </Link>
        <Link href={generateCodeForcesLink(codeForcesUsername)} target="_blank">
          <li>
            <Image src={codeforcesIcon} alt="" />
            <p>{"/" + codeForcesUsername}</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default BioSection;

/*
 * Local Utility Functions
 */

const generateLinkedInLink = (userName: string) => {
  return `https://www.linkedin.com/in/${userName}`;
};

const generateYoutubeLink = (userName: `@${string}`) => {
  return `https://www.youtube.com/${userName}`;
};

const generateGithubLink = (userName: string) => {
  return `https://github.com/${userName}`;
};

const generateGitlabLink = (userName: string) => {
  return `https://gitlab.com/${userName}`;
};

const generateLeetCodeLink = (userName: string) => {
  return `https://leetcode.com/${userName}`;
};

const generateCodeChefLink = (userName: string) => {
  return `https://www.codechef.com/users/${userName}`;
};

const generateCodeForcesLink = (userName: string) => {
  return `https://codeforces.com/profile/${userName}`;
};
