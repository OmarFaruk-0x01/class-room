import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Icons = {
    facebook: <BsFacebook />,
    twitter: <BsTwitter />,
    youtube: <BsYoutube />,
    instagram: <BsInstagram />,
};

export const InstructorCard = ({
  instructor,
  index
}) => {
  return <div className="group bg-white shadow-lg p-3 rounded-md">
      <div className="w-full p-3 mt-3 h-[300px]  rounded-lg relative overflow-hidden" style={{
      backgroundImage: `url(${instructor.avatar_url})`,
      backgroundPosition: "center-center",
      backgroundSize: "cover"
    }}>
        <div className="absolute top-0 left-0 w-full h-full bg-c_orange opacity-5 transition-all group-hover:opacity-50 "></div>
        {instructor.socials.map((social, i) => <span key={i} style={{
        bottom: 30 + i * 35,
        transitionDelay: 50 * i + "ms"
      }} className={`text-xl absolute  right-2 bg-white w-[30px] h-[30px] flex items-center justify-center rounded-full text-c_orange translate-x-10 group-hover:translate-x-0 transition-all delay-${300 * i}`}>
            {Icons[social.site]}
          </span>)}
        {
        /* <img className=" h-full rounded-md" src={instructor.avatar_url} /> */
      }
      </div>
      <h1 className="font-semibold text-center mt-2">{instructor.name}</h1>
      <p className="font-semibold text-emerald-800 uppercase text-center text-[.6rem] mt-2">
        Instructor
      </p>
    </div>;
};
  