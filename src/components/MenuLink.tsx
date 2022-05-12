import { Box, Link, Stack, Text } from "@chakra-ui/react";

export const MenuItem = ({
  children,
  isLast,
  hover = false,
  to = "/",
  ...rest
}: any) => {
  return (
    <Link href={to}>
      <Text
        display="block"
        {...rest}
        _hover={hover ? { color: "#262625" } : {}}
      >
        {children}
      </Text>
    </Link>
  );
};

export const MenuLink = ({ isOpen }: any) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem
          hover
          color="white"
          fontSize="l"
          to="/create-nft"
          fontWeight={700}
        >
          Create NFT
        </MenuItem>
        <MenuItem
          hover
          color="white"
          fontSize="l"
          fontWeight={700}
          to="/my-nft"
        >
          My NFTs
        </MenuItem>
        <MenuItem
          hover
          color="white"
          fontSize="l"
          fontWeight={700}
          to="/dashboard"
        >
          Dashboard
        </MenuItem>
      </Stack>
    </Box>
  );
};
