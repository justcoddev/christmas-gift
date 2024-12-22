import React from "react";

const GiftBox = () => {
  return (
    // <div className="h-[150vh] w-[500px] mx-auto relative zoom-gift z-60">
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[150vh] w-[500px] zoom-gift z-10">
      <section className="absolute bottom-0 w-[150px] left-[172px] z-[12] h-[180px] group">
        <div className="absolute w-[120px] text-gray-700 font-sans font-extrabold rounded-md shadow-[0_1px_0_1px_#F9564AFF] p-2.5 text-[15px] bg-[#ffa69f] left-0 top-[100px] right-0 mx-auto leading-[26px] z-[-1] text-center transition-all duration-600 ease-in-out delay-[60ms] group-hover:top-[-10px] group-hover:delay-[400ms]">
          ADD YOUR
          <br />
          MESSAGE!!
        </div>
        <section className="w-full absolute top-0 transition-all duration-600 ease-in-out delay-550 group-hover:top-[-100px] group-hover:delay-300">
          <div className="w-[45px] h-[45px] rounded-full shadow-[0_0_0_10px_#FFCE54_inset] absolute right-[30px]"></div>
          <div className="w-[45px] h-[45px] rounded-full shadow-[0_0_0_10px_#FFCE54_inset] absolute left-[30px]"></div>
          <div className="h-7 rounded-md top-[45px] absolute w-[150px] bg-[#ff7d6d] shadow-[-75px_0_0_#ff6259_inset]"></div>
          <div className="h-[55px] w-[15px] left-[15px] absolute bg-[#ffb74a] top-[40px] z-[11] after:content-[''] after:border-[9px] after:border-solid after:border-transparent after:border-b-[#ff8168] after:z-[12] after:absolute after:bottom-0 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-8 group-hover:delay-0"></div>
        </section>
        <div className="w-0.5 bottom-0 absolute right-0 left-0 mx-auto bg-[#ffb74a] h-[140px] border-r-[6px] border-l-[6px] border-[#ffb74a] z-10 transition-all duration-300 ease-in-out delay-[1000ms] group-hover:h-[102px] group-hover:delay-0"></div>
        <div className="bg-[#ff8168] bottom-0 h-[102px] overflow-hidden right-[7px] absolute w-[136px] shadow-[-70px_0_0_#fe6d68_inset] rounded-md">
          <div className="absolute right-[-25px] h-3 w-[110px] rotate-45 bg-[#ff4149] top-[-15px]"></div>
          <div className="absolute right-[-25px] h-3 w-[110px] rotate-45 bg-[#ff4149] top-5"></div>
          <div className="absolute right-[-25px] h-3 w-[110px] rotate-45 bg-[#ff4149] top-[55px]"></div>
          <div className="absolute right-[-25px] h-3 w-[110px] rotate-45 bg-[#ff4149] top-[90px]"></div>
        </div>
        <div className="h-[5px] w-[136px] right-[7px] absolute bottom-[102px] bg-[#dd4b4c] transition-delay-[1100ms] group-hover:h-0 group-hover:opacity-0 group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out group-hover:delay-400"></div>
      </section>
    </div>
  );
};

export default GiftBox;