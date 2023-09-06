import React from "react";
import Chart from "./chart";

export default function PanelView3() {
  return (
    <>
      <div class="mt-2 rounded-2xl w-full md:w-screen flex flex-col bg-gray-300">
        <div class="py-5 ml-5 text-gray-700 text-left font-bold text-3xl">
          Property Status
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          <div class="md:col-span-2 lg:col-span-2">
            <div class="flex flex-row justify-around items-center content-center">
              <h6>01</h6>
              <div class="rounded-lg h-32 bg-white md:w-1/3 lg:w-1/3">
                <div class="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Category
                </div>
                <div class="p-2 rounded-lg font-bold flex items-center justify-center text-black text-center">
                  Owner
                </div>
              </div>

              <div class="rounded-lg h-32 bg-white md:w-1/3 lg:w-1/3">
                <div class="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Status
                </div>
                <div class="p-2 rounded-lg font-bold flex items-center justify-center text-green-500 text-center">
                  Active
                </div>
              </div>

              <div class="rounded-lg h-32 bg-white md:w-1/3 lg:w-1/3">
                <div class="w-20 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Status
                </div>
                <div class="p-2 rounded-lg font-bold flex items-center justify-center text-green-500 text-center">
                  Active
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-2 lg:col-span-1">
            <h6>02</h6>
            <div class="py-5 pt-3 ml-10 text-gray-700 text-left font-bold text-3xl">
              Billing Status
            </div>
            <div class="flex flex-row justify-around">
              <div class="rounded-lg h-64 bg-white md:w-1/3 lg:w-1/3">
                <div class="w-32 ml-2 mt-2 flex justify-center items-center bg-gray-200 rounded-lg text-black text-center">
                  Payment Method
                </div>
                <div class="h-32 w-24">
                  <div class="bg-blue-500">
                    <Chart />
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white md:w-1/3 lg:w-1/3">
                <div class="w-32 ml-2 mt-2 bg-gray-200 rounded-lg text-black text-center">
                  Payment Method
                </div>
                <div class="h-32 w-24">
                  <div class="bg-blue-500">
                    <Chart />
                  </div>
                </div>
              </div>

              <div class="rounded-lg bg-white md:w-1/3 lg:w-1/3"></div>
            </div>
          </div>
          <div class="rounded-2xl mr-3 row-span-full bg-white md:hidden lg:block">
            <h6>03</h6>
          </div>
        </div>
      </div>
    </>
  );
}
