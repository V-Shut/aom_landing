export const Footer = () => {
  return (
    <div className="bg-black w-screen h-[1019px] flex justify-center items-center xl:h-[400px] xl:flex-col xl:justify-around">
      <div className="w-[274px] h-[905px] flex flex-col xl:flex-row xl:justify-between xl:w-[80%] xl:h-auto">
        <div className="xl:w-[30%]">
          <img
            className="w-[92px] h-[33px] mb-[29px]"
            src="img/Logo.png"
            alt="Logo"
          />
          <p className="text-white font-jost text-[14px] leading-[18px] font-normal mb-[59px]">
            Lorem ipsum dolor sit amet consectetur. Dignissim sit vel sit eget
            gravida volutpat lacus risus egestas
          </p>
        </div>

        <div className="w-[163px] h-[180px] flex flex-col mb-[51px] xl:w-auto xl:mb-0">
          <p className="text-white mb-[16px] leading-[24px] text-[16px] font-jost font-semibold">
            Quick Links
          </p>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px] font-jost font-normal"
            href="#about"
          >
            About Us Page
          </a>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="#services"
          >
            Services Page
          </a>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="#philosophy"
          >
            Philosophy Page
          </a>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="#contacts"
          >
            Contact Us Page
          </a>
        </div>

        <div className="w-[150px] h-[151px] flex flex-col mb-[59px] xl:w-auto xl:mb-0">
          <p className="text-white mb-[16px] leading-[24px] text-[16px] font-jost font-semibold">
            Contacts
          </p>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="email:123@gmail.com"
          >
            123@gmail.com
          </a>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="tel:+00 123 123 12 12"
          >
            +00 123 123 12 12
          </a>
          <a
            className="text-white h-[37px] leading-[37px] text-[14px]"
            href="https://maps.app.goo.gl/CqQ7QCHrwwLJXozw9"
          >
            Location
          </a>
        </div>

        <div className="w-[107px] h-[35px] flex justify-between mb-[59px] xl:mb-0">
          <img src="img/fb.png" alt="Facebook" />
          <img src="img/inst.png" alt="Instagram" />
        </div>

        <div className="h-[111px] flex flex-col justify-between mb-[59px] xl:mb-0">
          <a
            className="text-white underline font-jost text-[14px] leading-[21px]"
            href=""
          >
            Privacy Policy
          </a>
          <a
            className="text-white underline font-jost text-[14px] leading-[21px]"
            href=""
          >
            Terms of Service
          </a>
          <a
            className="text-white underline font-jost text-[14px] leading-[21px]"
            href=""
          >
            Cookies Settings
          </a>
        </div>
      </div>
      <p className="text-white h-[37px] leading-[21px] text-[14px] font-jost font-normal xl:w-auto">
        © 2023 Company. All rights reserved.
      </p>
    </div>
  );
};
