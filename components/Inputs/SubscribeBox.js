
function SubscribeBox() {
    return (
        <div className="relative my-2 mx-auto max-w-[350px]">   
      <input typeof="email" className="peer shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline lg:text-sm" id="subs" type="text" placeholder="abc@example.com" />
            <button className="px-3 py-1 rounded-full bg-c_orange text-sm text-white absolute top-1/2 -translate-y-[50%] right-2">
                Subscribe
      </button>
      </div>
  )
}

export default SubscribeBox;