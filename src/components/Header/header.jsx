import PropTypes from "prop-types";
import { useState } from "react";
import { Burger } from "../Burger/burger";

export const Header = () => {
  const [checkbox, setCheckbox] = useState(false);

  const modalControl = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-[url('img/Header-image.png')] w-full bg-cover mb-[13px] xl:bg-[url('img/Header-desktop.png')] relative">
      {checkbox && <Burger modalControl={modalControl} />}
      <div className="w-[90%] mt-[58px] flex justify-between items-center mx-auto mb-[196px]">
        <img
          className="w-[92px] h-[33px] xl:w-[183px] xl:h-[67px] z-3"
          src="img/Logo.png"
          alt="header_icon"
        />
        <img
          className="xl:w-[78px] xl:h-[78px] cursor-pointer"
          src="img/Burger.png"
          alt="burger_menu"
          onClick={modalControl}
        />
      </div>
      <div className="w-[80%] flex flex-col mb-[29px]">
        <div className="flex justify-start w-[100%] mt-[30px] h-[120px] mb-[10px] xl:items-center">
        <p className="text-white uppercase font-jost font-light uppercase text-[40px] text-white leading-[58px] xl:text-[100px] xl:leading-[144px]">
        Art of marketing
      </p>
          <img
            className="w-[72px] h-[72px] object-cover mt-[52px] xl:mt-auto xl:h-[121px] xl:w-[121px]"
            src="img/arrow.png"
            alt="arrow"
          />
        </div>
        <p className="font-jost font-normal text-[16px] text-white leading-[23px] w-[100%] xl:text-[22px]">
          Welcome to Art of Marketing, a cutting-edge creative and marketing
          agency dedicated to the art of disruption. Our mission is to
          revolutionize the marketing landscape with innovative strategies and
          compelling storytelling. We blend creativity with data-driven insights
          to craft unique campaigns that captivate and convert.
        </p>
      </div>
      <div className="w-[60%] h-[8px] mb-[30px]"></div>
    </div>
  );
};

Header.propTypes = {
  modalControl: PropTypes.func.isRequired,
};
