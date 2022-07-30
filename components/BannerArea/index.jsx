import React from "react";
import styles from "./banner.module.css";
import Search from "./Search";
export default function BannerArea() {
  return (
    <>
      <Search />
      <div className={`${styles.banner} flex items-center justify-center`}>
        <h1 className={`text-8xl ${styles.strokeme} `}>Reciped!</h1>
      </div>
    </>
  );
}
