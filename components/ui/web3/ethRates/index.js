import { useEthPrice, COURSE_PRICE } from "@components/hooks/useEthPrice";
import { Loader } from "@components/ui/common";
import Image from "next/image";

export default function EthRates() {
  const { eth } = useEthPrice();
  return (
    <div className="grid grid-cols-4">
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
            {!eth.data ? (
              <div className="w-full flex justify-center">
                <Loader size="sm" />
              </div>
            ) : (
              <>
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                  alt="ethereum"
                />
                <span className="text-2xl font-bold"> = {eth.data}$</span>
              </>
            )}
          </div>
          <p className="text-xl text-gray-500">Current eth Price</p>
        </div>
      </div>
      <div className="flex flex-1 items-stretch text-center">
        <div className="p-10 border drop-shadow rounded-md">
          <div className="flex items-center">
            {!eth.data ? (
              <Loader size="sm" />
            ) : (
              <>
                <span className="text-2xl font-bold">{eth.perItem}</span>
                <Image
                  layout="fixed"
                  height="35"
                  width="35"
                  src="/small-eth.webp"
                  alt="ethereum"
                />
                <span className="text-2xl font-bold">= {COURSE_PRICE}$</span>
              </>
            )}
          </div>
          <p className="text-xl text-gray-500">Price per course</p>
        </div>
      </div>
    </div>
  );
}
