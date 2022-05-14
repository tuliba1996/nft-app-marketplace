import { DEFAULD_NETWORK } from "./blockchain";

const CONTRACT = "0x80bE7ca14dCB901413A7feDa4dACaEBE7Df4fD7e";

export const getAddresses = (networkID: number) => {
  if (networkID === DEFAULD_NETWORK) return CONTRACT;

  throw Error("Network don't support");
};
