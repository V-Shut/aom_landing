export const Services = () => {
  return (
    <>
      <div
        id="services"
        className="w-[371px] h-[61px] font-jost font-light text-[40px] flex items-center justify-end mb-[15px] xl:w-[80%]"
      >
        <p className="uppercase mr-[9px] font-jost xl:text-[100px] xl:mr-[46px]">
          Services
        </p>
        <img
          className="w-[30px] h-[30px] xl:w-[60px] xl:h-[60px]"
          src="img/arrow-orange.png"
          alt="arrow"
        />
      </div>

      <div className="w-[371px] flex flex-row justify-between mb-[73px] xl:w-[80%]">
        <div>
          <div className="w-[138px] h-[200px] relative mb-[218px] xl:w-[400px] xl:h-[600px] xl:bg-cover z-0">
            <img
              className="absolute bottom-0 jeft-0 w-[128px] h-[157px] xl:w-[380px] xl:h-[487px] z-0"
              src="img/spot-girl.png"
              alt="spot image"
            />
            <img
              className="absolute top-0 right-0 w-[109px] h-[177px] object-fill xl:w-[326px] xl:h-[550px] z-0"
              src="img/girl-heart.png"
              alt="girl image"
            />
          </div>
          <div className="h-[77px] mb-[56px] xl:h-[150px]">
            <p
              className="mb-[13px] font-jost font-bold text-[14px]
leading-[20px] xl:text-[35px] xl:leading-[50px]"
            >
              Creative Strategy
            </p>
            <p
              className="font-jost font-normal text-[12px]
leading-[17px] xl:text-[30px] xl:leading-[43px] xl:w-[400px]"
            >
              Innovative concepts that disrupt and engage.
            </p>
          </div>
          <div className="h-[77px] mb-[56px] xl:h-[150px]">
            <p
              className="mb-[13px] font-jost font-bold text-[14px]
leading-[20px] xl:text-[35px] xl:leading-[50px]"
            >
              Brand Development
            </p>
            <p
              className="font-jost font-normal text-[12px]
leading-[17px] xl:text-[30px] xl:leading-[43px] xl:w-[400px]"
            >
              Building memorable, enduring brands.
            </p>
          </div>
        </div>

        <div className="w-[19px] flex flex-col items-center mt-[55px] xl:w-[32px]">
          <div className="w-[19px] h-[19px] rounded-full bg-orange-400 xl:w-[32px] xl:h-[32px]" />
          <div className="w-[1px] h-[103px] bg-orange-400 xl:w-[2px] xl:h-[230px]" />
          <div className="w-[19px] h-[19px] rounded-full bg-orange-400 xl:w-[32px] xl:h-[32px]" />
          <div className="w-[1px] h-[103px] bg-orange-400 xl:w-[2px] xl:h-[230px]" />
          <div className="w-[19px] h-[19px] rounded-full bg-orange-400 xl:w-[32px] xl:h-[32px]" />
          <div className="w-[1px] h-[103px] bg-orange-400 xl:w-[2px] xl:h-[230px]" />
          <div className="w-[19px] h-[19px] rounded-full bg-orange-400 xl:w-[32px] xl:h-[32px]" />
          <div className="w-[1px] h-[103px] bg-orange-400 xl:w-[2px] xl:h-[230px]" />
          <div className="w-[19px] h-[19px] rounded-full bg-orange-400 xl:w-[32px] xl:h-[32px]" />
        </div>

        <div className="mt-[55px]">
        <div className="h-[77px] mb-[56px] xl:h-[150px]">
            <p
              className="mb-[13px] font-jost font-bold text-[14px]
leading-[20px] xl:text-[35px] xl:leading-[50px]"
            >
              Creative Strategy
            </p>
            <p
              className="font-jost font-normal text-[12px]
leading-[17px] xl:text-[30px] xl:leading-[43px] xl:w-[400px]"
            >
              Innovative concepts that disrupt and engage.
            </p>
          </div>
          <div className="h-[77px] mb-[56px] xl:h-[150px]">
            <p
              className="mb-[13px] font-jost font-bold text-[14px]
leading-[20px] xl:text-[35px] xl:leading-[50px]"
            >
              Brand Development
            </p>
            <p
              className="font-jost font-normal text-[12px]
leading-[17px] xl:text-[30px] xl:leading-[43px] xl:w-[400px]"
            >
              Building memorable, enduring brands.
            </p>
          </div>
          <div className="h-[77px] mb-[56px] xl:h-[150px]">
            <p
              className="mb-[13px] font-jost font-bold text-[14px]
leading-[20px] xl:text-[35px] xl:leading-[50px]"
            >
              Content Creation
            </p>
            <p
              className="font-jost font-normal text-[12px]
leading-[17px] xl:text-[30px] xl:leading-[43px] xl:w-[400px]"
            >
              Crafting high-quality, engaging narratives.
            </p>
          </div>
          <div className="w-[138px] h-[200px] relative xl:h-[450px] xl:w-[400px]">
            <img
              className="absolute bottom-0 right-0 transform scale-x-[-1] w-[128px] h-[157px] xl:w-[330px] xl:h-[420px]"
              src="img/spot-girl.png"
              alt="spot image"
            />
            <img
              className="absolute left-0 top-0 w-[109px] h-[177px] object-fill xl:w-[330px] xl:h-[420px]"
              src="img/girl-glasses.png"
              alt="girl image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
