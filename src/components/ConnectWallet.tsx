import { Box, Button, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector, useWeb3Context } from "../hooks";
import { useEffect, useState } from "react";

export const ConnectWallet = (props: any) => {
  const { user_address } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { connect, disconnect, connected, web3 } = useWeb3Context();

  const [isConnected, setConnected] = useState(connected);

  let buttonText = "Connect Wallet";
  let clickFunc: any = connect;

  if (isConnected) {
    buttonText = "Disconnect";
    clickFunc = disconnect;
  }

  useEffect(() => {
    setConnected(connected);
  }, [web3, connected]);

  return (
    <Box {...props} isTruncated>
      <Button onClick={clickFunc} {...props}>
        <Text fontSize="l" fontWeight="bold">
          {buttonText}
        </Text>
      </Button>
    </Box>
  );
};
