import { Box, Link, Stack, Text } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }: any) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
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
        <MenuItem to="/create-nft">Create NFT</MenuItem>
        <MenuItem to="/my-nft">My NFTs</MenuItem>
        <MenuItem to="/dashboard">Dashboard</MenuItem>
      </Stack>
    </Box>
  );
};
