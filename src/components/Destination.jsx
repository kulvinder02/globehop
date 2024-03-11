import React from 'react'
import Bali from '../assets/webp/bali-img.webp'
import SouthAfrica from '../assets/webp/south-africa.webp'
import Dubai from '../assets/webp/dubai.webp'
import Singapore from '../assets/webp/singapore.webp'
import Japan from '../assets/webp/japan.webp'
import India from '../assets/webp/india.webp'

const Destination = () => {
    return (
        <div id='Destination'>
            <div className='mx-auto max-w-[1140px] container px-4 xl:px-0 mt-[110px] md:mt-[130px] xl:mt-[177px]'>
                <h2 className='text-center font-ff_trirong text-[30px] md:text-[48px] font-semibold leading-[120%] text-[#000700] md:px-16 xl:px-0'>Find Your <span className='text-[#2859C5]'>Destination</span></h2>
                <p className='text-[16px] font-normal leading-[150%] px-5 mt-[8px] xl:mt-[16px] text-black font-ff_inter text-center 991:px-36 lg:px-30 xl:px-[100px]'>Explore our extensive range of destinations, from iconic landmarks to hidden gems off the beaten path. From the sun-kissed beaches of Bali to the majestic peaks of the Swiss Alps, there's a world of wonder waiting to be uncovered.</p>

                <div className='flex flex-wrap mt-10 lg:mt-[60px] justify-center'>
                    {/* ============================ Destinations for Travels Images ============================ */}
                    <div className='sm:w-[33%] px-2 lg:px-3'>
                        <div className='rounded-[10px] group overflow-hidden shadow-[1px_1px_50px_0px_#00000014] mb-3 sm:mb-0'>
                            <img src={Bali} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300  lg:h-[300px]' />
                            <h4 className='text-[#2859C5] font-ff_inter  text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>Bali</h4>
                        </div>
                    </div>
                    <div className='sm:w-[33%] px-2 lg:px-3'>
                        <div className='rounded-[10px] overflow-hidden shadow-[1px_1px_50px_0px_#00000014] group'>
                            <img src={SouthAfrica} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300 lg:h-[300px]' />
                            <h4 className='text-[#2859C5] font-ff_inter  text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>South Africa</h4>
                        </div>
                    </div>
                    <div className='sm:w-[33%] px-2 lg:px-3 mt-3 sm:mt-0'>
                        <div className='rounded-[10px] overflow-hidden shadow-[1px_1px_50px_0px_#00000014] group'>
                            <img src={Dubai} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300 lg:h-[300px]' />
                            <h4 className='text-[#2859C5] font-ff_inter  text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>Dubai</h4>
                        </div>
                    </div>
                    <div className='sm:w-[33%] px-2 lg:px-3 mt-3 lg:mt-6'>
                        <div className='rounded-[10px] overflow-hidden shadow-[1px_1px_50px_0px_#00000014] group'>
                            <img src={Singapore} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300 lg:h-[300px]' />
                            <h4 className='text-[#2859C5] font-ff_inter  text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>Singapore</h4>
                        </div>
                    </div>
                    <div className='sm:w-[33%] px-2 lg:px-3 mt-3 lg:mt-6'>
                        <div className='rounded-[10px] overflow-hidden shadow-[1px_1px_50px_0px_#00000014] group'>
                            <img src={Japan} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300 lg:h-[300px]' />
                            <h4 className='text-[#2859C5]  font-ff_inter text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>Japan</h4>
                        </div>
                    </div>
                    <div className='sm:w-[33%] px-2 lg:px-3 mt-3 lg:mt-6'>
                        <div className='rounded-[10px] overflow-hidden shadow-[1px_1px_50px_0px_#00000014] group'>
                            <img src={India} alt="bali" className='lg:w-[364px] h-[180px] md:h-[250px] group-hover:scale-[1.03] transition-all duration-300 lg:h-[300px]' />
                            <h4 className='text-[#2859C5] font-ff_inter  text-[20px] md:text-[24px] font-bold leading-[150%] text-center py-[11px]'>India</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination