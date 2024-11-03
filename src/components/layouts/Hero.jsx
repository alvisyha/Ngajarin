import HeroImage from "../../assets/images/hero.png";
import wave from "../../assets/images/wave.svg";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <div className="">
      <div className="bg-indigo-600 h-[782px]">
        <div className="container  pt-20  mx-auto md:pt-32 lg:flex lg:w-full lg:flex-row-reverse lg:items-center">
          <img
            className="lg:w-2/5 w-[300px] flex mx-auto sm:justify-center"
            src={HeroImage}
            alt="Hero"
          />
          <div className="w-full flex flex-col gap-5 ">
            <h1 className="text-white text-center lg:text-left md:mt-8 text-3xl md:text-4xl items-center md:flex mx-auto lg:ms-0 font-semibold tracking-tighter pt-5 md:pt-0 lg:text-6xl">
              Belajar Tanpa Batas
              <br />
              untuk Prestasi Teratas!
            </h1>
            <p className="md:max-w-lg md:mx-auto text-white text-md mt-4 lg:text-left text-center lg:ms-0">
              Belajar seru dan menyenangkan dengan teacher{" "}
              <span className="font-bold">Ngajarin</span> yang siap membantu
              kamu untuk sukses
            </p>
            <div className="flex mt-6 lg:justify-start justify-center">
              <Button
                path=""
                classname="bg-[#B84F5C] px-6 py-2 text-md rounded-full text-white hover:bg-red-500"
              >
                Konsultasi Dahulu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img className="" src={wave} alt="wave" />
    </div>
  );
};

export default Hero;
