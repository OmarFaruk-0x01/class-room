
export const AchivementCard = ({
  Icon,
  title,
  subtitle,
  index
}) => {
  return <div data-aos="fade-up" data-aos-anchor="#why-choose-btn" data-aos-anchor-placement="top-center" data-aos-delay={`${100 * index}`} className=" group flex flex-col  items-center justify-center gap-2  ">
      <div className="w-[60px] h-[60px] rounded-full bg-emerald-800 flex items-center justify-center text-white">
        <Icon size={25} />
      </div>
      <h2 className="font-bold text-lg py-0 text-black">{title}</h2>
      <span className="w-[40px] h-[2px] rounded-full bg-c_orange"></span>
      <p className="text-center text-xs font-medium text-gray-600 md:text-sm">
        {subtitle}
      </p>
    </div>;
};
  