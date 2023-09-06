import React, { useEffect, useState } from 'react';
//import "./PChart.css";
import { PieChart } from "react-minimal-pie-chart";

function PChart() {
  const [data] = useState([
    { title: "One", value: 1, color: "red" },
    { title: "Two", value: 2, color: "yellow" },
    { title: "Three", value: 3, color: "green" },
    { title: "Four", value: 4, color: 'blue' },
  ]);

  

  return (
    <div  className="mt-2 flex flex-col rounded-2xl items-center justify-around w-full bg-green-300 md:flex-row">
        <div className="text-4xl text-center font-bold flex flex-col ">
            {data.map((item, index) => (
                <div key={index} style={{ color: item.color }}>
                    {item.title} 
                    <span className='pl-5 '>
                     {item.value}
                    </span>
                </div>
            ))}
        </div>
        <div>

            <PieChart
                animate
                animationDuration={40}
                animationEasing="ease-in"
                center={[50, 50]}
                data={data}
                lineWidth={25}
                lengthAngle={360}
                paddingAngle={0}
                radius={25}
                rounded
                startAngle={0}
                viewBoxSize={[100, 100]}
                labelStyle={{
                //fontSize: "6px",
                //fill: "#FFFFFA", // Changed from fontColor to fill
                //fontWeight: "500",
                //fontFamily: "monospace"
                }}
                // label={(dataEntry) => dataEntry.title}
                // labelPosition={70}
            />
        </div>
    </div>
  );
}

export default PChart;
