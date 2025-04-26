import React from 'react';
import { BiSignal4 } from "react-icons/bi";
import { FaWifi } from "react-icons/fa";
import { BsBatteryFull } from "react-icons/bs";

const StatusBar = () => {
  return (
    <div className='flex justify-center w-[393px]'>
      <div className='flex items-center w-[377px] h-[24px]'>
        {/* left part */}
        <span className='w-[35px] h-[22px]'>9:41</span>

        {/* right part */}
        <div className='flex items-center justify-center w-[75.4px] h-[13px] ml-auto'>
          <span className='w-[18px] h-[12px] mt-[6.5px]'><BiSignal4 /></span>
          <span className='w-[17px] h-[12px] mt-[6.5px] ml-[5px]'><FaWifi /></span>
          <span className='w-[27.4px] h-[13px] mt-[6.5px] ml-[5px]'><BsBatteryFull /></span>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
