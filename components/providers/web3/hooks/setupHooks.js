import { handler as createUseAccount } from "./handler";
import { handler as createUseNetwork } from "./useNetwork";

export const setupHooks = (...deps) => {
  return {
    createUseAccount: createUseAccount(...deps),
    createUseNetwork: createUseNetwork(...deps),
  };
};
