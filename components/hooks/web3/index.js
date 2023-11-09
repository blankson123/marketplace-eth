import { useHooks } from "@components/providers/web3";

const enhanceHook = (swrRes) => {
  return {
    ...swrRes,
    hasInitialResponse: swrRes.data || swrRes.error,
  };
};

export const useNetwork = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.createUseNetwork)());
  return { network: swrRes };
};

export const useAccount = () => {
  const swrRes = enhanceHook(useHooks((hooks) => hooks.createUseAccount)());
  return { account: swrRes };
};
