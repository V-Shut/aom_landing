import { useForm } from "react-hook-form";
// import "./style.css";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-[77px]">
      <p className="leading-[21px] font-jost text-[14px] xl:text-[30px] xl:leading-[40px] xl:mb-[20px]">Your name</p>
      <input
        {...register("Name", { required: "Name is required" })}
        className="bg-transparent font-jost pl-[5px] border-b border-black rounded-lg w-[305px] h-[39px] mb-[51px] focus:outline-none xl:w-[500px] xl:h-[60px] xl:text-[32px]"
      />
      {errors.Name && <span>{errors.Name.message}</span>}

      <p className="leading-[21px] font-jost text-[14px] xl:text-[30px] xl:leading-[40px] xl:mb-[20px]">Your Email</p>
      <input
        {...register("Email", { required: "Email is required" })}
        className="bg-transparent pl-[5px] font-jost border-b border-black rounded-lg w-[305px] h-[39px] mb-[51px] focus:outline-none xl:w-[500px] xl:h-[60px] xl:text-[32px]"
      />
      {errors.Email && <span>{errors.Email.message}</span>}

      <p className="leading-[21px] font-jost text-[14px] xl:text-[30px] xl:leading-[40px] xl:mb-[20px]">Your Message</p>
      <input
        {...register("Message", { required: "Message is required" })}
        className="bg-transparent pl-[5px] font-jost border-b border-black rounded-lg w-[305px] h-[39px] mb-[51px] focus:outline-none xl:w-[500px] xl:h-[60px] xl:text-[32px]"
      />
      {errors.Message && <span>{errors.Message.message}</span>}

      <div className="flex items-center mb-[51px]">
        <input
          type="checkbox"
          {...register("Terms", { required: true })}
          className="border-b border-black rounded-lg mr-[25px] w-[18px] h-[18px] cursor-pointer xl:w-[40px] xl:h-[40px]"
        />
        <label className="leading-[21px] font-jost text-[14px] xl:text-[30px] xl:leading-[40px]">
          Terms and Conditions
        </label>
        {errors.Terms && <span>You must accept the terms</span>}
      </div>

      <button
        type="submit"
        className="px-[20px] w-[213px] h-[56px] rounded-[500px] text-white bg-black leading-[24px] font-jost text-[16px] font-normal pl-[5px] xl:w-[300px] xl:h-[70px] xl:text-[28px]"
      >
        Send Message
      </button>
    </form>
  );
};
