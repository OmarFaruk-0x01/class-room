import { JoinUsCard } from "./../Cards/JoinUsCard";
import { SectionColoredTitle } from "./../Texts/SectionColoredTitle";

const JoinUs = () => {
  return (
    <div className="text-center py-10 ">
      <SectionColoredTitle title={"What We Offer"} />
      <p className="font-bold text-xl py-2 md:text-3xl">
        For Your Future Learning.
      </p>
      <div className="py-2 text-left grid grid-cols-1 gap-2   md:items-center px-0 md:justify-center lg:px-10 xl:px-40 md:pt-5 sm:grid-cols-2 md:grid-cols-2 overflow-hidden">
        <JoinUsCard
          index={0}
          image="/vectors/read.svg"
          Title={
            <h1 className="font-bold text-black text-md md:text-xl">
              Do you want to <span className="text-c_orange">Learn</span> here?
            </h1>
          }
          Disp={
            <p className="text-gray-500 text-xs">
            
              Dramatically supply transparent deliverables before backword comp
            </p>
          }
        />

        <JoinUsCard
          image="/vectors/class.svg"
          Title={
            <h1 className="font-bold text-black text-md md:text-xl">
              Do you want to <span className="text-c_orange">Teach</span> here?
            </h1>
          }
          Disp={
            <p className="text-gray-500 text-xs">
              
              Dramatically supply transparent deliverables before backword comp
            </p>
          }
        />
      </div>
    </div>
  );
};

export default JoinUs;
