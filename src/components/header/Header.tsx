import React from "react";
import styles from "./Header.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import seller1 from "../../assets/seller1.jpg";
import seller2 from "../../assets/seller2.png";
import seller3 from "../../assets/seller3.png";
import seller4 from "../../assets/seller4.png";
import seller5 from "../../assets/seller5.png";
import seller6 from "../../assets/seller6.jpg";
import verify from "../../assets/verify.png";
import coin from "../../assets/coin.png";
import { Link } from "@chakra-ui/react";

const ImageUrl = [seller1, seller2, seller3, seller4, seller5, seller6];

const Header = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };
  return (
    <div className={`${styles["header"]} section__padding`}>
      <div className={styles["header-content"]}>
        <div>
          <h1>Discover, collect, and sell extraordinary NFTs</h1>
          <img className={styles["shake-vertical"]} src={coin.src} alt="" />
        </div>
      </div>
      <div className={styles["header-slider"]}>
        <h1>Top Sellers</h1>
        <Slider {...settings} className={styles["slider"]}>
          {ImageUrl.map((imgUrl, index) => {
            return (
              <div key={index} className={styles["slider-card"]}>
                <p className={styles["slider-card-number"]}>{index + 1}</p>
                <div className={styles["slider-img"]}>
                  <img src={imgUrl.src} alt="" />
                  <img src={verify.src} className={styles["verify"]} alt="" />
                </div>
                <Link href={`/profile/Rian`}>
                  <p className={styles["slider-card-name"]}>James Bond</p>
                </Link>
                <p className={styles["slider-card-price"]}>
                  5.250 <span>ETH</span>
                </p>
              </div>
            );
          })}
          {/*<div className={styles["slider-card"]}>*/}
          {/*  <p className={styles["slider-card-number"]}>1</p>*/}
          {/*  <div className={styles["slider-img"]}>*/}
          {/*    <img src={seller1.src} alt="" />*/}
          {/*    <img src={verify.src} className={styles["verify"]} alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className={styles["slider-card-name"]}>James Bond</p>*/}
          {/*  </Link>*/}
          {/*  <p className={styles["slider-card-price"]}>*/}
          {/*    5.250 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className="slider-card">*/}
          {/*  <p className="slider-card-number">2</p>*/}
          {/*  <div className="slider-img">*/}
          {/*    <img src={seller2.src} alt="" />*/}
          {/*    <img src={verify.src} className="verify" alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className="slider-card-name">Rian Leon</p>*/}
          {/*  </Link>*/}
          {/*  <p className="slider-card-price">*/}
          {/*    4.932 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className="slider-card">*/}
          {/*  <p className="slider-card-number">3</p>*/}
          {/*  <div className="slider-img">*/}
          {/*    <img src={seller3.src} alt="" />*/}
          {/*    <img src={verify.src} className="verify" alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className="slider-card-name">Lady Young</p>*/}
          {/*  </Link>*/}
          {/*  <p className="slider-card-price">*/}
          {/*    4.620 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className="slider-card">*/}
          {/*  <p className="slider-card-number">4</p>*/}
          {/*  <div className="slider-img">*/}
          {/*    <img src={seller4.src} alt="" />*/}
          {/*    <img src={verify.src} className="verify" alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className="slider-card-name">Black Glass</p>*/}
          {/*  </Link>*/}
          {/*  <p className="slider-card-price">*/}
          {/*    4.125 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className="slider-card">*/}
          {/*  <p className="slider-card-number">5</p>*/}
          {/*  <div className="slider-img">*/}
          {/*    <img src={seller5.src} alt="" />*/}
          {/*    <img src={verify.src} className="verify" alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className="slider-card-name">Budhiman</p>*/}
          {/*  </Link>*/}
          {/*  <p className="slider-card-price">*/}
          {/*    3.921 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
          {/*<div className="slider-card">*/}
          {/*  <p className="slider-card-number">6</p>*/}
          {/*  <div className="slider-img">*/}
          {/*    <img src={seller6.src} alt="" />*/}
          {/*    <img src={verify.src} className="verify" alt="" />*/}
          {/*  </div>*/}
          {/*  <Link href={`/profile/Rian`}>*/}
          {/*    <p className="slider-card-name">Alex</p>*/}
          {/*  </Link>*/}
          {/*  <p className="slider-card-price">*/}
          {/*    3.548 <span>ETH</span>*/}
          {/*  </p>*/}
          {/*</div>*/}
        </Slider>
      </div>
    </div>
  );
};

export default Header;
