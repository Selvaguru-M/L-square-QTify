import React from "react";
import LogoImage from "../../assets/logo.png";
// import "./Logo.module.css"

export default function Logo() {
  return <div className="Logo-header">
    <img  src={LogoImage} alt="logo" width={67} />
    </div>;
}
