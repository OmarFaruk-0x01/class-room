import { OfferCard } from './../Cards/OffersCard';
import { SectionColoredTitle } from './../Texts/SectionColoredTitle';
import { OffersData } from '../../CustomData';
const Offers = () => {
  function renderOffers() {
    return OffersData.map((data, i) => <OfferCard key={i.toString()} {...data} index={i} />)
  }

  return (
    <div className="text-center py-10">

      <SectionColoredTitle   title={'What We Offer'}  />

      <p className="font-bold text-xl py-2 md:text-3xl">For Your Future Learning.</p>

      <div className="py-2 text-left grid grid-cols-1 gap-2   md:items-center px-0 md:justify-center lg:px-10 xl:px-40 md:pt-5 sm:grid-cols-2 md:grid-cols-4">

        {renderOffers()}
       
      </div>
      
    </div>
  );
};

export default Offers;
