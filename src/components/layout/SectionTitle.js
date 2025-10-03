// SectionTitle.js
import React from 'react';
import Shuffle from '../ui/Shuffle';

export default function SectionTitle({ text }) {
    return React.createElement(
        'div',
        { className: 'section-title-wrapper text-left font-bold' }, 
        React.createElement(Shuffle, {
            text: text,
            shuffleDirection: 'right',
            duration: 0.35,
            animationMode: 'evenodd',
            shuffleTimes: 1,
            ease: 'power3.out',
            stagger: 0.03,
            threshold: 0.1,
            triggerOnce: true,
            triggerOnHover: true,
            respectReducedMotion: true
        })
    );
}

