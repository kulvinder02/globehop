import React from 'react'
import Logo from '../assets/webp/logo.webp'
import { MailIcon, TwiterIcon } from './coman/icons'

const Footer = () => {
    return (
        <div className='bg-[#000B23] relative overflow-hidden' id='contact'>
        {/* ================================= Blur Elips==================================== */}
            <div className='bg-[#0050FF] w-[198px] h-[198px] rounded-full blur-[130px] absolute bottom-[30%] left-[-9%]'></div>
            <div className='bg-[#0050FF] w-[198px] h-[198px] rounded-full blur-[160px] absolute bottom-[30%] left-[50%]'></div>
            <div className='bg-[#0050FF] w-[198px] h-[198px] rounded-full blur-[130px] absolute bottom-[0%] right-[-9%]'></div>

            <div className='mx-auto max-w-[1140px] container px-4'>
                <div className='flex flex-wrap px-4 pt-[49px] pb-[60px] relative'>
                    {/*  ================================== Logo , Links ==================================  */}
                    <div className='lg:w-[50%]'>
                        <a href="logo" className='flex items-center relative z-40'> <img src={Logo} alt="logo" className='relative z-50 h-[60px] w-[50px] lg:h-[74px] lg:w-[60px]' /> <h2 className='text-[16px] lg:text-[20px] text-white  font-ff_montserrat ms-[8px] font-bold'>Globehop</h2></a>
                        <p className='text-[16px] font-normal text-[#b2b6be] font-ff_inter leading-[150%] mt-[8px] xl:pe-[270px]'>Creating verifiable climate product for the new generation.</p>
                        <div className='mt-[49px] flex items-center gap-[16px]'>
                            <a href="https://mail.google.com/mail/u/0/#inbox" className='transition-all duration-300 transform hover:translate-y-[-6px]'><MailIcon /> </a>
                            <a href="https://twitter.com/home?lang=en" className='transition-all duration-300 transform hover:translate-y-[-6px]'><TwiterIcon /> </a>
                        </div>
                    </div>
                    {/*=================================  Call , mail , security links ================================= */}
                    <div className='w-full lg:w-[50%] flex flex-wrap mt-[28px]'>
                        <div className=' w-[50%] sm:w-[33%]'>
                            <ul>
                                <li className='text-[16px] font-normal text-white font-ff_inter mb-[18px]'>Home</li>
                                <li className='mb-[16px]'><a href="" className='text-[#b2b6be] font-ff_inter font-normal hover:text-[white] transition-all duration-300 ease-in-out'>Our Product</a></li>
                                <li className='mb-[16px]'><a href="" className='text-[#b2b6be] font-ff_inter font-normal hover:text-[white] transition-all duration-300 ease-in-out'>About Us</a></li>
                                <li className='mb-[16px]'><a href="" className='text-[#b2b6be] font-ff_inter font-normal hover:text-[white] transition-all duration-300 ease-in-out'>Research</a></li>
                            </ul>
                        </div>
                        <div className=' w-[50%] sm:w-[33%]'>
                            <ul>
                                <li className='text-[16px] font-normal text-white font-ff_inter mb-[18px]'>Support</li>
                                <li className='mb-[16px]'><a href="" className='text-[#b2b6be] font-normal hover:text-[white] transition-all duration-300 ease-in-out  font-ff_inter'>Privacy Policy</a></li>
                                <li className='mb-[16px]'><a href="" className='text-[#b2b6be] font-normal  hover:text-[white] transition-all duration-300 ease-in-out font-ff_inter'>Terms Of Service</a></li>
                            </ul>
                        </div>
                        <div className=' w-[50%] sm:w-[33%]'>
                            <ul className='mt-5 sm:mt-0'>
                                <li className='text-[16px] font-normal text-white font-ff_inter mb-[18px]'>Contact Us</li>
                                <li className='mb-[16px]'><a href="callto:+012 345 67890" className='text-[#b2b6be] font-normal hover:text-[white] transition-all duration-300 ease-in-out font-ff_inter'>+012 345 67890</a></li>
                                <li className='mb-[16px]'><a href="mailto:ijnfo@ecomonitor.com" className='text-[#b2b6be] font-normal hover:text-[white] transition-all duration-300 ease-in-out font-ff_inter'>info@ecomonitor.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='py-[22px] text-center text-[14px]  font-normal text-white border-t-[2px] border-[#2e3b58]'>copyright@Ecomonitor | All Rights riversed</p>
        </div>
    )
}

export default Footer