import { BsFacebook, BsInstagram, BsTwitch, BsTwitter } from "react-icons/bs"
import SubscribeBox from "../Inputs/SubscribeBox"



function NewsletterView() {
  return (
      <div className="text-center ">
          <h1 className="font-bold text-lg sm:text-xl text-white">Subscribe For Newsletter</h1>
          <p className="text-xs text-white ">Dramatically supply transparent deliverables before backword comp</p>
          <SubscribeBox />

          <div className="flex items-center justify-center my-3">
              <span className="w-[30px] h-[30px] flex items-center justify-center text-c_orange bg-white text-md rounded-full mx-1"><BsFacebook /></span>
              <span className="w-[30px] h-[30px] flex items-center justify-center text-c_orange bg-white text-md rounded-full mx-1"><BsTwitter /></span>
              <span className="w-[30px] h-[30px] flex items-center justify-center text-c_orange bg-white text-md rounded-full mx-1"><BsTwitch /></span>
              <span className="w-[30px] h-[30px] flex items-center justify-center text-c_orange bg-white text-md rounded-full mx-1"><BsInstagram /></span>
          </div>
    </div>
  )
}

export default NewsletterView