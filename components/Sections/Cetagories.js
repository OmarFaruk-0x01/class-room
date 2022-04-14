import { CetagoryCard } from './../Cards/CetagoryCard';
import { CetagoriesData } from "../../CustomData";



const Cetagories = () => {

  function renderCetagories() {
      return CetagoriesData.map((data, i) => <CetagoryCard key={i.toString()} {...data} index={i} />)
  }

  return (
    <div id="cetagory" className="text-center py-4 pb-12">
      
      <p className="font-bold text-xl py-6 md:text-3xl">For Your Future Learning.</p>

      <div className="py-2 text-left grid grid-cols-2 gap-2   md:items-center px-0 md:justify-center lg:px-10 xl:px-40 md:pt-5 sm:grid-cols-2 md:grid-cols-4">

        {renderCetagories()}
       
      </div>
      
    </div>
  );
};

export default Cetagories;
