import { Navbar, Footer, Hero, BreadCrumb } from "@components/common";
import { CourseList } from "@components/course";
import { BaseLayout } from "@components/layout";
import { OrderCard } from "@components/order";
import { EthRates, WalletBar } from "@components/web3";

export default function Home() {
  return (
    <>
      <Hero />
      <BreadCrumb />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <CourseList />
    </>
  );
}

Home.Layout = BaseLayout;
