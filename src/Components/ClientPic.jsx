/* eslint-disable react/prop-types */

const ClientPic = ({ src }) => {
  return (
    <img
      src={src}
      className=" grayscale hover:grayscale-0 transition-all ease-in-out duration-300 w-[130px] h-[130px] sm:w-[200px] sm:h-[200px] object-contain cursor-pointer hover:scale-110"
      alt="Client logo"
    />
  );
};

export default ClientPic;
