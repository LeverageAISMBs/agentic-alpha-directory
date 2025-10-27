import React from 'react';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
            <div className="w-full max-w-4xl mx-auto px-4 text-center">
                <Reveal>
                    <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20 mb-4">
                        The 2025 State of Agentic AI
                    </span>
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
                        Agentic Alpha
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-zinc-400">
                        Navigate the complex landscape of autonomous AI. An in-depth, data-driven analysis and ranking of the top 100 platforms shaping the future of work.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <a href="#directory" onClick={handleScroll} className="bg-indigo-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-300 ease-in-out hover:bg-indigo-500 hover:scale-105">
                            Explore the Index
                        </a>
                    </div>
                </Reveal>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <a href="#directory" onClick={handleScroll} aria-label="Scroll down">
                    <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center items-start p-1">
                        <div className="w-1 h-2 bg-zinc-500 rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </header>
    );
};
