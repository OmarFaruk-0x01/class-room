
export const JoinUsCard = ({
  image,
  Title,
  Disp,
  index
}) => {
  return <div id="joinus" data-aos={`slide-${index == 0 ? 'down' : 'up'}`} className="group  shadow-md bg-white p-3 rounded-md hover:shadow-lg transition-all  flex lg:grid grid-cols-2 items-center">
            <div>
                {Title}
                {Disp}
                <button className='text-xs px-2 py-1 rounded-md border-[1px] text-c_orange mt-2 border-c_orange'>Join Now</button>
            </div>
            <div className=' h-[160px] flex items-center justify-center'>
                <img className={`${index == 0 ? 'w-[250px] lg:w-[150px]' : 'lg:w-[200px] w-[300px]'} `} src={image} alt="image" />
            </div>
        </div>;
};
  