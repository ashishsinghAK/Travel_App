import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Onboarding = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedCompanion, setSelectedCompanion] = useState('');

  const handleCompanionSelect = (companion) => {
    setSelectedCompanion(companion);
  };

  return (
    <div className='flex justify-center w-full'>
      <form className='w-full sm:w-[353px] flex flex-col gap-10 mt-[53px] px-4 sm:px-0'>
        
        {/* div1 */}
        <div>
          <p className='text-[24px] sm:text-[32px] font-bold font-mont'>Plan Your Journey, Your Way!</p>
          <p className='text-[15px] sm:text-[20px] font-normal'>Let’s create your personalised travel experience</p>
        </div>

        {/* div2 - Destination Dropdown */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Where would you like to go?</p>
          <div className='relative'>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='w-full bg-gray-800 text-white rounded-md h-[42.6px] p-2 appearance-none'
            >
              <option value='' disabled>Select Destination</option>
              <option value='paris'>Paris</option>
              <option value='new_york'>New York</option>
              <option value='tokyo'>Tokyo</option>
              <option value='london'>London</option>
            </select>
            <div className='absolute right-2 top-2'>
              <IoIosArrowDown className='text-white' />
            </div>
          </div>
        </div>

        {/* div3 - Duration Dropdown */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>How long will you stay?</p>
          <div className='relative'>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className='w-full bg-gray-800 text-white rounded-md h-[42.6px] p-2 appearance-none'
            >
              <option value='' disabled>Select Duration</option>
              <option value='3_days'>3 Days</option>
              <option value='5_days'>5 Days</option>
              <option value='1_week'>1 Week</option>
              <option value='2_weeks'>2 Weeks</option>
            </select>
            <div className='absolute right-2 top-2'>
              <IoIosArrowDown className='text-white' />
            </div>
          </div>
        </div>

        {/* div4 - Travel Companions Buttons (retaining original style) */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Who are you traveling with?</p>
          <div className='flex justify-between gap-[10px] flex-wrap '>
            
            <div className='flex flex-col gap-[10px] '>
              <button
                type='button'
                className={`w-full sm:w-[169px] h-[50px] border cursor-pointer rounded-lg flex text-white justify-center items-center ${selectedCompanion === 'Solo' ? 'bg-blue-800 text-white' : 'text-black'}`}
                onClick={() => handleCompanionSelect('Solo')}
              >
                Solo
              </button>
              <button
                type='button'
                className={`w-full sm:w-[169px] h-[50px] border cursor-pointer text-white rounded-lg flex justify-center items-center ${selectedCompanion === 'Couple' ? 'bg-blue-800 text-white' : 'text-black'}`}
                onClick={() => handleCompanionSelect('Couple')}
              >
                Couple
              </button>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <button
                type='button'
                className={`w-full sm:w-[169px] h-[50px] border cursor-pointer text-white rounded-lg flex justify-center items-center ${selectedCompanion === 'Family' ? 'bg-blue-800 text-white' : 'text-black'}`}
                onClick={() => handleCompanionSelect('Family')}
              >
                Family
              </button>
              <button
                type='button'
                className={`w-full sm:w-[169px] h-[50px] border cursor-pointer text-white rounded-lg flex justify-center items-center ${selectedCompanion === 'Friends' ? 'bg-blue-800 text-white' : 'text-black'}`}
                onClick={() => handleCompanionSelect('Friends')}
              >
                Friends
              </button>
            </div>

          </div>
        </div>

        {/* Continue Button */}
        <Link
          to="/Dashboard"
          className='h-[54px] bg-blue-800 sm:mt-[5vh] rounded-lg flex justify-center items-center text-white text-[16px] font-semibold'
        >
          Continue
        </Link>

      </form>
    </div>
  );
};

export default Onboarding;
