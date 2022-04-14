export const OfferCard = ({
  Icon,
  title,
  disp,
  index
}) => {
  return <div data-aos="flip-right" data-aos-delay={`${index * 50}`} className="group bg-white p-6 rounded-md hover:shadow-lg transition-all lg:w-[220px] ">
      <div className="w-[40px] h-[40px] flex items-center justify-center bg-emerald-800 rounded-full transition-colors text-white mb-1 group-hover:bg-c_orange ">
        <Icon size={22} />
      </div>
      <h2 className="font-bold text-md py-1">{title}</h2>
      <p className="font-medium text-xs text-gray-500">{disp}</p>
    </div>;
};
  