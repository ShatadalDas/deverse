import styles from "./page.module.scss";
import Image from "next/image";
import cameraIcon from "@/assets/camera-icon.svg";
import editIcon from "@/assets/edit-icon.svg";
import ProfileImgSection from "./components/ProfileImgSection/ProfileImgSection";
import StatsSection from "./components/StatsSection/StatsSection";
import BioSection from "./components/BioSection/BioSection";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";

const data = {
  fullName: "John Doe",
  userName: "@johndoe123",
  totalInspectors: 1506,
  totalInspecting: 16045,
  totalInspections: 3162,
  totalUpvotes: 300,
  description:
    "As a seasoned developer, I craft elegant solutions to complex problems. Proficient in multiple languages and frameworks, I thrive on pushing the boundaries of innovation. From scalable architectures to clean code, my passion lies in transforming ideas into robust applications.",

  socialLinks: {
    personalWebsiteLink: "www.johndoe.com",
    linkedInUsername: "john_doe",
    youtubeUsername: "@johndoe",
    resumeLink:
      "https://drive.google.com/file/d/1bsMiea0rZeOFp_yBmU1-NQmg0nqRcz60/view",
    githubUsername: "JohnDoe",
    gitlabUsername: "JohnDoe",
    leetCodeUsername: "john_doe",
    codeChefUsername: "johndoe",
    codeForcesUsername: "johndoe",
  },
  totalPostCount: 5300
} as const;

function Profile() {
  return (
    <main className={styles.profile}>
      <div>
        <div>
          <ProfileImgSection
            fullName={data.fullName}
            userName={data.userName}
          />
          <StatsSection
            totalInspectors={data.totalInspectors}
            totalInspecting={data.totalInspecting}
            totalInspections={data.totalInspections}
            totalUpvotes={data.totalUpvotes}
          />
        </div>

        <BioSection description={data.description} {...data.socialLinks} />
      </div>
      <div>
        <p>
          <span>Posts</span>
          <span>{"( " + formatNumberWithAbbreviation(data.totalPostCount) + " )"}</span>
        </p>
        <div></div>
      </div>
    </main>
  );
}
export default Profile;
