import React from 'react';
import "./Dashboard.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

const Accomodation = () => {
    const arr = [
        {
            image: img3,
            rating: "4.0",
            title: "Shinagawa Prince Hotel",
            check_in: '26.01.2025, 11:15 pm',
            check_out: "28.01.2025, 11:15 am",
            day: "2 Nights",
            icon: <FaRegCheckCircle className='text-green-500' />,
            status: "Confirmed"
        },
        {
            image: img4,
            rating: "4.1",
            title: "Mercure Tokyo Hotel",
            check_in: '28.01.2025, 6:00 pm',
            check_out: "30.01.2025, 11:15 am",
            day: "2 Nights",
            icon: <PiClockCounterClockwiseFill className='text-yellow-500' />,
            status: "Pending"
        }
    ];

    return (
        <div className='min-w-[393px] min-h-[72px] flex flex-col justify-between items-center mt-[-8vh]'>

            {/* Header Section */}
            <div className='min-w-[353px] flex justify-between items-center mb-2'>
                <span className='min-w-[136px] min-h-[24px] text-[18px] font-[700]'>Accomodation</span>
                <span className='min-w-[34px] min-h-[16px] text-[10px] font-[800] See cursor-pointer underline'>See all</span>
            </div>

            {/* Cards Section */}
            <div className='w-[353px] flex gap-4 '>

                {
                    arr.map((detail, index) => (
                        <div key={index} className='Hotel min-w-[198px] min-h-[239px] rounded-lg flex flex-col p-1'>

                            <img src={detail.image} alt="" className='w-[198px] h-[124px] object-cover rounded-lg' />

                            <p className='font-[700] text-[14px] min-w-[182px] min-h-[15px] mb-1'>{detail.title}</p>

                            <p className='text-[13px] min-w-[182px] min-h-[16px] '>Check in: {detail.check_in}</p>
                            <p className='text-[13px] min-w-[182px] min-h-[16px] '>Check out: {detail.check_out}</p>

                            {/* Bottom section */}
                            <div className='min-w-[182px] min-h-[20px] flex justify-between items-center mt-auto'>
                                <span className='text-[12px] font-[600]'>{detail.day}</span>
                                <div className='flex items-center gap-1'>
                                    {detail.icon}
                                    <span className='text-[12px] font-[600]'>{detail.status}</span>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Accomodation;
