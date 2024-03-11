import React from 'react';
import Slider from "react-slick";
import AnnaEllips from '../assets/webp/anna-ellips.webp';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow, SliderLeftArrow, SliderRigntArrow } from './coman/icons';

const Travlers = () => {
    // ================== Slider Left Arrow ======================= //
    const CustomNextArrow = ({ onClick }) => (
        <button
            className="absolute sm:right-[40%] bottom-[-5%]  md:right-[42%] right-[35%] 991:right-[45%]  xl:top-[0%]  xl:right-[9.5%] z-10"
            onClick={onClick}  >
            <SliderLeftArrow />
        </button>
    );
    // ================== Slider Right Arrow ======================= //
    const CustomPrevArrow = ({ onClick }) => (
        <button
            className="absolute sm:left-[40%]  bottom-[-5%] md:left-[45%2 left-[35%] 991:left-[45%]  xl:top-[5%] xl:left-[10%] z-10"
            onClick={onClick} >
            <SliderRigntArrow />
        </button>
    );
    // ================== Slider Settings =========================== //
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };

    return (
        <div className='relative'>
            <span className='absolute right-2 top-[-20%] xl:right-[3%] md:top-[-14%] 991:right-[0%] xl:top-[-24%] hidden md:block'> <Arrow />  </span>
            <div className='max-w-[1140px] mx-auto container mt-10 xl:mt-[120px]'>
                <h2 className='text-center font-ff_trirong text-[30px] px-4 md:text-[48px] leading-[120%] font-semibold text-[#000700] md:px-28 lg:px-0'>Hear What Our Travelers<span className='text-[#2859C5]'> Have to Say</span></h2>
                <p className='mt-[8px] xl:mt-[16px] text-[16px] text-[#4d4d4d] px-4 font-normal text-center font-ff_inter  md:px-36 xl:px-[140px]'>At Globehop, our mission is to create unforgettable travel experiences that leave a lasting impression. But don't just take our word for it—here's what some of our satisfied travelers have to say about their journeys with us:</p>

                {/* ===============================  Slider  =============================== */}
                <Slider {...settings} className='flex justify-center items-center text-center xl:px-4'>

                    <div className='max-w-[330px] 575:max-w-[550px] 991:max-w-[700px] xl:max-w-[784px] px-2 575:px-4  shadow-[2px_2px_40px_0px_#00000010] rounded-[30px] mb-10 mt-[40px] xl:mt-[60px] md:px-[50px] py-[35px]'>
                        <div className='flex justify-center'>
                            <img src={AnnaEllips} alt="anna" className='h-[140px] w-[140px]' />
                        </div>
                        <h3 className='text-[20px] font-medium font-ff_inter mt-[24px] text-black text-center'>Anna K. - Quick Response Team</h3>
                        <p className='mt-[12px] text-[16px] text-[#4d4d4d] font-normal text-center font-ff_inter px-2 xl:px-[18px]'>I've always dreamed of exploring the world, but I never knew where to start. Globehop made it easy for me to plan my dream vacation to Europe, from booking flights to finding the perfect accommodations. Thanks to Globehop, I embarked on a journey of a lifetime filled with unforgettable memories and incredible experiences."</p>
                    </div>
                    <div className='max-w-[330px] 575:max-w-[550px] 991:max-w-[700px] xl:max-w-[784px] px-2 575:px-4  shadow-[2px_2px_40px_0px_#00000010] rounded-[30px] mb-10 mt-[40px] xl:mt-[60px] md:px-[50px] py-[35px]'>
                        <div className='flex justify-center'>
                            <img src={AnnaEllips} alt="anna" className='h-[140px] w-[140px]' />
                        </div>
                        <h3 className='text-[20px] font-medium font-ff_inter mt-[24px] text-black text-center'>Anna K. - Quick Response Team</h3>
                        <p className='mt-[12px] text-[16px] text-[#4d4d4d] font-normal text-center font-ff_inter px-2 xl:px-[18px]'>I've always dreamed of exploring the world, but I never knew where to start. Globehop made it easy for me to plan my dream vacation to Europe, from booking flights to finding the perfect accommodations. Thanks to Globehop, I embarked on a journey of a lifetime filled with unforgettable memories and incredible experiences."</p>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Travlers;
