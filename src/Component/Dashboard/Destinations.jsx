import React from 'react'
import img5 from "../Images/img5.png"
import img6 from "../Images/img6.png"
import img7 from "../Images/img7.png"

const Destinations = () => {
    const data = [
        {
            image: img5,
            title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
            time: "8:15 am Morning",
            duration: "3 hours",
            pick: "From Hotel"
        },
        {
            image: img6,
            title: "Tokyo Sky Tree",
            time: "1:00 pm Afteroon",
            duration: "3 hours",
            pick: "From Nakamise Street"
        },
        {
            image: img7,
            title: "Kimono Wearing",
            time: "Anytime before 8:00pm ",
            duration: "1-2 hours",
            pick: "From Hotel"
        }
    ]
    return (
        <div className='min-w-[393px] min-h-[72px] flex justify-center items-center mt-4'>
            <div className='min-w-[353px] min-h-[413px] flex flex-col gap-[10px]'>
                {
                    data.map((detail) => (
                        <div className='flex rounded-lg'>
                            <img className='w-[127px] h-[127px]' src={detail.image} />
                            <div className='Data3 w-full flex flex-col justify-evenly gap-4 rounded-lg'>
                                <p className='w-[184px] h-[45px] font-[700] text-[14px]'>{detail.title}</p>
                                <div>
                                    <p className='flex gap-5'>
                                        <span className='w=[44px] h-[16px] text-[12px] font-[700]'>Timing:</span>
                                        <span className='w=[99px] h-[16px] text-[12px] font-[400]'>{detail.time}</span>
                                    </p>
                                    <p className='flex gap-5'>
                                        <span className='w=[44px] h-[16px] text-[12px] font-[700]'>Duration:</span>
                                        <span className='w=[99px] h-[16px] text-[12px] font-[400]'>{detail.duration}</span>
                                    </p>
                                    <p className='flex gap-5'>
                                        <span className='w=[44px] h-[16px] text-[12px] font-[700]'>Pick up:</span>
                                        <span className='w=[99px] h-[16px] text-[12px] font-[400]'>{detail.pick}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Destinations
