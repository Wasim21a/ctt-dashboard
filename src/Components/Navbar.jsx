import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="bg-gray-300 rounded-2xl sticky top-0">
            <div className="h-10 flex flex-row justify-between px-5">
                <div className="hidden sm:ml-6 sm:block">
                    <div className="flex flex-row justify-end space-x-4">
                    </div>
                </div>
                <div className="hidden border-2 rounded-3xl  bg-gray-200 sm:ml-6 sm:block">
                    <div className="flex flex-row justify-end ">
                        <div className="">
                            <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                <button
                                    className=" flex items-center rounded-lg  px-3 py-2 "
                                    type="button"
                                    id="button-addon1"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="gray-600"
                                            className="h-5 w-5 "
                                            >
                                            <path
                                            fill-rule="evenodd"
                                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                            clip-rule="evenodd" />
                                        </svg>
                                </button>
                                <input
                                    type="search"
                                    className="h-9 pl-2 rounded-3xl focus:outline-none "
                                    placeholder="Search Here"
                                    aria-label="Search"
                                    aria-describedby="button-addon1" 
                                />

                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center ">
                    <div>
                        <input
                            className=" mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault01" 
                        />
                    </div>
                    <div className='pl-5'>
                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
