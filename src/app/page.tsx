import Backstory from "@/components/Backstory";
import Dapps from "@/components/Dapps";
import Footer from "@/components/Footer";
import Guide from "@/components/Guide";
import Header from "@/components/Header";
import Holdings from "@/components/Holdings";
import Landing from "@/components/Landing";
import Roadmap from "@/components/Roadmap";
import Swap from "@/components/Swap";
import Team from "@/components/Team";
import TokenDetails from "@/components/TokenDetails";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Backstory />
      <Team/>
      <Guide/>
      <Swap/>
      <TokenDetails/>
      <Dapps/>
      <Holdings/>
      <Roadmap/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
