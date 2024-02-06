"use client";

import Image from "next/image";
import styles from "./Carousel.module.scss";
import leftArrow from "@/assets/left-arrow.svg";
import { MouseEvent, useEffect, useRef, useState } from "react";

type Props = {
  hashtags: string[];
};

const btnScrollOffset = 50 as const;

function Carousel({ hashtags }: Props) {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [initialX, setInitialX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  function handleScrollNext() {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: btnScrollOffset,
        behavior: "smooth",
      });
    }
  }

  function handleScrollPrev() {
    if (!carouselRef.current) throw new Error("Carousel Ref is possibly null");

    carouselRef.current.scrollBy({
      left: -btnScrollOffset,
      behavior: "smooth",
    });
  }

  function handleMouseDown(event: MouseEvent<HTMLUListElement>) {
    setIsDragging(true);
    setInitialX(event.clientX);
  }

  function handleMouseMove(event: MouseEvent<HTMLUListElement>) {
    if (!isDragging) return;
    if (!carouselRef.current) throw new Error("Carousel Ref is possibly null");

    const deltaX = event.clientX - initialX;
    carouselRef.current.scrollBy({
      left: -deltaX,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    function handleMouseUp() {
      setIsDragging(false);
    }

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <aside className={styles.carouselWrapper}>
      <button className={styles.btnPrev} onClick={handleScrollPrev}>
        <Image src={leftArrow} alt="" />
      </button>
      <ul
        className={styles.carousel}
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {hashtags.sort().filter((item, pos, ary) => (!pos || item != ary[pos - 1])).map((hashtag, i) => (
          <li className={styles.tag} key={i}>
            &#x23;{hashtag}
          </li>
        ))}
      </ul>
      <button className={styles.btnNxt} onClick={handleScrollNext}>
        <Image src={leftArrow} alt="" />
      </button>
    </aside>
  );
}
export default Carousel;