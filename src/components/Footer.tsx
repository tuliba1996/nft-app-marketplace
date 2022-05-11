import { Center, Text, Image } from "@chakra-ui/react";
import imgGithub from "assets/github_icon.png";
import imgLinkedin from "assets/linkedIn_icon.png";
import imgTwitter from "assets/twitter_icon.png";

export const Footer = () => {
  return (
    <Center
      as="footer"
      backgroundImage="linear-gradient(90deg, rgba(54,51,98,1) 0%, rgba(162,34,56,1) 31%, rgba(170,58,156,1) 100%)"
      p={6}
      color="white"
      className="footer-container"
    >
      <div>
        <Text fontSize="xl" fontWeight="bold">
          First Dapp by Duan Huynh - 2022
        </Text>
      </div>
      <div className="footer-icon-container">
        <a
          href="https://github.com/tuliba1996/nft-web-app"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={imgGithub.src} w={8} h={8} marginInline={2} />
        </a>
        <a
          href="https://www.linkedin.com/in/duan-huynh-ba447313a/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={imgLinkedin.src} w={8} h={8} marginInline={2} />
        </a>
        <a
          href="https://twitter.com/tuliba1996"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={imgTwitter.src} w={8} h={8} marginInline={2} />
        </a>
      </div>
    </Center>
  );
};
