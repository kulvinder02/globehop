import React from 'react'
import ExpertTravel from '../assets/webp/expert-travel.webp'
import PersonalizedTravel from '../assets/webp/personalized-travel.webp'
import CommitmentTravel from '../assets/webp/commitment-travel.webp'

const WhyGlobehop = () => {
    return (
        <div className='px-3 xl:px-[50px] mb-10' id='Why_globehop'>

            <div className='bg-[#000B23] rounded-[30px] relative bg-cover bg-center bg-no-repeat mt-10 md:mt-24 xl:mt-[120px] overflow-hidden'>
                {/* ================ Background Blur Ellips ============================= */}
                <div className='bg-[#0050FF] w-[198px] h-[198px] rounded-full blur-[120px] absolute bottom-0 left-0'></div>
                <div className='bg-[#0050FF] w-[198px] h-[198px] rounded-full blur-[120px] absolute bottom-0 right-0'></div>

                <div className=' mx-auto max-w-[1140px] container'>
                    <div className='flex flex-wrap px-3 xl:px-0 pt-[50px] justify-center relative '>
                        <div className='md:w-[50%] px-3'>
                            <h2 className='font-ff_trirong text-[30px] md:text-[48px] text-center md:text-start font-semibold text-white'>Why <span className='text-[#739FFF]'>Globehop?</span></h2>

                        </div>
                        <div className='md:w-[50%]   px-1'>
                            <p className='text-[16px] font-normal leading-[150%] text-[#FFFFFF] text-center  md:text-start font-ff_inter'>We've created a platform designed to simplify the travel experience and ensure that every journey is nothing short of extraordinary. Here are just a few reasons why Globehop stands out from the crowd:</p>

                        </div>
                        {/* ================= About Destinations Details { Cards } ==================== */}
                        <div className='sm:w-[50%] md:w-[40%]  lg:w-[33%] 575:px-[80px] md:px-[10px] px-3 mt-[30px]'>
                            <div className='bg-card bg-cover bg-no-repeat group justify-center items-center lg:items-start flex flex-col ps-[16px] pe-[12px] pb-10'>
                                <img src={ExpertTravel} alt="expert-travel" className='w-[332px] h-[195px] group-hover:scale-[1.02] transition-all duration-300 mt-12' />
                                <h4 className='text-[20px] font-ff_inter  font-semibold text-black leading-[120%] my-[14px] text-start'>Expert travel guides</h4>
                                <p className='text-[16px]  font-ff_inter font-normal leading-[150%] text-center lg:text-start xl:pe-[10px] mb-1 text-[#4d4d4d]'>Our team of seasoned travelers and local experts are passionate about sharing their knowledge and expertise to help you make the most of your trip... <span className='text-black cursor-pointer'>Read More</span> </p>
                            </div>
                        </div>
                        <div className='sm:w-[50%] md:w-[40%] lg:w-[33%] 575:px-[80px] md:px-[10px] px-3 mt-[16px]  md:mt-[30px]'>
                            <div className='bg-card bg-cover bg-no-repeat justify-center items-center lg:items-start  flex flex-col group ps-[16px] pe-[12px] pb-10'>
                                <img src={PersonalizedTravel} alt="expert-travel" className='w-[332px] h-[195px] group-hover:scale-[1.02] transition-all duration-300 mt-12' />
                                <h4 className='text-[20px] font-ff_inter  font-semibold text-black leading-[120%] my-[14px] md:my-[9px] lg:my-[14px] lg:text-start '>Personalized Recommendation :</h4>
                                <p className='text-[16px]  font-ff_inter font-normal leading-[150%] text-center lg:text-start text-[#4d4d4d] md:mt-[-10px] 991:mt-2 xl:pe-[10px] lg:mt-[-14px] xl:mt-[2px]'>We understand that every traveler is unique, which is why we offer personalized recommendations tailored to your preferences and.... <span className='text-black cursor-pointer'>Read More</span> </p>
                            </div>
                        </div>
                        <div className='sm:w-[50%] md:w-[40%] lg:w-[33%] 575:px-[80px] md:px-[10px] px-3 mt-[16px] md:mt-[6px] lg:mt-[30px]'>
                            <div className='bg-card bg-cover bg-no-repeat justify-center items-center lg:items-start group  flex flex-col ps-[16px] pe-[12px] pb-10'>
                                <img src={CommitmentTravel} alt="expert-travel" className='w-[332px] h-[195px] group-hover:scale-[1.02] transition-all duration-300 mt-12' />
                                <h4 className='text-[20px] font-ff_inter  font-semibold text-black leading-[120%] my-[14px] text-start'>Commitment to Excellence</h4>
                                <p className='text-[16px]  font-ff_inter font-normal leading-[150%] text-center lg:text-start xl:pe-[10px] text-[#4d4d4d]'>At Globehop, we're committed to providing exceptional service and support every step of the way. Whether you have question of your integrity or... <span className='text-black cursor-pointer'>Read More</span> </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center pb-[40px] sm:pb-[72px] relative mt-[30px]'>
                        <button className='text-[16px] px-[23.5px] py-[13px] text-white rounded-[4px] bg-[#238AED]  font-ff_inter font-medium hover:bg-[black] border-[1px] border-transparent hover:border-white transition-all duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyGlobehop