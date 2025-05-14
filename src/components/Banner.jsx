import React from 'react';

const Banner = ({ image, mobileImage }) => {
    return (
        <a href="https://clubecuidarmais.com/" target="_blank" rel="noopener noreferrer">
            <div className="w-full h-[600px] sm:h-auto items-center justify-center hidden sm:flex">
                <img 
                    src={image} 
                    alt="Banner" 
                    className="w-full h-full object-cover sm:object-contain" 
                />
            </div>
            <div className="w-full h-auto sm:hidden flex items-center justify-center">
                <img 
                    src={mobileImage} 
                    alt="Mobile Banner" 
                    className="w-full h-full object-cover" 
                />
            </div>
        </a>
    );
};

export default Banner;
