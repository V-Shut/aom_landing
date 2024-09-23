export const Philosophy = () => {
  return (
    <div
      id="philosophy"
      className="w-[371px] h-[655px] flex flex-col justify-end items-center bg-[url('assets/img/eye.png')] mb-[22px] xl:bg-[url('assets/img/eye-desktop.png')] xl:w-full xl:bg-cover"
    >
      <div className="w-[307px] h-[58px] flex flex-row justify-between items-center mb-[17px] xl:w-[1120px] xl:justify-start">
        <p className="text-white uppercase font-jost font-light uppercase text-[40px] text-white leading-[58px] xl:text-[100px] xl:leading-[144px]">
          Philosophy
        </p>
        <img
          className="xl:ml-[29px] xl:w-[121px] xl:h-[121px]"
          src="assets/img/arrow.png"
          alt=""
        />
      </div>
      <p className="w-[307px] h-[92px] font-jost font-normal text-[16px] text-white leading-[23px] mb-[30px] xl:w-[1120px] xl:justify-start xl:w-[1120px] xl:text-[22px] xl:leading-[31px]">
        We thrive on the power of disruption. Our goal is to help your brand
        stand out in a crowded market by delivering exceptional, creative
        solutions that drive success.
      </p>
    </div>
  );
};
