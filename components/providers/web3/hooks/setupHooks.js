import { handler as createUseAccount } from "./handler";

export const setupHooks = (web3, provider) => {
  return {
    createUseAccount: createUseAccount(web3, provider),
  };
};
