import React from 'react'
import Chart from './chart'

export default function PanelView() {
  return (
    <div className="mt-2 h-screen w-full flex flex-row gap-5">
        <div className="px-5 bg-gray-200 w-full rounded-xl text-white">
          <div className='py-5 ml-5 text-gray-700 text-left font-bold text-3xl'>
            Property Status
          </div>
          <div className="flex">
            <div className=" rounded-lg h-48 bg-gray-200" style={{width: '70%'}}>
              <div className="rounded-lg h-40 bg-gray-200" >
                <div className="flex flex-row justify-around items-center content-center">
                  <div className="rounded-lg h-32 bg-white " style={{width: '30%'}}>
                    <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                      Category
                    </div>
                    <div className='p-2  rounded-lg font-bold flex items-center justify-center text-black text-center' > 
                      Owner
                    </div>
                  </div>
                  
                  <div className="rounded-lg h-32 bg-white " style={{width: '30%'}}>
                    <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                      Status
                    </div>
                    <div className='p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center' > 
                      Active
                    </div>
                  </div>

                  <div className="rounded-lg h-32 bg-white " style={{width: '30%'}}>
                    <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                      Status
                    </div>
                    <div className='p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center' > 
                      Active
                    </div>
                  </div>

                </div>
              </div>

              <div className="rounded-lg h-80 bg-gray-200" >
                <div className='py-5 pt-3 ml-10 text-gray-700 text-left font-bold text-3xl'>
                  Billing Status
                </div>
                <div className=" flex flex-row justify-around">
                  <div className="rounded-lg h-64  bg-white " style={{width: '30%'}}>
                    <div className='w-32  ml-2 mt-2 flex justify-center items-center bg-gray-200 rounded-lg text-black text-center'> 
                      Payment Method
                    </div>
                    <div className=' h-32 w-24 ' > 
                      <Chart/>
                    </div>
                  </div>

                  <div className="rounded-lg  bg-white " style={{width: '30%'}}>
                    <div className='w-32  ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                      Payment Method
                    </div>
                    <div className=' h-32 w-24 ' > 
                      <Chart />
                    </div>
                  </div>

                  <div className="rounded-lg  bg-white " style={{width: '30%'}}>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <div className=" rounded-lg bg-white" style={{width: '30%', height:'485px'}}>
              
            </div>
          </div>
        </div>
    </div>
  )
}
