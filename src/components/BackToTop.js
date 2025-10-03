'use client';
import { useEffect, useState } from 'react';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 300);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="wrapper fixed bottom-8 right-8 z-50">
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="
                        back2top-button
                        flex items-center justify-center
                        w-12 h-12
                        bg-[#1DCD9F]
                        text-white
                        rounded-full
                        border-2 border-white
                        shadow-2xl
                        hover:bg-[#0ea87f]
                        hover:scale-110
                        transition-all duration-300
                        animate-fade-in
                        backdrop-blur-sm
                    "
                >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 384 512"
                        fill="currentColor"
                    >
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default BackToTop;
