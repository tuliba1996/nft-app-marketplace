import { Box, Image, Link, Text } from "@chakra-ui/react";
import ethLogo from "assets/ethlogo.png";

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Link href="/" {...props}>
        <Image boxSize="50px" objectFit="cover" src={ethLogo.src} />
        <Text fontSize="xl" fontWeight="bold">
          NFT Marketplace
        </Text>
      </Link>
    </Box>
  );
}
