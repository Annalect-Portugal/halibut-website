import React, { useState, useEffect } from 'react';

const LazyImage = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setImageSrc(src);
  }, [src]);

  if (!imageSrc) {
    return <div className={props.className + " bg-gray-200"}></div>;
  }

  return <img src={imageSrc} alt={alt} {...props} />;
};

export default LazyImage;