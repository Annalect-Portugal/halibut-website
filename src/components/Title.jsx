import React from 'react';

const Title = ({ title, subtitle, claim }) => {
    return (
        <div className="text-center my-16 font-roboto mx-auto max-w-[80%] text-accent">
            <h1 className="text-4xl font-robotobold mb-10">{title}</h1>
            <p className="text-2xl font-robotobold mb-2">{subtitle}</p>
            <p className='text-xs'>{claim}</p>
        </div>
    );
};

export default Title;