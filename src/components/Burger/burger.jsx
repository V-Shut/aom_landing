import PropTypes from "prop-types";

export const Burger = ({ modalControl }) => {
  return (
    <div className="bg-black flex flex-col items-center absolute top-0 bottom-0 left-0 right-0 justify-between">
      <div className="w-[90%] mt-[58px] flex justify-between items-center mx-auto mb-[100px]">
        <img
          className="w-[92px] h-[33px] xl:w-[183px] xl:h-[67px] z-3 mr-[11px]"
          src="Logo.png"
          alt="header_icon"
        />
        <img
          className="xl:w-[78px] xl:h-[78px] cursor-pointer z-3 mr-[11px]"
          src="Burger.png"
          alt="burger_menu"
          onClick={modalControl}
        />
      </div>
      <a
        className="text-white leading-[40px] text-[30px] font-jost font-normal"
        href="#about"
        onClick={modalControl}
      >
        About Us
      </a>
      <a
        className="text-white leading-[40px] text-[30px] font-jost font-normal"
        href="#services"
        onClick={modalControl}
      >
        Services
      </a>
      <a
        className="text-white leading-[40px] text-[30px] font-jost font-normal"
        href="#philosophy"
        onClick={modalControl}
      >
        Philosophy
      </a>
      <a
        className="text-white leading-[40px] text-[30px] font-jost font-normal"
        href="#contacts"
        onClick={modalControl}
      >
        Contact Us
      </a>

      <div className="h100px w-full" />
    </div>
  );
};

Burger.propTypes = {
  modalControl: PropTypes.func.isRequired,
};
