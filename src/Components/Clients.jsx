import HeadingStyle1 from "./HeadingStyleBlack";
import qbc from "../assets/images/qbc.webp";
import thenic from "../assets/images/thenic.webp";
import bytemates from "../assets/images/bytemates.webp";
import noorimission from "../assets/images/noorimission.webp";
import usmanart from "../assets/images/usmanart.webp";
import thw from "../assets/images/thw.webp";
import tfc from "../assets/images/tfc.webp";
import renttoown from "../assets/images/renttoown.webp";
import pims from "../assets/images/pims.webp";
import encirkel from "../assets/images/encirkel.webp";
import tdc from "../assets/images/tdc.webp";
import greener from "../assets/images/greener.webp";
import tfm from "../assets/images/tfm.webp";
import saadats from "../assets/images/saadats.webp";
import ClientPic from "./ClientPic";
const Clients = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 sm:mt-32 mb-16">
      <br />
      <br />
      <HeadingStyle1 black={true} text1={"My"} text2={"Clients"} />
      <br />
      <br />
  

      <div className=" flex gap-8 sm:gap-28 flex-wrap justify-center items-center">
        <ClientPic src={bytemates} />
        <ClientPic src={encirkel} />
        <ClientPic src={pims} />
        <ClientPic src={thw} />
        <ClientPic src={thenic} />
        <ClientPic src={greener} />
        <ClientPic src={saadats} />
        <ClientPic src={tdc} />
        <ClientPic src={tfm} />
        <ClientPic src={noorimission} />
        <ClientPic src={usmanart} />
        <ClientPic src={renttoown} />
        <ClientPic src={tfc} />
        <ClientPic src={qbc} />
      </div>
    </div>
  );
};

export default Clients;
