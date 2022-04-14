import { SupportCard } from "./../Cards/SupporterCard";
import { SupportsData } from "../../CustomData";

const Supporters = () => {
  function renderSupporters() {
    return SupportsData.map((data, i) => (
      <SupportCard key={i.toString()} {...data} index={i} />
    ));
  }

  return (
    <div>
      <h2 className=" text-center font-bold text-xl md:text-3xl">
        Our Key Supporters
      </h2>
      <div className="py-12 text-left grid grid-cols-2 gap-4 justify-items-center md:items-center px-0 md:justify-center lg:px-52 xl:px-40 md:pt-5 sm:grid-cols-4 md:grid-cols-4">
        {renderSupporters()}
      </div>
    </div>
  );
};

export default Supporters;
