import {
  Badge,
  Box,
  Button,
  Center,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { LoadingComponent } from "./LoadingComponent";
import ethLogo from "assets/ethlogo.png";

interface NftsType {
  name?: string;
  tokenId: string;
  image: string;
  description?: string;
  price: number;
  seller?: string;
  owner?: string;
}

interface PropsType {
  nfts: NftsType[];
  loading?: boolean;
  buyNft?: (nft: NftsType) => void;
  openModal?: (nft: NftsType) => void;
}

export const NftsComponent = (props: PropsType) => {
  return (
    <SimpleGrid bg="rgb(19 24 53)" paddingBlock={10} paddingInline={40}>
      <Center>{props?.loading ? <LoadingComponent /> : null}</Center>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} pt={10}>
        {props.nfts &&
          props.nfts.map((nft: any) => {
            return (
              <Box
                maxW="md"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                color="white"
                key={nft.tokenId}
                _hover={{
                  boxShadow: "0px 11px 17px 7px rgba(207,40,131,0.44)",
                }}
              >
                <Image
                  src={nft.image}
                  alt={nft.description}
                  boxSize="400px"
                  objectFit="cover"
                />
                <Box
                  p="3"
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box
                    mt="1"
                    fontWeight="semibold"
                    lineHeight="tight"
                    isTruncated
                  >
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      #{nft.tokenId}
                    </Badge>
                    <p>{nft.name}</p>
                    <p>{nft.description}</p>
                  </Box>
                  <Box>
                    <Box
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      flexDirection="column"
                      alignItems="center"
                      ml="2"
                      mr={3}
                    >
                      <Text>Price</Text>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <Image src={ethLogo.src} boxSize="14px" mr={1} />
                        &bull;
                        <Text p={1}>{nft.price}</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Center>
                  {props.buyNft && (
                    <Button
                      colorScheme="pink"
                      variant="solid"
                      marginBlock={5}
                      marginInline={2}
                      onClick={() => {
                        if (props.buyNft) props.buyNft(nft);
                      }}
                    >
                      Buy Now
                    </Button>
                  )}
                  {props.openModal && (
                    <Button
                      colorScheme="pink"
                      variant="solid"
                      marginBlock={5}
                      marginInline={2}
                      onClick={() => {
                        if (props.openModal) props.openModal(nft);
                      }}
                    >
                      Transfer
                    </Button>
                  )}
                </Center>
              </Box>
            );
          })}
      </SimpleGrid>
    </SimpleGrid>
  );
};
