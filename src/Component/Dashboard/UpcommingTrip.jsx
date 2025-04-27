import React from 'react'
import "./Dashboard.css"
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import { MdOutlineArrowOutward } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const UpcommingTrip = () => {
  return (
    <div className=' w-[353px] '>
      <h3 className='Heading min-w-[177px] min-h-[24px] text-[18px]'>Your Upcoming Trip</h3>

      {/* Make this container relative */}
      <div className='mt-[20px] relative w-fit'>

        {/* Image */}
        <img src={img1} alt="" className='w-[353px] h-[330px] rounded-lg' />

        {/* TOP DIV - City and Date */}
        <div className='absolute top-4 left-4 right-4 flex justify-between'>

          <div className='flex flex-col'>
            <span className='font-[900] text-[40px] min-w-[206px] min-h-[43px]'>TOKYO</span>
            <span className='min-w-[138px] min-h-[16px] text-[12px] font-[600]'>27.01.2025 - 02.02.2025</span>
          </div>
          <span>
            <MdOutlineArrowOutward className='min-w-[20px] min-h-[20px] mt-[10px]' />
          </span>

        </div>

        {/* BOTTOM BLUR LAYER */}
        <div className='absolute bottom-0 left-0 w-full h-[50px] bg-black/5 backdrop-blur-[3px] rounded-b-md'></div>


        {/* BOTTOM DIV - Days and Activities */}
        <div className='absolute bottom-4 left-4 right-4 flex justify-evenly'>

          <div className='flex items-center min-w-[77px] min-h-[28px] justify-between'>
            <span className='w-[28px] h-[28px] rounded-3xl IconColor flex justify-center items-center'>
              <BiTimeFive className='w-[16px] h-[16px] Icon' />
            </span>
            <span className='flex flex-col'>
              <span className='min-w-[45px] min-h-[12px] text-[12px] font-[600]'>8 Days</span>
              <span className='min-w-[45px] min-h-[10px] text-[10px] font-[400]'>Duration</span>
            </span>
          </div>

          <div className='flex items-center min-w-[77px] min-h-[28px] justify-between'>
            <span className='w-[28px] h-[28px] rounded-3xl IconColor flex justify-center items-center'>
              <BsJournalBookmarkFill className='w-[16px] h-[16px] Icon' />
            </span>
            <span className='flex flex-col'>
              <span className='min-w-[45px] min-h-[12px] text-[12px] font-[600]'>4 (2M,2F)</span>
              <span className='min-w-[45px] min-h-[10px] text-[10px] font-[400]'>Group Size</span>
            </span>
          </div>

          <div className='flex items-center min-w-[77px] min-h-[28px] justify-between'>
            <span className='w-[28px] h-[28px] rounded-3xl IconColor flex justify-center items-center'>
              <BsJournalBookmarkFill className='w-[16px] h-[16px] Icon' />
            </span>
            <span className='flex flex-col'>
              <span className='min-w-[45px] min-h-[12px] text-[12px] font-[600]'>14</span>
              <span className='min-w-[45px] min-h-[10px] text-[10px] font-[400]'>Activities</span>
            </span>
          </div>

        </div>

      </div>

      {/* Flight info */}

      <div className='flight h-[122px] flex justify-between p-4 mt-[4vh] rounded-lg'>
          {/* left part  */}
          <div>
            <p className='font-[700] text-[16px] min-w-[145px] mn-h-[24px]'>Flight Details</p>
            <p className='font-[400] text-[14px] min-w-[145px] mn-h-[20px]'>26.01.2025, 10:50 am</p>

            <div className='flex items-center'>
              <span>
                <h2 className='font-[700] text-[16px] min-w-[66px] mn-h-[16px]'>DEL</h2>
                <h2 className='font-[400] text-[12px] min-w-[68px] mn-h-[16px]'>Delhi, India</h2>
              </span>
              <IoIosArrowRoundForward className='min-w-[13.54px] mn-h-[17.8px]'/>
              <span>
              <h2>NRT</h2>
              <h2>Narita, Tokyo</h2>
              </span>
            </div>
          </div>

          {/* right part  */}
          <div>
            <span className='font-[800] text-[10px] min-w-[34px] min-h-[16px] underline'>see all</span>
            {/* <img src={img2} alt="" className='font-[800] text-[10px] min-w-[367.81px] min-h-[381.53px] mt-[-3]'/> */}
          </div>
      </div>


    </div>
  )
}

export default UpcommingTrip;
