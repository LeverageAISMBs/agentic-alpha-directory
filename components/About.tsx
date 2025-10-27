import React from 'react';
import { Reveal } from './Reveal';

export const About: React.FC = () => {
    return (
        <section id="about" className="py-16 sm:py-24 bg-zinc-900/50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <Reveal>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        About Agentic Alpha
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-zinc-400">
                        Agentic Alpha was founded on a simple premise: the world of autonomous AI agents is expanding at an exponential rate, creating both immense opportunity and significant complexity. Our mission is to provide a clear, data-driven, and unbiased resource for developers, businesses, and enthusiasts to navigate this rapidly evolving landscape. We are dedicated to demystifying the agentic technology stack and empowering our audience to build the future of work.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
