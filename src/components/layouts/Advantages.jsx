import CardAvengates from "../fragments/CardAdvantages";

const Advantages = () => {
  return (
    <div className="container mx-auto mt-24 md:mt-36 mb-32">
      <h2 className="text-center text-3xl md:text-4xl">
        <span className="font-bold">Ngajarin</span> bakal Ngajarin <br /> Kamu
        Sampai Bisa!
      </h2>
      <div className="mt-2">
        <p className="text-slate-400 text-base text-center max-w-sm mx-auto md:text-base md:mt-5">
          Cobain pengalaman belajar bersama Ngajarin yang asik dan seru
        </p>
      </div>
      <CardAvengates />
    </div>
  );
};

export default Advantages;
