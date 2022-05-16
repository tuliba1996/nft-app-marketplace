import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "assets/logo.png";
import { Link } from "@chakra-ui/react";
import { useWeb3Context } from "../../hooks";

const Menu = () => (
  <>
    <Link href="/">
      <p>Explore</p>{" "}
    </Link>
    <Link href="/my-nft">
      <p>My NFT</p>
    </Link>
    <Link href="/dashboard">
      <p>My NFT Listed</p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const { connect, disconnect, connected, web3 } = useWeb3Context();

  const [isConnected, setConnected] = useState(connected);

  let buttonText = "Connect Wallet";
  let clickFunc: any = connect;

  if (isConnected) {
    buttonText = "Disconnect";
    clickFunc = disconnect;
  }

  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-links"]}>
        <div className={styles["navbar-links_logo"]}>
          <img src={logo.src} alt="logo" />
          <Link href="/">
            <h1>CryptoKet</h1>
          </Link>
        </div>
        <div className={styles["navbar-links_container"]}>
          <input type="text" placeholder="Search Item Here" autoFocus={true} />
          <Menu />
        </div>
      </div>
      <div className={styles["navbar-sign"]}>
        {isConnected && (
          <Link href="/create-nft">
            <button type="button" className={styles["primary-btn"]}>
              Mint NFT
            </button>
          </Link>
        )}
        <button
          onClick={clickFunc}
          type="button"
          className={styles["secondary-btn"]}
        >
          {buttonText}
        </button>
      </div>
      <div className={styles["navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["navbar-menu_container"]} ${styles["scale-up-center"]}`}
          >
            <div className={styles["navbar-menu_container-links"]}>
              <Menu />
            </div>
            <div className={styles["navbar-menu_container-links-sign"]}>
              {isConnected && (
                <Link href="/create-nft">
                  <button type="button" className={styles["primary-btn"]}>
                    Mint NFT
                  </button>
                </Link>
              )}
              <button
                onClick={clickFunc}
                type="button"
                className={styles["secondary-btn"]}
              >
                {buttonText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
