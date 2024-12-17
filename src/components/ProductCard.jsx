import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, title, description, mlImages, onButton1Click, onButton2Click, button1Style, button2Style, linkUrl }) => {
  return (
    <div className="rounded-lg p-4 max-w-sm mx-auto max-h-[600px] flex flex-col justify-center items-center">
      <Link to={linkUrl} className='w-full flex justify-center items-center'>
        <img src={image} alt={title} className="max-w-[40%] max-h-[300px] rounded-md mb-4 cursor-pointer" />
      </Link>
      <h2 className="text-xl font-robotobold mb-2 max-w-[80%] text-[#9CD061]">{title}</h2>
      <div className='min-h-[100px] max-w-[80%]'>
        <p className="text-[#3A3A3A] mb-4 font-roboto text-justify">{description}</p>
      </div>
      <div className="flex w-[80%] mb-4">
        {mlImages.map((mlImage, index) => (
          <img key={index} src={mlImage} alt={`ml-icon-${index}`} className="h-10 mx-1" />
        ))}
      </div>
      <div className="flex justify-between w-[80%] font-robotobold text-[#3A3A3A] mt-2">
        <button
          onClick={() => onButton1Click(title)}
          className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-bl-xl py-[6px] ${button1Style}`}
        >
          Indicações
        </button>
        <button
          onClick={() => onButton2Click(title)}
          className={`text-center w-[50%] shadow-md shadow-[#aaaaaa] rounded-br-xl py-[6px] ${button2Style}`}
        >
          Como aplicar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
