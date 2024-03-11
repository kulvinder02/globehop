import React from 'react'
import { BackTotop } from './icons';

const BacktoTop1 = () => {
    const [backTop, setBackTop] = React.useState(false);
    const moveToTop = () => {
        document.documentElement.scrollTop = 0;
    };

    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop > 100) {
            setBackTop(true);
        } else {
            setBackTop(false);
        }
    });
    return (
        <div>
            {backTop ? (<button id='text' onClick={moveToTop} className=" fixed bg-[#238AED]  p-[5px] sm:p-[10px]  bottom-0 end-0 me-4 mb-4  pointer z-10  rounded-[25px] animate-bounce"
            >
                <BackTotop />
            </button>
            ) : (
                ""
            )}
        </div>
    )
}

export default BacktoTop1