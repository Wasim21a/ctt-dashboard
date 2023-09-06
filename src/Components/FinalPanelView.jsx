// import React from "react";
import Chart from "./chart";

export default function FinalPanelView() {
  return (
    <>
        <div className="mt-2 rounded-2xl w-screen flex-row bg-gray-300 md:flex-col">
            <div className='pt-3 ml-5 text-gray-700 text-center font-bold text-3xl md:text-left md:py-5'>
                Property Status
            </div>

            <div className=" px-3 grid md:grid-rows-4 md:grid-flow-col md:gap-4 md:h-screen ">
                <div className="pt-3 col-span-3 rounded-2xl bg-gray-300  md:col-span-2  ">
                    <div className="space-y-2 flex flex-col justify-around items-center  md:flex-row ">
                        <div className="w-full space-y-4 rounded-lg  bg-white md:w-[30%] md:py-2 md:mt-2" >
                            <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                            Category
                            </div>
                            <div className='p-2  rounded-lg font-bold flex items-center justify-center text-black text-center' > 
                            Owner
                            </div>
                        </div>
                    
                        <div className="w-full space-y-4 rounded-lg  bg-white md:w-[30%] md:py-2">
                            <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                            Status
                            </div>
                            <div className='p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center' > 
                            Active
                            </div>
                        </div>

                        <div className="w-full space-y-4 rounded-lg  bg-white md:w-[30%] md:py-2">
                            <div className='w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                            Status
                            </div>
                            <div className='p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center' > 
                            Active
                            </div>
                        </div>

                    </div>
                </div>


                <div className="row-span-1 rounded-2xl col-span-3 bg-gray-300 md:col-span-2" >
                    <div className=' ml-2 mt-3 text-gray-700 text-center font-bold text-3xl md:text-left '>
                    Billing Status
                    </div>
                    
                    <div className="mt-2 space-y-4 flex flex-col justify-around items-center  md:flex-row ">
                        <div className="w-full rounded-lg bg-white md:w-[30%] ">
                            <div className='w-32  ml-2 mt-2 flex justify-center items-center bg-gray-200 rounded-lg text-black text-center'> 
                            Payment Method
                            </div>
                            <div className=' h-32 w-24 ' > 
                            <Chart/>
                            </div>
                        </div>

                        <div className="w-full rounded-lg bg-white md:w-[30%]">
                            <div className='w-32  ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                            Payment Method
                            </div>
                            <div className=' h-32 w-24 ' > 
                            <Chart />
                            </div>
                        </div>

                        <div className="w-full rounded-lg  bg-white md:w-[30%]">
                            <div className='w-32  ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center'> 
                                Payment Method
                                </div>
                                <div className=' h-32 w-24 ' > 
                                <Chart />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-5 border-4 border-red-700 col-span-3 row-span-2 rounded-2xl bg-white  md:row-span-3 md:col-span-1 md:w-full">
jdsbhbvjvbdjb
                </div>
            </div>
        </div>

    </>
  );
}
