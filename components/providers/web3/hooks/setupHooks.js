import { handler as createUseAccount } from "./handler";
import { handler as createUseNetwork } from "./useNetwork";

export const setupHooks = (web3, provider) => {
  return {
    createUseAccount: createUseAccount(web3, provider),
    createUseNetwork: createUseNetwork(web3, provider),
  };
};
