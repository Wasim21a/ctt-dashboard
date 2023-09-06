// import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div>
        <div className="mt-2 bg-gray-300 rounded-xl h-screen w-16 flex flex-col justify-between ">
            <div className=" h-full w-full">
              <div className="mt-3 flex flex-col justify-center items-center">
                <div className="cursor-pointer mb-4">
                    
                    <Link to="/" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">
                    <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-xl mb-1 overflow-hidden">
                        <img
                        src="https://cdn.discordapp.com/embed/avatars/0.png"
                        alt=""
                        />
                    </div>
                    </Link>
                </div>
                <div className="cursor-pointer mb-4">
                  
                  <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">
                  <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                    <img
                      src="https://cdn.discordapp.com/embed/avatars/1.png"
                      alt=""
                    />
                  </div>
                  </Link>
                </div>
                <div className="cursor-pointer mb-4">
                    <Link to="/contact" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">

                        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                            <img
                            src="https://cdn.discordapp.com/embed/avatars/2.png"
                            alt=""
                            />
                        </div>
                    </Link>
                </div>
                <div className="cursor-pointer mb-4">
                    <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">

                        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                            <img
                            src="https://cdn.discordapp.com/embed/avatars/3.png"
                            alt=""
                            />
                        </div>
                    </Link>
                </div>
                <div className="cursor-pointer mb-4">
                    <Link to="/" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">

                        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                            <img
                            src="https://cdn.discordapp.com/embed/avatars/4.png"
                            alt=""
                            />
                        </div>
                    </Link>
                </div>
              </div>
            </div>

            <div className="  flex flex-col-reverse justify-end items-center">
              <div className="cursor-pointer mb-4">
                <Link to="/about" className="text-black hover:bg-gray-700 hover:text-white rounded-md ">

                        <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-3xl mb-1 overflow-hidden">
                        <img
                            src="https://cdn.discordapp.com/embed/avatars/3.png"
                            alt=""
                        />
                        </div>
                </Link>
              </div>
            </div>
            
        </div>
        
    </div>
  )
}
