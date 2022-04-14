import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export function StudentsCard({
  students,
  index
}) {
  return <div className="group relative h-[200px] bg-white rounded-md mx-8 my-10 p-3 flex items-end  flex-col">
      <div className=" flex items-center justify-end text-c_orange">
        <div style={{
        backgroundImage: `url(${students.avatar_url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="w-[70px] h-[70px] rounded-full bg-black absolute -top-[70px] translate-y-[43px] -left-5 border-8 border-gray-100">
        </div>
        {Array(5).fill(null).map((_, i) => students.rating - 1 >= i ? <span key={i}><AiFillStar /></span> : <span key={i}><AiOutlineStar /></span>)}
      </div>
      <div className="mt-5 flex-1 flex justify-around flex-col">
        <p className="font-medium text-sm text-gray-500">{students.review}</p>
        <strong className="text-lg font-bold">{students.name}</strong>
        <p className="uppercase text-sm text-emerald-800 font-semibold">{students.cetagory}</p>
      </div>
    </div>;
}
  