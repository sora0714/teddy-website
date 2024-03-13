import Backstory from "@/components/Backstory";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import TokenDetails from "@/components/TokenDetails";

export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Backstory />
      <TokenDetails />
      <Guide />
      <Footer />
    </>
  );
}
