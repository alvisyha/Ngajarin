import packagesData from "../../data/packages";
import Card from "../elements/Card";

const CardPackages = () => {
  return (
    <div>
      <div className=" sm:flex sm:flex-wrap">
        {packagesData.map((data) => (
          <div
            className="p-2 lg:p-4 sm:w-1/2 md:w-1/3 md:p-1 mx-auto mt-4 sm:mt-0 max-w-md  "
            key={data.id}
          >
            <Card
              background="white"
              src={data.image}
              alt={data.title}
              width="100"
              title={data.title}
              desc={data.desc}
            ></Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPackages;
