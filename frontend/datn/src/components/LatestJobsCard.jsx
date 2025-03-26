import React from 'react'

const LatestJobsCard = () => {
  return (
    <div classname="p-5 bg-white rounded-md shadow-xl border border-gray-200 cursor-pointer">
      <div>
        <h1 classname="font-medium text-lg">Company name</h1>
        <p classname="text-gray-500 text-sm">Hanoi, Vietnam</p>
      </div>
      <div>
        <h1 classname="font-bold text-lg my-2">Job title</h1>
        <p classname="text-gray-600 text-sm">Full time</p>
      </div>
      <div className='flex items-center gap-2  mt-4'>
        <Badge className="text-blue-500 font-bold" variant="ghost">
          12 positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">Full time</Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">10000$ - 20000$</Badge>
      </div>



    </div>
  )
}

export default LatestJobsCard
