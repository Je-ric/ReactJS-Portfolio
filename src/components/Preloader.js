'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = ({ onFinish }) => {
    const preloaderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power1.inOut' } });

        // Animate letters individually
        tl.to('.name-text span', {
            y: 0,
            stagger: 0.08,
            duration: 0.3,
        });

        // Hold letters fully visible
        tl.to({}, { duration: 0.8 });

        // Animate bars sliding up and fading individually
        tl.to(
            '.preloader-item',
            {
                y: '100%',
                autoAlpha: 0,
                duration: 0.6,
                stagger: 0.2,
            },
            '<0.2'
        );

        // Fade letters slightly delayed
        tl.to(
            '.name-text span',
            { autoAlpha: 0, duration: 0.4, stagger: 0.05 },
            '<0.3'
        );

        // Instead of fading the whole container, just call onFinish
        tl.call(onFinish);
    }, { scope: preloaderRef });

    return (
        <div
            className="fixed inset-0 z-[51] flex items-center justify-center pointer-events-none"
            ref={preloaderRef}
            style={{ background: 'transparent' }} // remove black 
        >
            {/* Preloader bars */}
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>
            <div className="preloader-item h-full w-[10%] bg-black"></div>


            {/* Animated name */}
            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-white font-extrabold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden z-[60]">
                <span className="inline-block translate-y-full">J</span>
                <span className="inline-block translate-y-full">E</span>
                <span className="inline-block translate-y-full">R</span>
                <span className="inline-block translate-y-full">I</span>
                <span className="inline-block translate-y-full">C</span>
                <span className="inline-block translate-y-full"> </span>
                <span className="inline-block translate-y-full">/</span>
                <span className="inline-block translate-y-full"> </span>
                <span className="inline-block translate-y-full">H</span>
                <span className="inline-block translate-y-full">I</span>
                <span className="inline-block translate-y-full">R</span>
                <span className="inline-block translate-y-full">O</span>
            </p>
        </div>
    );
};

export default Preloader;
