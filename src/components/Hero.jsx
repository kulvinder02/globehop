import React, { useState } from 'react'
import Logo from '../assets/webp/logo.webp'
import Manimg from '../assets/webp/hero-man-img.webp'
import { Beg, CalendarIcon, FlightIcon, LocationIcon } from './coman/icons';


export const Hero = () => {
    //  ================= Navbar function ================= //
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    }
    else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='bg-hero-pattern bg-cover bg-no-repeat relative'>
            <span className='absolute right-0 top-[40%] lg:top-[20%]'> <Beg /> </span>
            {/*  ===================================================  navbar  ===================================================  */}
            <div className=' mx-auto max-w-[1140px] container px-4 '>
                <div className='h-[100px]  flex items-center justify-between overflow-hidden'>
                    <a href="logo" className='flex items-center relative z-40'> <img src={Logo} alt="logo" className='relative z-50 h-[60px] w-[50px] lg:h-[86px] lg:w-[71px]' /> <h2 className='text-[16px] lg:text-[20px] text-white  font-ff_montserrat ms-[8px] lg:ms-[16px] font-bold'>Globehop</h2></a>
                    <ul className={`${show ? "left-0" : ""} duration-500 bg-[black]    w-full min-h-screen top-[0] -left-full fixed gap-[33px] lg:gap-[36px] flex flex-col justify-center items-center lg:bg-transparent lg:flex-row lg:static lg:w-auto lg:min-h-[100px] z-20 `}>
                        <li className=''><a href="#" onClick={() => setShow(!show)} className='text-[24px] sm:text-[20px] lg:text-[16px]   font-ff_inter  font-normal text-white hover:text-[white] transition-all duration-300 ease-in-out '>Home</a></li>
                        <li className=''><a href="#about" onClick={() => setShow(!show)} className=' text-[24px] sm:text-[20px] lg:text-[16px]   font-ff_inter  font-normal text-[#B2B6BD] hover:text-[white] transition-all duration-300 ease-in-out'>About Us </a></li>
                        <li className=''><a href="#Destination" onClick={() => setShow(!show)} className='text-[24px] sm:text-[20px] lg:text-[16px]   font-ff_inter  font-normal text-[#B2B6BD] hover:text-[white] transition-all duration-300 ease-in-out '>Destination</a></li>
                        <li className=''><a href="#Why_globehop" onClick={() => setShow(!show)} className=' text-[24px] sm:text-[20px] lg:text-[16px]   font-ff_inter  font-normal text-[#B2B6BD] hover:text-[white] transition-all duration-300 ease-in-out'>Trip Plan    </a></li>
                        <li className=''><a href="#contact" onClick={() => setShow(!show)} className='text-[24px] sm:text-[20px] lg:text-[16px]   font-ff_inter  font-normal text-[#B2B6BD] hover:text-[white] transition-all duration-300 ease-in-out '>Contact   </a></li>

                    </ul>
                    <button className='text-[14px] sm:text-[16px] relative z-20  px-[10px] py-[8px] sm:px-[23.3px] sm:py-[13px] text-white rounded-[4px] bg-[#238AED] font-ff_inter font-medium hover:bg-[black] border-[1px] border-transparent hover:border-white transition-all duration-300'>
                        Get Started
                    </button>
                    <button className='lg:hidden z-30 transwqition-all duration-300 ease-in-out sm:mr-[25px]' onClick={() => { setShow(!show); }}> {show ?
                        (
                            <div className="z-20 relative">
                                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                                <span className="flex bg-white absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
                            </div>
                        ) : (
                            <div className="z-20 relative">
                                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6"></span>
                                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                                <span className="flex bg-white h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                            </div>
                        )}</button>
                </div>
            </div>
            {/*  ================================================== Hero Section ==================================================  */}
            <div className='mx-auto max-w-[1140px] container px-4'>
                <div className='flex flex-wrap justify-center pb-5'>
                    <div className='lg:w-[51%]'>
                        <div className='lg:text-start text-center mt-10 sm:mt-[98px] md:px-16 lg:px-0'>
                            <h3 className='text-[22px] sm:text-[32px] font-medium text-[#85ABFF] font-ff_inter lg:text-start'>Welcome to Globehop</h3>
                            <h2 className='text-[36px] md:text-[42px] lg:text-[52px] xl:text-[60px] font-bold mt-[12px] font-ff_trirong text-white lg:text-start leading-[120%]'>Your Gateway to Global Adventure!</h2>
                            <p className='font-normal mt-[10px] xl:mt-[24px] text-[16px] leading-[150%] text-[#ABABAB] font-ff_inter lg:text-start'>At Globehop, we believe that the world is meant to be explored, and we're here to make your travel dreams a reality. Whether you're seeking the thrill of bustling city streets, the serenity of remote landscapes, or the cultural richness of far-flung destinations, we've got you covered.</p>
                            <button className='text-[16px] mt-[22px] sm:mt-[24px] px-[23.4px] py-[12.7px] text-white rounded-[4px] bg-[#238AED]  font-ff_inter font-medium hover:bg-[black] border-[1px] border-transparent hover:border-white transition-all duration-300'>
                                Explore More
                            </button>
                        </div>
                    </div>
                    <div className='lg:w-[49%]'>
                        <div className='flex lg:justify-end lg:items-end'>
                            <img src={Manimg} alt="man" className='w-[538px] h-[380px] 575:h-[480px] md:w-[406px] lg:h-[585.22px]  lg:w-[538px] mt-10 lg:mt-0 transform lg:translate-x-[30px] xl:translate-x-[60px]' />
                        </div>
                    </div>
                </div>
                {/*  ====================================  Location , Date Time , Flights ====================================   */}
            </div>
            <div className='container max-w-[1140px] mx-auto px-4 xl:px-0'>
                <div className='575:px-[70px] md:px-[0px] flex justify-center items-center text-center'>
                    <div className='bg-white shadow-[1px_1px_40px_0px_#0000001f] rounded-md w-[100%] lg:rounded-full transform translate-y-[20%] sm:translate-y-[50%]'>
                        <div className='py-[30px] flex px-[20px] lg:px-[68px] flex-wrap justify-center items-center'>
                            <div className='w-full sm:w-[50%] md:w-[33%] '>
                                <div className='flex  items-center'>
                                    <LocationIcon />
                                    <div className='text-start ms-[24px]'>
                                        <p className='text-[16px] font-ff_inter font-semibold text-[#000000]'>Location</p>
                                        <p className='text-[16px] font-ff_inter font-normal leading-[150%] text-[#000000]'>Bali, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full sm:w-[50%] md:w-[33%]'>
                                <div className='flex  items-center mt-[40px] sm:mt-[0px] sm:justify-center border-[#666666] sm:border-l-[1px] md:border-r-[1px]'>
                                    <CalendarIcon />
                                    <div className='text-start ms-[24px]'>
                                        <p className='text-[16px] font-ff_inter font-semibold text-[#000000]'>Date and Time</p>
                                        <p className='text-[16px] font-ff_inter font-normal leading-[150%] text-[#000000]'>Next week</p>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full  md:w-[33%]'>
                                <div className='flex  items-center sm:justify-center md:justify-end mt-[40px] md:mt-[0px]'>
                                    <FlightIcon />
                                    <div className='text-start ms-[24px]'>
                                        <p className='text-[16px] font-ff_inter font-semibold text-[#000000]'>Flights</p>
                                        <p className='text-[16px] font-ff_inter font-normal leading-[150%] text-[#000000]'>From Delhi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
