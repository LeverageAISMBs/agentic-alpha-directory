
import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '' }) => {
    const [ref, isVisible] = useRevealOnScroll<HTMLDivElement>();
    const classes = `
        opacity-0 transform translate-y-8
        transition-all duration-700 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : ''}
        ${className}
    `;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};
