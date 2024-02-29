import styles from "./page.module.scss";

import ProfileImageSection from "./components/ProfileImageSection/ProfileImageSection";
import StatsSection from "./components/StatsSection/StatsSection";
import BioSection from "./components/BioSection/BioSection";
import ShowPosts from "./components/ShowPosts/ShowPosts";
import Image from "next/image";

function Profile() {
  return (
    <main className={styles.profile}>
      <div className={styles.profileInfoWrapper}>
        <div className={styles.banner}>
          <Image src="/default-banner.png" height={1920} width={647} alt="" />
        </div>

        <div className={styles.profileImageAndStatsWrapper}>
          <ProfileImageSection />
          <StatsSection />
        </div>

        <BioSection />
      </div>

      <ShowPosts />
    </main>
  );
}
export default Profile;
