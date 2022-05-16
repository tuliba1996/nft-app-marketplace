import React from "react";
import styles from "./NftCard.module.css";
import { AiFillHeart } from "react-icons/ai";
import { Link, SimpleGrid } from "@chakra-ui/react";
import { NftType } from "../../type/marketType";

interface IPropsType {
  title: string;
  nfts: NftType[];
  openModal?: (nft: NftType) => void;
}

const NftCard = ({ title, nfts, openModal }: IPropsType) => {
  return (
    <div className={`${styles["bids"]} section__padding`}>
      <div className={styles["bids-container"]}>
        <div className={styles["bids-container-text"]}>
          <h1>{title}</h1>
        </div>
        <div className={styles["bids-container-card"]}>
          {nfts.map((nft, index) => {
            return (
              <div key={index} className={styles["card-column"]}>
                <div className={styles["bids-card"]}>
                  <div className={styles["bids-card-top"]}>
                    <img src={nft.image} alt="" />
                    <Link href={`/item/${nft.tokenId}`}>
                      <p className={styles["bids-title"]}>{nft.name}</p>
                    </Link>
                  </div>
                  <div className={styles["bids-card-bottom"]}>
                    <p>
                      {nft.price} <span>ETH</span>
                    </p>
                    <p>
                      {" "}
                      <AiFillHeart /> {Math.floor(Math.random() * 10)}
                    </p>
                  </div>
                  {openModal && (
                    <div>
                      <button
                        onClick={() => openModal(nft)}
                        className={styles["primary-btn"]}
                      >
                        Transfer
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NftCard;
