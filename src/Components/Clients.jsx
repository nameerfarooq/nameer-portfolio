import HeadingStyle1 from "./HeadingStyleBlack";
import qbc from "../assets/images/qbc.png";
import thenic from "../assets/images/thenic.png";
import bytemates from "../assets/images/bytemates.png";
import noorimission from "../assets/images/noorimission.png";
import usmanart from "../assets/images/usmanart.png";
import thw from "../assets/images/thw.png";
import tfc from "../assets/images/tfc.png";
import renttoown from "../assets/images/renttoown.png";
import pims from "../assets/images/pims.png";
import encirkel from "../assets/images/encirkel.png";
import tdc from "../assets/images/tdc.png";
import greener from "../assets/images/greener.png";
import tfm from "../assets/images/tfm.png";
import saadats from "../assets/images/saadats.png";
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
