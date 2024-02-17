"use client";

import Image from "next/image";
import styles from "./StatsSection.module.scss";
import infoIcon from "@/assets/info-icon.svg";
import formatNumberWithAbbreviation from "@/utils/formatNumberWithAbbreviation";
import { useId } from "react";

type Props = {
  totalInspectors: number;
  totalInspecting: number;
  totalInspections: number;
  totalUpvotes: number;
};

function StatsSection({
  totalInspectors,
  totalInspecting,
  totalInspections,
  totalUpvotes,
}: Props) {
  const id = useId();

  return (
    <div>
      <div>
        <div>
          <div>
            <p>Inspections</p>
            <Image src={infoIcon} alt="" title="same as followers" />
          </div>
          <p>
            {formatNumberWithAbbreviation(totalInspectors, false).map((val) => (
              <span key={id}>{val}</span>
            ))}
          </p>
        </div>

        <div>
          <div>
            <p>Inspecting</p>
            <Image src={infoIcon} alt="" title="same as followings" />
          </div>
          <p>
            {formatNumberWithAbbreviation(totalInspecting, false).map((val) => (
              <span key={id}>{val}</span>
            ))}
          </p>
        </div>
      </div>

      <div>
        <div>
          <div>
            <p>Inspections</p>
            <Image src={infoIcon} alt="" title="total views of your profile" />
          </div>
          <p>
            {formatNumberWithAbbreviation(totalInspections, false).map(
              (val) => (
                <span key={id}>{val}</span>
              )
            )}
          </p>
        </div>

        <div>
          <div>
            <p>Upvotes</p>
            <Image src={infoIcon} alt="" title="total upvotes of all posts" />
          </div>
          <p>
            {formatNumberWithAbbreviation(totalUpvotes, false).map((val) => (
              <span key={id}>{val}</span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
export default StatsSection;
