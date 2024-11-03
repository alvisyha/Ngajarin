const Card = (props) => {
  const { background, title, desc, src, alt, width } = props;
  const color = {
    transparent: "bg-transparent",
    white: "bg-white",
  };

  return (
    // <div
    //   className={`${color[background]}  ${
    //     color[background] === "white" ? "shadow-xl" : "shadow-xl"
    //   }  max-w-md mx-auto rounded-xl `}
    // >
    //   <div className="p-8 space-y-2">
    //     <img width={width} className="flex mx-auto" src={src} alt={alt} />
    //     <h1 className="text-center py-0 font-semibold text-xl">{title}</h1>
    //     <p className="text-center text-slate-400 text-sm">{desc}</p>
    //   </div>
    // </div>

    <div
      className={`${color[background]} ${
        color[background] === "white" ? "shadow-xl" : "none"
      } mx-auto rounded-lg py-8 h-full overflow-hidden`}
    >
      <img className="mx-auto py-2" width={width} src={src} alt={alt} />

      <div className="p-2  lg:px-6 h-24 ">
        <h2 className="font-semibold text-xl mb-2 text-center">{title}</h2>
        <p className="text-slate-400 px-8 text-sm text-center ">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
