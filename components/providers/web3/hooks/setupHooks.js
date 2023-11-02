import { handler as createUseAccount } from "./handler";

export const setupHooks = (web3) => {
  return {
    createUseAccount: createUseAccount(web3),
  };
};
