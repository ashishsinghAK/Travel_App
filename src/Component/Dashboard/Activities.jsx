import React from 'react'
import "./Dashboard.css"
import { MdOutlineNordicWalking } from "react-icons/md";


const Activities = () => {
  return (
    <div className='min-w-[393px] min-h-[72px] flex justify-center items-center'>
      <div className='min-w-[353px] p-2'>
        <div className='min-w-[353px] min-h-[24px] flex justify-between items-center'>
          <span className='min-w-[84px] min-h-[24px] font-[700] text-[18px]'>Activities</span>
          <span className='See min-w-[34px] min-h-[16px] font-[800] text-[13px] underline'>see all</span>
        </div>


        <div className='Activity p-4 mt-6'>
          <div className='min-h-[114px]'>
            <div className='flex gap-[10px]'>
              <button className='min-w-[73px] min-h-[28px]  Activity_Btn1 font-[600] p-2'>Day Plan</button>
              <button className='min-w-[73px] min-h-[28px]  Activity_Btn2 font-[600] p-2'> 14 Activties</button>
            </div>
          </div>

          <div className='flex justify-between mt-[-6vh] items-center'>
            <div className='Highlight Date flex items-center  justify-center w-[73px] h-[44px]'>
              <span className='rotate '>JAN</span>
              <div className='flex flex-col gap-[10px] justify-center items-center'>
                <span className='w-[33px] h-[12px] text-[12px] font-[500]'>MON</span>
                <span className='w-[33px] h-[12px] text-[12px] font-[600]'>27</span>
              </div>
            </div>

            <div className='Date w-[46px] h-[44px] flex  gap-[10px] justify-center items-center'>
              <span className='w-[33px] h-[12px] text-[12px] font-[500]'>TUE</span>
              <span className='w-[33px] h-[12px] text-[12px] font-[600]'>28</span>
            </div>

            <div className='Date w-[46px] h-[44px]  flex flex-col gap-[10px] justify-center items-center'>
              <span className='w-[33px] h-[12px] text-[12px] font-[500]'>WED</span>
              <span className='w-[33px] h-[12px] text-[12px] font-[600]'>29</span>
            </div>

            <div className='Date w-[46px] h-[44px]  flex flex-col gap-[10px] justify-center items-center'>
              <span className='w-[33px] h-[12px] text-[12px] font-[500]'>THU</span>
              <span className='w-[33px] h-[12px] text-[12px] font-[600]'>30</span>
            </div>

            <div className='Date w-[46px] h-[44px]  flex flex-col gap-[10px] justify-center items-center'>
              <span className='w-[33px] h-[12px] text-[12px] font-[500]'>FRI</span>
              <span className='w-[33px] h-[12px] text-[12px] font-[600]'>31</span>
            </div>
          </div>

        </div>

        <div className="flex items-center mt-6">
          <p className="Data1 font-[700] text-[12px] min-w-[112px] min-h-[20px]">
            Day1 27.01.2025
          </p>

          <div className="Data2 flex justify-center items-center font-[600] text-[12px] min-w-[112px] min-h-[20px] ml-4">
            <span><MdOutlineNordicWalking className="w-[14px] h-[14px] font-[700]" /></span>
            <span className="text-[12px] font-[700]">
              3 Activities
            </span>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Activities