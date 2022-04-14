import { AchivementCard } from './../Cards/AchivementsCard';
import { AchivementsData } from '../../CustomData';



const AchivementsCount = () => {
 

  function renderAchivements() {
    return AchivementsData.map((data, i) => (
      <AchivementCard key={i.toString()} {...data} index={i} />
    ));
  }

  return (
    <div className="py-12 text-left grid grid-cols-2 gap-4  md:items-center px-0 md:justify-center lg:px-10 xl:px-40 md:pt-5 sm:grid-cols-4 md:grid-cols-4">
      {renderAchivements()}
    </div>
  );
};

export default AchivementsCount;
