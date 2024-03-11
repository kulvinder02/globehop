import React from 'react'
import { Helper } from './Helper';
import { Arrow } from './coman/icons';
const items = [
    {
        id: "1",
        title: 'How do I book a trip with your agency?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "2",
        title: 'What destinations do you offer?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "3",
        title: 'Do you offer group travel packages?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "4",
        title: 'What types of accommodations do you offer?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "5",
        title: 'Do you provide travel insurance?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "6",
        title: 'What if I need assistance during my trip?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "7",
        title: 'Can I make changes to my itinerary after its been booked?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
    {
        id: "8",
        title: 'How do I make payments for my trip?',
        content: 'Booking with us is easy! You can either give us a call, send us an email, or visit our website to fill out a booking inquiry form.',
    },
];


const Frequently = () => {
    return (
        <div className='relative' id='about'>
            <span className='absolute xl:left-[1.5%] sm:top-[-0%] transform rotate-[-35deg] 991:rotate-[0deg] xl:top-[0%] hidden md:block'> <Arrow />  </span>

            <div className='mx-auto max-w-[1140px] container px-4 mt-[70px]'>
                <h2 className='text-center font-ff_trirong text-[30px] md:text-[48px] leading-[120%] font-semibold text-[#000700]'>Frequently  <span className='text-[#2859C5]'>Asked</span> Questions</h2>
                <p className='mt-2 px-4 sm:px-52 xl:mt-[16px] text-[16px] text-[#4000700] font-normal text-center font-ff_inter xl:px-[330px]'>At Travel, we offer a wide range of services to cater to all your travel needs:</p>
                <div className=' overflow-hidden mt-[40px] mb-10 lg:mb-[80px]' id='event'>
                    <div
                        id="accordion"
                        className=" mx-auto relative md:w-10/12 px-3 sm:mb-10  max-w-[754px]"
                        data-aos="zoom-in">
                        <Helper items={items} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frequently