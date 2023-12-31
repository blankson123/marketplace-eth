import { useWeb3 } from "@components/providers";
import { Button } from "@components/ui/common";
import { useAccount } from "@components/hooks/web3";
import { useRouter } from "next/router";
import ActiveLink from "../link";

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3();

  const { account } = useAccount();
  const { pathname } = useRouter();

  return (
    <section>
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between items-center">
            <div>
              <ActiveLink
                href="/"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                <span>Home</span>
              </ActiveLink>
              <ActiveLink
                href="/marketplace"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                <span>Marketplace</span>
              </ActiveLink>
              <ActiveLink
                href="/blogs"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                <span>Blogs</span>
              </ActiveLink>
            </div>
            <div>
              <ActiveLink
                href="/wishlist"
                className="font-medium mr-8 text-gray-500 hover:text-gray-900"
              >
                <span>Whishlist</span>
              </ActiveLink>
              {isLoading ? (
                <Button disabled>Loading...</Button>
              ) : account.data ? (
                <Button className="cursor-default" hoverable={false}>
                  Hi there {account.isAdmin && "Admin"}
                </Button>
              ) : requireInstall ? (
                <Button
                  onClick={() =>
                    window.open("https://metamask.io/download/", "_blank")
                  }
                >
                  Install Metamask
                </Button>
              ) : (
                <Button onClick={connect}>Connect</Button>
              )}
            </div>
          </div>
        </nav>
      </div>

      {account.data && !pathname.includes("/marketplace") && (
        <div className="flex justify-end pt-1 sm:px-6 lg:px-8">
          <div className="text-white bg-indigo-600 rounded-md p-2">
            {account.data}
          </div>
        </div>
      )}
    </section>
  );
}
