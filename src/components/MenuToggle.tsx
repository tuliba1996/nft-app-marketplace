import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

interface PropsType {
  toggle: () => void;
  isOpen: boolean;
}

export const MenuToggle = ({ toggle, isOpen }: PropsType) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};
