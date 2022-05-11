import { Flex } from "@chakra-ui/react";

export const NavBarContainer = ({ children, ...props }: any) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      backgroundImage="linear-gradient(90deg, rgba(54,51,98,1) 0%, rgba(162,34,56,1) 31%, rgba(170,58,156,1) 100%)"
      p={4}
      color={["black", "black", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
