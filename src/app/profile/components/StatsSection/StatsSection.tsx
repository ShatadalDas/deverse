import styles from "./StatsSection.module.scss";
import { useId } from "react";
import Image from "next/image";

import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import infoIcon from "@/assets/info-icon.svg";

function StatsSection() {
  const uniqueId = useUniqueId();

  return (
    <section className={styles.statsSection}>
      <div className={styles.bigStats}>
        <div>
          <div>
            <span>Inspectors</span>
            <Image src={infoIcon} alt="" title="followers" />
          </div>
          <p>
            {formatNumberWithAbbreviation(1504, false).map((el) => (
              <span key={uniqueId}>{el}</span>
            ))}
          </p>
        </div>
        <div>
          <div>
            <span>Inspecting</span>
            <Image src={infoIcon} alt="" />
          </div>
          <p>
            {formatNumberWithAbbreviation(1504, false).map((el) => (
              <span key={uniqueId}>{el}</span>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.smallStats}>
        <div>
          <div>
            <span>Inspections</span>
            <Image src={infoIcon} alt="" />
          </div>
          <p>
            {formatNumberWithAbbreviation(1504, false).map((el) => (
              <span key={uniqueId}>{el}</span>
            ))}
          </p>
        </div>

        <div>
          <div>
            <span>Upvotes</span>
            <Image src={infoIcon} alt="" />
          </div>
          <p>
            {formatNumberWithAbbreviation(1504, false).map((el) => (
              <span key={uniqueId}>{el}</span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
export default StatsSection;
