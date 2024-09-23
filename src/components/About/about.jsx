export const About = () => {
  return (
    <div
      id="about"
      className="bg-[url('/img/Tower.png')] bg-cover bg-no-repeat w-full h-[717px] flex flex-col justify-end mb-[49px] xl:bg-[url('/img/tower-desktop.png')]"
    >
      <div className="w-full h-[499px] flex flex-col items-center bg-[url('/img/spot.png')] bg-cover bg-no-repeat xl:h-full xl:w-full xl:bg-contain xl:justify-end">
        <div className="flex flex-row justify-between items-center mt-[233px] w-[307px] mb-[17px] xl:w-[1120px] xl:justify-start">
          <p className="font-jost font-light uppercase text-[40px] text-white leading-[58px] xl:text-[100px] xl:leading-[144px]">
            About us
          </p>
          <img
            className="w-[36px] h-[36px] mr-[60px] xl:ml-[29px] xl:w-[60px] xl:h-[60px]"
            src="img/arrow-blue.png"
            alt="arrow"
          />
        </div>
        <p className="w-[307px] h-[161px] font-jost font-normal text-[16px] text-white leading-[23px] xl:w-[1120px] xl:text-[22px] xl:leading-[31px]">
          At Art of Marketing, disruption is in our DNA. Our team of visionary
          strategists, creative wizards, and tech-savvy experts collaborate to
          push boundaries and redefine brand experiences. We believe in breaking
          the mold and setting new standards in the industry.
        </p>
      </div>
    </div>
  );
};
