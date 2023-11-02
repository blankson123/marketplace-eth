import Link from "next/link";
import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";

export default function Navbar() {
  const { connect, isLoading, isWeb3Loaded } = useWeb3();
  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Blogs
              </Link>
            </div>
            <div>
              <Link
                href="#"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                Whishlist
              </Link>
              {isLoading ? (
                <Button disabled>Loading...</Button>
              ) : isWeb3Loaded ? (
                <Button onClick={connect}>Connect</Button>
              ) : (
                <Link
                  href="https://metamask.io/download/"
                  target="_blank"
                  className="px-8 py-3 border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
                >
                  Install Metamask
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}
