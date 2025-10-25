
import React from 'react';
import { Platform } from '../types';
import { PlatformCard } from './PlatformCard';

interface PlatformGridProps {
    platforms: Platform[];
    onPlatformClick: (platform: Platform) => void;
}

export const PlatformGrid: React.FC<PlatformGridProps> = ({ platforms, onPlatformClick }) => {
    if (platforms.length === 0) {
        return (
            <div className="text-center py-16">
                <h3 className="text-2xl font-semibold text-zinc-300">No Platforms Found</h3>
                <p className="text-zinc-500 mt-2">Try adjusting your search or filter criteria.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {platforms.map(platform => (
                <PlatformCard
                    key={platform.rank}
                    platform={platform}
                    onClick={() => onPlatformClick(platform)}
                />
            ))}
        </div>
    );
};
