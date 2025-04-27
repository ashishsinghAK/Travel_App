import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Onboarding = () => {
  return (
    <div className='flex justify-center max-w-[393px] min-h-[852px] h-screen md:h-[100vh]'>
      <form className='w-full sm:w-[353px] flex flex-col gap-10 mt-[53px] px-4 sm:px-0'>
        
        {/* div1 */}
        <div>
          <p className='text-[24px] font-bold font-mont'>Plan Your Journey, Your Way!</p>
          <p className='text-[15px]  font-normal'>Let’s create your personalised travel experience</p>
        </div>

        {/* div2 */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Where would you like to go?</p>
          <div className='flex justify-between items-center bg-gray-800 rounded-md h-[42.6px] p-2 text-white'>
            <span className='flex items-center gap-1'>
              <CiLocationOn />
              <p>Select Destination</p>
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* div3 */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>How long will you stay?</p>
          <div className='flex justify-between items-center bg-gray-800 rounded-md h-[42.6px] p-2 text-white'>
            <span className='flex items-center gap-1'>
              <CiLocationOn />
              <p>Select Duration</p>
            </span>
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* div4 */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Who are you traveling with?</p>
          <div className='flex justify-center gap-[10px] flex-wrap'>
            
            <div className='flex flex-col gap-[10px]'>
              <div className='w-[169px] h-[50px] border rounded-lg flex justify-center items-center'>
                Solo
              </div>
              <div className='w-[169px] h-[50px] border rounded-lg flex justify-center items-center'>
                Couple
              </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <div className='w-[169px] h-[50px] border rounded-lg flex justify-center items-center'>
                Family
              </div>
              <div className='w-[169px] h-[50px] border rounded-lg flex justify-center items-center'>
                Friends
              </div>
            </div>

          </div>
        </div>

        {/* Continue Button */}
        <Link 
          to="/Dashboard" 
          className='h-[54px] bg-blue-800 sm:mt-[5vh] rounded-lg flex justify-center items-center cursor-pointer text-white text-[16px] font-semibold'
        >
          Continue
        </Link>

      </form>
    </div>
  );
}

export default Onboarding;
