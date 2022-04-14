
export const CetagoryCard = ({
  Icon,
  title,
  index
}) => {
  return <div data-aos="fade-up" data-aos-anchor="#about-title" data-aos-anchor-placement="top-top" data-aos-delay={`${100 * index}`} className=" group flex flex-col md:flex-row items-center gap-2 bg-white p-2 rounded-md text-c_orange hover:shadow-lg transition-all lg:w-[220px] ">
        <Icon size={19} />
      <h2 className="font-semibold text-sm py-0 sm:py-1 text-black">{title}</h2>
     
    </div>;
};
  