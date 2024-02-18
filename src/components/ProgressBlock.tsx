
const ProgressBlock = () => {
  return (
    <div className="h-16 bg-black rounded-2xl flex justify-around relative">
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>
      <div className="w-1 h-full bg-slate-700 rounded-sm "></div>

      <div className="absolute text-white top-1/2 translate-y-[-50%] z-30 text-2xl" >0%</div>
    </div>
  )
}

export default ProgressBlock