/* eslint-disable no-unused-vars */
import React from "react";

import styles from "./Sertifikat.module.css";

import sertifikat from "../../data/sertifikat.json";
import { SertifikatCard } from "./SertifikatCard";

export const Sertifikat = () => {
  return (
    <section className={styles.container} id="sertifikat">
      <h2 className={styles.title}>sertifikat</h2>
      <div className={styles.sertifikat}>
        {sertifikat.map((sertifikat, id) => {
          return <SertifikatCard key={id} sertifikat={sertifikat} />;
        })}
      </div>
    </section>
  );
};