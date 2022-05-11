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

export default function MyNft() {
  const [nfts, setNfts] = useState<any>([]);
  const [nftSelected, setNftSelected] = useState<any>({});
  const loading = false;
  const [loadingState, setLoadingState] = useState("not-loaded");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [toAddress, setToAddress] = useState("");

  const initialRef = useRef();
  const finalRef = useRef();

  useEffect(() => {
    loadNFTs();
  }, []);
  async function loadNFTs() {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketplaceContract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );
    const data = await marketplaceContract.fetchMyNFTs();

    const items = await Promise.all(
      data.map(async (i: any) => {
        const tokenURI = await marketplaceContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenURI);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          tokenURI,
        };
        return item;
      })
    );
    setNfts(items);
    setLoadingState("loaded");
  }

  const closeModal = () => {
    setToAddress("");
    onClose();
  };

  const openModal = (nft: any) => {
    setNftSelected({ ...nft });
    onOpen();
  };

  const TransferNft = async () => {
    const web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      marketplaceAddress,
      NFTMarketplace.abi,
      signer
    );

    let approve = await contract.approve(
      toAddress,
      ethers.utils.hexValue(nftSelected.tokenId)
    );
    await approve.wait();
    let transaction = await contract.transferNft(
      toAddress,
      ethers.utils.hexValue(nftSelected.tokenId)
    );
    await transaction.wait();
    loadNFTs();
    closeModal();
  };

  return (
    <>
      <NftsComponent nfts={nfts} loading={loading} openModal={openModal} />
      <Modal
        initialFocusRef={initialRef.current}
        finalFocusRef={finalRef.current}
        isOpen={isOpen}
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
            <Button colorScheme="blue" mr={3} onClick={TransferNft}>
              Transfer
            </Button>
            <Button onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
