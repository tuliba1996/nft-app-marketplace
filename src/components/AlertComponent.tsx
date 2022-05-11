import {
  Button,
  Center,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useAppSelector } from "../hooks";

export function AlertComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isShowModal } = useAppSelector((state) => state.nft);
  const cancelRef = React.useRef(null);

  return (
    <>
      <Modal isOpen={isShowModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" height={200} color="white">
          <ModalCloseButton />
          <ModalBody paddingBlock={14}>
            <Center>
              <Spinner thickness="6px" color="red.500" size="xl" />
              <Text marginInline={12} fontWeight="extrabold" fontSize="xl">
                Minting...
              </Text>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
