import {
  Button,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Spacer,
  Image,
  useColorModeValue,
  UseImageProps,
  Badge,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
// import { connectWallet } from "../store/action/userAction";
// import { useAppDispatch, useAppSelector } from "../hooks";
const siteTitle = "NFT Marketplace";
import ethLogo from "assets/ethlogo.png";

export default function Header() {
  // const { user_address } = useAppSelector((state) => state.user);
  // const dispatch = useAppDispatch();
  //
  // const onClickConnect = () => {
  //   dispatch(connectWallet());
  // };

  return (
    <Flex
      as="header"
      backgroundImage="linear-gradient(90deg, rgba(54,51,98,1) 0%, rgba(162,34,56,1) 31%, rgba(170,58,156,1) 100%)"
      paddingBlock={4}
      paddingInline={40}
      alignItems="center"
    >
      <LinkBox>
        <NextLink href={"/"} passHref>
          <LinkOverlay display="flex" alignItems="center">
            <Image boxSize="40px" objectFit="cover" src={ethLogo.src} />
            <Heading size="l" fontWeight="extrabold" color="white">
              {siteTitle}
            </Heading>
          </LinkOverlay>
        </NextLink>
      </LinkBox>
      <Spacer />
      <LinkBox>
        <NextLink href="/create-nft">Create NFT</NextLink>
      </LinkBox>
      <LinkBox>
        <NextLink href="/my-nft">My NFTs</NextLink>
      </LinkBox>
      <LinkBox>
        <NextLink href="/dashboard">Dashboard</NextLink>
      </LinkBox>
      <Spacer />
      {/*{user_address ? (*/}
      {/*  <Box*/}
      {/*    mt="1"*/}
      {/*    maxW="sm"*/}
      {/*    fontWeight="semibold"*/}
      {/*    as="h4"*/}
      {/*    lineHeight="tight"*/}
      {/*    isTruncated*/}
      {/*  >*/}
      {/*    <Badge borderRadius="full" p="3" colorScheme="teal">*/}
      {/*      {user_address}*/}
      {/*    </Badge>*/}
      {/*  </Box>*/}
      {/*) : (*/}
      {/*  <Button onClick={onClickConnect}>Connect to wallet</Button>*/}
      {/*)}*/}
    </Flex>
  );
}
