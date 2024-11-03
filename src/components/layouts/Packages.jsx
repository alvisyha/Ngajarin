import CardPackages from "../fragments/CardPackages";
import bumn from "../../assets/images/bumn.svg";

const Packages = () => {
  return (
    <div className=" bg-blue-600 h-[1224px] sm:h-[1000px] lg:h-[840px] ">
      <div className="container  mx-auto items-center space-y-4 pt-24">
        <h2 className="text-center max-w-sm sm:max-w-lg md:max-w-xl mx-auto text-3xl md:text-4xl text-white ">
          Pilih <span className="font-bold">Paket Belajar</span> yang Sesuai
          dengan Kebutuhanmu!
        </h2>
        <div className="pb-8">
          <p className="text-slate-300 text-base text-center max-w-md mx-auto md:text-base md:mt-5 md:max-w-lg">
            Temukan paket belajar yang sesuai dengan kebutuhanmu, kamu bisa
            pilih lebih dari satu paket belajar
          </p>
        </div>
        <CardPackages />
      </div>
    </div>
  );
};

export default Packages;
