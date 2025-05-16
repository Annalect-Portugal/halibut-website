import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const HomeBanner = ({ banners }) => {
    const [current, setCurrent] = useState(0);
    const [fade, setFade] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const timeoutRef = useRef();

    // 1. Add state for touch positions at the top of the component
    const [touchStartX, setTouchStartX] = useState(null);
    const [touchEndX, setTouchEndX] = useState(null);

    const nextSlide = () => {
        setFade(false);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % banners.length);
            setFade(true);
        }, 300);
    };

    const prevSlide = () => {
        setFade(false);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
            setFade(true);
        }, 300);
    };

    const goToSlide = (idx) => {
        if (idx !== current) {
            setFade(false);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setCurrent(idx);
                setFade(true);
            }, 300);
        }
    };

    const { image, mobileImage, link } = banners[current];

    const hasPrev = banners.length > 1 && current > 0;
    const hasNext = banners.length > 1 && current < banners.length - 1;

    // Auto-cycle every 3 seconds, pause on hover
    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setFade(false);
            timeoutRef.current = setTimeout(() => {
                setCurrent((prev) => (prev + 1) % banners.length);
                setFade(true);
            }, 300);
        }, 5000);
        return () => {
            clearInterval(interval);
            clearTimeout(timeoutRef.current);
        };
    }, [banners.length, current, isHovered]);

    return (
        <div
            className="relative w-full z-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={e => setTouchStartX(e.touches[0].clientX)}
            onTouchMove={e => setTouchEndX(e.touches[0].clientX)}
            onTouchEnd={() => {
                if (touchStartX !== null && touchEndX !== null) {
                    const distance = touchStartX - touchEndX;
                    if (distance > 50) nextSlide();
                    if (distance < -50) prevSlide();
                }
                setTouchStartX(null);
                setTouchEndX(null);
            }}
        >
            <a href={link || "https://clubecuidarmais.com/"} target="_blank" rel="noopener noreferrer">
                <div className={`w-full h-[600px] sm:h-auto items-center justify-center hidden sm:flex transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src={image}
                        alt="Banner"
                        className="w-full h-full object-cover sm:object-contain"
                    />
                </div>
                <div className={`w-full h-auto sm:hidden flex items-center justify-center transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <img
                        src={mobileImage}
                        alt="Mobile Banner"
                        className="w-full h-full object-cover"
                    />
                </div>
            </a>
            {hasPrev && (
                <button
                    onClick={prevSlide}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full px-1 py-1 flex items-center justify-center"
                    aria-label="Previous"
                    style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Left triangle SVG with slightly rounded edges and filled with primary color */}
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <polygon
                            points="18,6 10,14 18,22"
                            fill="rgb(17, 111, 119)"
                            stroke="rgb(17, 111, 119)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            rx="2"
                        />
                    </svg>
                </button>
            )}
            {hasNext && (
                <button
                    onClick={nextSlide}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 rounded-full px-1 py-1 flex items-center justify-center"
                    aria-label="Next"
                    style={{ width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    {/* Right triangle SVG with slightly rounded edges and filled with primary color */}
                    <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
                        <polygon
                            points="10,6 18,14 10,22"
                            fill="rgb(17, 111, 119)"
                            stroke="rgb(17, 111, 119)"
                            strokeWidth="2"
                            strokeLinejoin="round"
                            rx="2"
                        />
                    </svg>
                </button>
            )}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                {banners.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className={`w-3 h-3 rounded-full border-2 border-white flex items-center justify-center transition-colors duration-200 ${
                            idx === current ? 'bg-[rgb(17,111,119)]' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                        style={{
                            boxShadow: idx === current ? '0 0 0 2px rgba(17,111,119,0.3)' : undefined,
                            padding: 0 // Remove default button padding for perfect centering
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

HomeBanner.propTypes = {
    banners: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string.isRequired,
            mobileImage: PropTypes.string.isRequired,
            link: PropTypes.string
        })
    ).isRequired
};

export default HomeBanner;