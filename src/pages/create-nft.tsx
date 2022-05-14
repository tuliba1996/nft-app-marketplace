import {
  SimpleGrid,
  Input,
  Center,
  Button,
  Stack,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";

import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { ethers } from "ethers";
import { useAppDispatch } from "../hooks";
import { listNftForSale } from "../actions/marketAction";
import { useRouter } from "next/router";

const client = ipfsHttpClient({ url: "https://ipfs.infura.io:5001" });

export default function CreateNft() {
  const [fileUrl, setFileUrl] = useState<string>("");
  const [formInput, updateFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });

  const router = useRouter();

  const dispatch = useAppDispatch();

  async function onChange(e: any) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  async function uploadToIPFS() {
    const { name, description, price } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    /* first, upload metadata to IPFS */
    const data = JSON.stringify({
      name,
      description,
      image: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      /* after metadata is uploaded to IPFS, return the URL to use it in the transaction */
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  const onListNFTForSale = async () => {
    const url = await uploadToIPFS();

    const price = ethers.utils.parseUnits(formInput.price, "ether");
    if (url && price) {
      dispatch(listNftForSale({ url: url, price: price, router }));
    }
  };

  return (
    <SimpleGrid columns={1} spacing={10}>
      <Center>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          spacing={4}
          p={10}
          margin={40}
        >
          <Text>Create NFT</Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Input
              type="text"
              placeholder="Assert Name"
              onChange={(e) =>
                updateFormInput({ ...formInput, name: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" />
            <Input
              type="text"
              placeholder="Assert Description"
              onChange={(e) =>
                updateFormInput({ ...formInput, description: e.target.value })
              }
            />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children="$"
            />
            <Input
              placeholder="Enter amount"
              onChange={(e) =>
                updateFormInput({ ...formInput, price: e.target.value })
              }
            />
          </InputGroup>
          <InputGroup>
            <Input
              type="file"
              placeholder="Assert Description"
              onChange={onChange}
            />
          </InputGroup>

          <Button onClick={onListNFTForSale}>Create NFT</Button>
        </Stack>
      </Center>
    </SimpleGrid>
  );
}
