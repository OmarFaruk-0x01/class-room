
export function SupportCard({
  image_url,
  index
}) {
  return <div data-aos="fade-up" data-aos-delay={`${100 * index}`} className=" group flex flex-col  items-center justify-center gap-2 p-5 bg-white shadow-lg rounded-md ">
      <img src={image_url} alt="support" />
    </div>;
}
  