import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Footer = () => {
  return (
    <Box
      backgroundImage="linear-gradient(90deg, rgba(54,51,98,1) 0%, rgba(162,34,56,1) 31%, rgba(170,58,156,1) 100%)"
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={6}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
        color="white"
      >
        <Text>© 2022 Duan Huynh. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/tuliba1996"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Linkedin"}
            href={"https://www.linkedin.com/in/duan-huynh-ba447313a/"}
          >
            <FaLinkedin />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href={"https://github.com/tuliba1996/"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
};
