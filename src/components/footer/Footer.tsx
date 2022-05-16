import React from "react";
import styles from "./Footer.module.css";
import nftlogo from "../../assets/logo.png";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { RiDiscordFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={`${styles["footer"]} section__padding`}>
      <div className={styles["footer-links"]}>
        <div className={styles["footer-links_logo"]}>
          <div>
            <img src={nftlogo.src} alt="logo" />
            <p>CryptoKet</p>
          </div>
          <div>
            <h3>Get the lastes Updates</h3>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Email Me!</button>
          </div>
        </div>
        <div className={styles["footer-links_div"]}>
          <h4>CryptoKet</h4>
          <p>Explore</p>
          <p>How it Works</p>
          <p>Counters</p>
          <p>Contact Us</p>
        </div>
        <div className={styles["footer-links_div"]}>
          <h4>Support</h4>
          <p>Help center</p>
          <p>Terms of service</p>
          <p>Legal</p>
          <p>Privacy policy</p>
        </div>
      </div>
      {/*<div className={styles["footer-copyright"]}>*/}
      {/*  <div>*/}
      {/*    <p> © {new Date().getFullYear()} HCD, Inc. All Rights Reserved</p>*/}
      {/*  </div>*/}
      {/*  <div>*/}
      {/*    <AiOutlineInstagram*/}
      {/*      size={25}*/}
      {/*      color="white"*/}
      {/*      className={styles["footer-icon"]}*/}
      {/*    />*/}
      {/*    <AiOutlineTwitter*/}
      {/*      size={25}*/}
      {/*      color="white"*/}
      {/*      className={styles["footer-icon"]}*/}
      {/*    />*/}
      {/*    <RiDiscordFill*/}
      {/*      size={25}*/}
      {/*      color="white"*/}
      {/*      className={styles["footer-icon"]}*/}
      {/*    />*/}
      {/*    <FaTelegramPlane*/}
      {/*      size={25}*/}
      {/*      color="white"*/}
      {/*      className={styles["footer-icon"]}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default Footer;
