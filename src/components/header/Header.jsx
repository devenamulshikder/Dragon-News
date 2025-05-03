import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png"
import Latest from './Latest';

const Header = () => {
   const [date, setDate] = useState({
     dayName: new Date().toLocaleString("en-US", { weekday: "long" }),
     monthName: new Date().toLocaleString("en-US", { month: "long" }),
     day: new Date().getDate(),
     month: new Date().getMonth() + 1,
     year: new Date().getFullYear(),
   });
     useEffect(() => {
       const timer = setInterval(() => {
         const newDate = new Date();
         setDate({
           dayName: newDate.toLocaleString("en-US", { weekday: "long" }),
           monthName: newDate.toLocaleString("en-US", { month: "long" }),
           day: newDate.getDate(),
           month: newDate.getMonth() + 1,
           year: newDate.getFullYear(),
         });
       }, 86400000);
       return () => clearInterval(timer);
     }, []);
    return (
      <div className="max-w-7xl mx-auto my-8">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" />
          <p className="text-[#706F6F] my-2">
            Journalism Without Fear or Favour
          </p>
          <div className="flex gap-1">
            <h1>{date.dayName}, </h1>
            <p className="text-[#706F6F]">{date.monthName}</p>
            <p className="text-[#706F6F]">{date.day},</p>
            <h1 className="text-[#706F6F]">{date.year}</h1>
          </div>
        </div>
      </div>
    );
};

export default Header;