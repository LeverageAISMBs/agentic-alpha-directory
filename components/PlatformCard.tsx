
import React from 'react';
import { Platform } from '../types';
import { Reveal } from './Reveal';

interface PlatformCardProps {
    platform: Platform;
    onClick: () => void;
}

export const PlatformCard: React.FC<PlatformCardProps> = ({ platform, onClick }) => {
    return (
        <Reveal>
            <div
                onClick={onClick}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 cursor-pointer transition duration-300 hover:border-indigo-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/10 h-full flex flex-col"
            >
                <div className="flex items-start justify-between">
                    <span className="text-2xl font-bold text-indigo-400">#{platform.rank}</span>
                    {platform.score &&
                        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-2.5 py-1 rounded-full">{platform.score}</span>
                    }
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-100 flex-grow">{platform.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{platform.category}</p>
            </div>
        </Reveal>
    );
};
