import { useEffect, useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";
import { fetchMyNft } from "../actions/userAction";
import { transferNft } from "../actions/marketAction";
import { NftCard } from "../components";

export default function MyNft() {
  const [nftSelected, setNftSelected] = useState<any>({});

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [toAddress, setToAddress] = useState("");

  const { nftsUser } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const {
    connect,
    disconnect,
    connected,
    web3,
    provider,
    providerChainID,
    checkWrongNetwork,
  } = useWeb3Context();

  const initialRef = useRef();
  const finalRef = useRef();

  useEffect(() => {
    if (connected) dispatch(fetchMyNft({ provider }));
  }, [connected]);

  const closeModal = () => {
    setToAddress("");
    onClose();
  };

  const openModal = (nft: any) => {
    setNftSelected({ ...nft });
    onOpen();
  };

  const onTransferNft = () => {
    dispatch(transferNft({ nft: nftSelected, toAddress: toAddress, provider }));

    closeModal();
  };

  return (
    <>
      <NftCard title="My NFT" nfts={nftsUser} openModal={openModal} />
      <Modal
        initialFocusRef={initialRef.current}
        finalFocusRef={finalRef.current}
        isOpen={isOpen}
        size="xl"
        onClose={closeModal}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Transfer NFT</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Send to</FormLabel>
              <Input
                ref={initialRef.current}
                value={toAddress}
                onChange={(e) => setToAddress(e.target.value)}
                placeholder="Address"
                autoFocus={true}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onTransferNft}>
              Transfer
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
