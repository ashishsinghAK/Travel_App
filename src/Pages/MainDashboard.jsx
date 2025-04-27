import React from 'react'
import "../App.css"
import UpcommingTrip from '../Component/Dashboard/UpcommingTrip'
import NavBar from '../Component/Dashboard/NavBar'
import Accomodation from '../Component/Dashboard/Accomodation'
import Activities from '../Component/Dashboard/Activities'
import Destinations from '../Component/Dashboard/Destinations'

const MainDashboard = () => {
  return (
    <div className='Main max-w-[393px] flex flex-col min-h-[1690px] items-center mx-auto relative'>

      <div className='flex min-w-[373px] justify-between items-center mt-[20px] p-[1vw]'>

        <div className='min-w-[162px] min-h-[50px] flex flex-col'>
          <h2 className='Intro1 min-w-[162px] min-h-[32px] text-[24px]'>Hello Chhavi!</h2>
          <span className='Intro2 min-h-[22px] text-[16px]'>Ready for the trip?</span>
        </div>

        <div className='Logo w-[38px] h-[38px] border flex justify-center 
        items-center rounded-[19px] p-[8px]'>
          C
        </div>

      </div>

      <UpcommingTrip />

      {/* Push content up with margin, since navbar is fixed */}
      <div className='mb-[80px]'></div>

      {/* Fixed NavBar */}
      <div className='fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[393px]'>
        <NavBar />
      </div>


      <Accomodation />

      <Activities />

      <Destinations/>

    </div>
  )
}

export default MainDashboard
