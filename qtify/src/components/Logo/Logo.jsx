import React from "react";
import LogoImage from "../../assets/logo.png";
import styles from "./Logo.module.css"

export default function Logo() {
  return <img src={LogoImage} alt="logo" width={67} className={styles.logoheader}/>
  // (<div className="Logo-header">
  //   <img  src={LogoImage} alt="logo" width={67} />
  //   </div>);
}
