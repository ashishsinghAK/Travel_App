import React, { useState } from 'react';
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
  const navigate = useNavigate();
  
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [travelGroup, setTravelGroup] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const travelData = {
      destination,
      duration,
      travelGroup,
    };
    localStorage.setItem('travelData', JSON.stringify(travelData));
    navigate('/Dashboard');
  };

  return (
    <div className='flex justify-center max-w-[393px] min-h-[852px] h-screen md:h-[100vh]'>
      <form onSubmit={handleSubmit} className='w-full sm:w-[353px] flex flex-col gap-10 mt-[53px] px-4 sm:px-0'>
        
        {/* div1 */}
        <div>
          <p className='text-[24px] font-bold font-mont'>Plan Your Journey, Your Way!</p>
          <p className='text-[15px] font-normal'>Let’s create your personalised travel experience</p>
        </div>

        {/* div2 - Destination */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Where would you like to go?</p>
          <div className='flex justify-between items-center bg-gray-800 rounded-md h-[42.6px] p-2 relative'>
            <span className='flex items-center gap-1 w-full'>
              <CiLocationOn />
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className='bg-gray-800 text-white outline-none w-full text-[15px] appearance-none'
              >
                <option value="" disabled>Select Destination</option>
                <option value="Paris">Paris</option>
                <option value="New York">New York</option>
                <option value="Tokyo">Tokyo</option>
                <option value="Sydney">Sydney</option>
                <option value="Dubai">Dubai</option>
              </select>
            </span>
            <span className="absolute right-3">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* div3 - Duration */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>How long will you stay?</p>
          <div className='flex justify-between items-center bg-gray-800 rounded-md h-[42.6px] p-2 relative'>
            <span className='flex items-center gap-1 w-full'>
              <CiLocationOn />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className='bg-gray-800 text-white outline-none w-full text-[15px] appearance-none'
              >
                <option value="" disabled>Select Duration</option>
                <option value="1-3 days">1-3 days</option>
                <option value="4-7 days">4-7 days</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="More than 2 weeks">More than 2 weeks</option>
              </select>
            </span>
            <span className="absolute right-3">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        {/* div4 - Travel Group */}
        <div className='flex flex-col gap-[10px]'>
          <p className='text-[18px] font-bold'>Who are you traveling with?</p>
          <div className='flex justify-center gap-[10px] flex-wrap'>

            <div className='flex flex-col gap-[10px]'>
              <div 
                className={`w-[169px] h-[50px] border rounded-lg flex justify-center items-center cursor-pointer ${travelGroup === 'Solo' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setTravelGroup('Solo')}
              >
                Solo
              </div>
              <div 
                className={`w-[169px] h-[50px] border rounded-lg flex justify-center items-center cursor-pointer ${travelGroup === 'Couple' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setTravelGroup('Couple')}
              >
                Couple
              </div>
            </div>

            <div className='flex flex-col gap-[10px]'>
              <div 
                className={`w-[169px] h-[50px] border rounded-lg flex justify-center items-center cursor-pointer ${travelGroup === 'Family' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setTravelGroup('Family')}
              >
                Family
              </div>
              <div 
                className={`w-[169px] h-[50px] border rounded-lg flex justify-center items-center cursor-pointer ${travelGroup === 'Friends' ? 'bg-blue-500 text-white' : ''}`}
                onClick={() => setTravelGroup('Friends')}
              >
                Friends
              </div>
            </div>

          </div>
        </div>

        {/* Continue Button */}
        <button 
          type="submit"
          className='h-[54px] bg-blue-800 sm:mt-[5vh] rounded-lg flex justify-center items-center cursor-pointer text-white text-[16px] font-semibold'
        >
          Continue
        </button>

      </form>
    </div>
  );
}

export default Onboarding;
