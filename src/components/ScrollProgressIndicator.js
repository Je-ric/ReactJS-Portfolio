'use client';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = (scrollY / scrollableHeight) * 100;

                scrollBarRef.current.style.transform = `translateY(-${100 - scrollProgress}%)`;
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-[50svh] right-2 sm:right-4 md:right-6 -translate-y-1/2 w-1.5 
                h-40 sm:h-56 md:h-64 rounded-full bg-gray-700 overflow-hidden z-50">
            <div
                className="w-full bg-[#1DCD9F] rounded-full h-full transition-all duration-300 
                            ease-out shadow-md shadow-[#1DCD9F]"
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
