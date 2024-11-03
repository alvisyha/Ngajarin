import advantagesData from "../../data/advantages";
import Card from "../elements/Card";
const CardAvantages = () => {
  return (
    <div className="sm:flex sm:flex-wrap mx-auto sm:mt-12">
      {advantagesData.map((data) => (
        <div
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 lg:10/12 mx-auto mt-4 sm:mt-0 max-w-md sm:max-w-lg"
          key={data.id}
        >
          <Card
            background="transparent"
            src={data.image}
            alt={data.title}
            title={data.title}
            desc={data.desc}
          ></Card>
        </div>
      ))}
    </div>
  );
};

export default CardAvantages;
