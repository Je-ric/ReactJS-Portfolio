'use client';
import { useEffect } from 'react';

const Mouse = () => {
    useEffect(() => {
        const coords = { x: 0, y: 0 };
        const circles = document.querySelectorAll('.circle');
        const inputs = document.querySelectorAll('input');
        const textarea = document.querySelectorAll('textarea');
        const fields = [...textarea, ...inputs];

        const handleMouseOver = () => {
            circles.forEach((circle) => circle.classList.add('circle-thin'));
        };
        const handleMouseOut = () => {
            circles.forEach((circle) => circle.classList.remove('circle-thin'));
        };

        fields.forEach((input) => {
            input.addEventListener('mouseover', handleMouseOver);
            input.addEventListener('mouseout', handleMouseOut);
        });

        circles.forEach((circle) => {
            circle.x = 0;
            circle.y = 0;
        });

        window.addEventListener('mousemove', (e) => {
            circles.forEach((circle) => circle.classList.remove('circle-hidden'));
            coords.x = e.clientX;
            coords.y = e.clientY;
        });

        function animateCircles() {
            let x = coords.x;
            let y = coords.y;

            circles.forEach((circle, index) => {
                circle.style.left = x + 'px';
                circle.style.top = y + 'px';
                circle.style.transform = `translate(-50%, -50%) scale(${(circles.length - index) / circles.length})`;
                circle.x = x;
                circle.y = y;
                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.35;
                y += (nextCircle.y - y) * 0.35;
            });

            requestAnimationFrame(animateCircles);
        }

        animateCircles();

        return () => {
            fields.forEach((input) => {
                input.removeEventListener('mouseover', handleMouseOver);
                input.removeEventListener('mouseout', handleMouseOut);
            });
        };
    }, []);

    return Array.from({ length: 40 }).map((_, i) => (
        <div key={i} className="circle circle-hidden"></div>
    ));
};

export default Mouse;
