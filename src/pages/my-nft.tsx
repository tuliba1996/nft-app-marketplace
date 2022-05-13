import { useEffect, useRef, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import Web3Modal from "web3modal";
import { marketplaceAddress } from "../config";
import NFTMarketplace from "abis/NFTMarketplace.json";
import { NftsComponent } from "../components/NftsComponent";
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
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchMyNft } from "../actions/userAction";
import { transferNft } from "../actions/marketAction";

export default function MyNft() {
  const [nftSelected, setNftSelected] = useState<any>({});

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [toAddress, setToAddress] = useState("");

  const { nftsUser } = useAppSelector((state) => state.user);
  const { loading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const initialRef = useRef();
  const finalRef = useRef();

  useEffect(() => {
    dispatch(fetchMyNft());
  }, []);

  const closeModal = () => {
    setToAddress("");
    onClose();
  };

  const openModal = (nft: any) => {
    setNftSelected({ ...nft });
    onOpen();
  };

  const onTransferNft = () => {
    dispatch(transferNft({ nft: nftSelected, toAddress: toAddress }));

    closeModal();
  };

  return (
    <>
      <NftsComponent nfts={nftsUser} loading={loading} openModal={openModal} />
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
