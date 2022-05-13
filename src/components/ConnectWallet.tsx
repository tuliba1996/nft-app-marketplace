import { Badge, Box, Button, Text } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { connectWalletAction } from "../actions/userAction";

export const ConnectWallet = (props: any) => {
  const { user_address } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onConnectWallet = () => {
    dispatch(connectWalletAction());
  };

  return (
    <Box {...props} isTruncated>
      {!user_address ? (
        <Button onClick={onConnectWallet} {...props}>
          <Text fontSize="l" fontWeight="bold">
            Connect Wallet
          </Text>
        </Button>
      ) : (
        <Badge borderRadius="full" p="3" colorScheme="teal">
          {user_address}
        </Badge>
      )}
    </Box>
  );
};
