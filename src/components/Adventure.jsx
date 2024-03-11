import React from 'react'
import Marquee from 'react-fast-marquee'
import AdventurePic1 from '../assets/webp/adventure-pic1.webp'
import AdventurePic2 from '../assets/webp/adventure-pic2.webp'
import AdventurePic3 from '../assets/webp/adventure-pic3.webp'
import AdventurePic4 from '../assets/webp/adventure-pic4.webp'
import AdventurePic5 from '../assets/webp/adventure-pic5.webp'

const Adventure = () => {
    return (
        <div>
            <div className='mx-auto max-w-[1140px] container px-4 mt-10 md:mt-24 xl:mt-[120px]'>
                <h2 className='text-center font-ff_trirong text-[30px] md:text-[48px] leading-[120%] font-semibold  md:px-28 xl:px-0 text-[#000700]'>Tales of Adventure and <span className='text-[#2859C5]'>Exploration</span></h2>
            </div>

            {/* ================ Adventure Images ============================= */}

            <Marquee speed={100} className="mt-5 md:mt-[40px]">
                <div className='px-3 1537:px-4 '>
                    <img src={AdventurePic1} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
                <div className='px-3 1537:px-4 '>
                    <img src={AdventurePic2} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
                <div className='px-3 1537:px-4 '>
                    <img src={AdventurePic3} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
                <div className='px-3 1537:px-4 '>
                    <img src={AdventurePic4} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
                <div className='px-3 1537:px-4 '>
                    <img src={AdventurePic5} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
                <div className='px-3 1537:px-4 hidden 1537:block'>
                    <img src={AdventurePic5} alt="girl" className='w-[288px] h-[375px] rounded-[10px]' />
                </div>
            </Marquee>
            <div className='flex justify-center mt-[40px]'>
                <button className='text-[16px] px-[24.2px] py-[13.5px] text-white rounded-[4px] bg-[#238AED]  font-ff_inter font-medium hover:bg-[black] transition-all duration-300'>
                    Explore More
                </button>
            </div>
        </div>
    )
}

export default Adventure