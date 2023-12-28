/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./SertifikatCard.module.css";
import { getImageUrl } from "../../utils";

export const SertifikatCard = ({
  sertifikat: { title, imageSrc, verifikasi },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.links}>
        <a href={verifikasi} className={styles.link}>
          Verifikasi
        </a>
      </div>
    </div>
  );
};