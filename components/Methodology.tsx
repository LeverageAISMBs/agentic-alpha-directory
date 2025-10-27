import React from 'react';
import { Reveal } from './Reveal';

const criteria = [
    { name: "Ecosystem & Integration", description: "The breadth and depth of available integrations, community support, and marketplace." },
    { name: "Power & Flexibility", description: "The core capabilities of the framework or platform for building complex, multi-step agentic workflows." },
    { name: "Ease of Use & Developer Experience", description: "The quality of documentation, learning curve, and overall developer ergonomics." },
    { name: "Enterprise Readiness", description: "Features related to security, scalability, governance, and observability for production deployments." },
    { name: "Innovation & Vision", description: "The platform's unique contributions to the field and its forward-looking roadmap." },
];

export const Methodology: React.FC = () => {
    return (
        <section id="methodology" className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="max-w-2xl mx-auto lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-400">Our Process</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            How We Rank
                        </p>
                        <p className="mt-6 text-lg leading-8 text-zinc-400">
                            Our rankings are the result of a comprehensive analysis combining market research, developer sentiment, and hands-on evaluation against a standardized set of criteria. We aim for a balanced scorecard that reflects real-world utility and future potential.
                        </p>
                    </div>
                </Reveal>
                <div className="mt-16 max-w-2xl mx-auto sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-5 lg:gap-y-16">
                        {criteria.map((item) => (
                            <Reveal key={item.name}>
                                <div className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-white">
                                        {item.name}
                                    </dt>
                                    <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-zinc-400">
                                        <p className="flex-auto">{item.description}</p>
                                    </dd>
                                </div>
                            </Reveal>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};
