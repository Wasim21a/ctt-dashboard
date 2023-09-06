import React from "react";
import Chart from "./chart";

export default function PanelView2() {
  return (
  <>
    <div className="mt-2 rounded-2xl w-screen flex-col bg-gray-300">
      <div className='py-5 ml-5 text-gray-700 text-left font-bold text-3xl'>
        Property Status
      </div>
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <div className="rounded-2xl col-span-2">
            <div className="flex flex-row justify-around items-center content-center">
              <div className="rounded-lg h-32 bg-white " style={{ width: "30%" }}>
                <div className="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Category
                </div>
                <div className="p-2 rounded-lg font-bold flex items-center justify-center text-black text-center">
                  Owner
                </div>
              </div>

              <div className="rounded-lg h-32 bg-white " style={{ width: "30%" }}>
                <div className="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Status
                </div>
                <div className="p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center">
                  Active
                </div>
              </div>

              <div className="rounded-lg h-32 bg-white " style={{ width: "30%" }}>
                <div className="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Status
                </div>
                <div className="p-2  rounded-lg font-bold flex items-center justify-center text-green-500 text-center">
                  Active
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-gray-300 row-span-2 col-span-2">
            <div className="py-5 pt-3 ml-10 text-gray-700 text-left font-bold text-3xl">
              Billing Status
            </div>
            <div className=" flex flex-row justify-around">
              <div
                className="rounded-lg h-64  bg-white "
                style={{ width: "30%" }}
              >
                <div className="w-32  ml-2 mt-2 flex justify-center items-center bg-gray-200 rounded-lg text-black text-center">
                  Payment Method
                </div>
                <div className=" h-32 w-24 ">
                  <Chart />
                </div>
              </div>

              <div className="rounded-lg  bg-white " style={{ width: "30%" }}>
                <div className="w-32  ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Payment Method
                </div>
                <div className=" h-32 w-24 ">
                  <Chart />
                </div>
              </div>

              <div
                className="rounded-lg  bg-white "
                style={{ width: "30%" }}
              ></div>
            </div>
          </div>
          <div className="rounded-2xl mr-3 row-span-full bg-white">03</div>
        </div>
    </div>
  </>
  );
}
