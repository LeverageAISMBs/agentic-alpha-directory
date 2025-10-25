
import React, { useState, useMemo } from 'react';
import { platformsData } from '../data/platforms';
import { Platform } from '../types';
import { FilterControls } from './FilterControls';
import { PlatformGrid } from './PlatformGrid';
import { Modal } from './Modal';
import { Reveal } from './Reveal';

export const Directory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(platformsData.map(p => p.category))];
        return uniqueCategories.sort();
    }, []);

    const filteredPlatforms = useMemo(() => {
        let platforms = platformsData;

        if (selectedCategory !== 'all') {
            platforms = platforms.filter(p => p.category === selectedCategory);
        }

        if (searchTerm) {
            const lowercasedTerm = searchTerm.toLowerCase();
            platforms = platforms.filter(p =>
                p.name.toLowerCase().includes(lowercasedTerm) ||
                p.category.toLowerCase().includes(lowercasedTerm) ||
                p.rank.toString().includes(lowercasedTerm)
            );
        }

        return platforms;
    }, [searchTerm, selectedCategory]);
    
    const handlePlatformClick = (platform: Platform) => {
        setSelectedPlatform(platform);
    };

    const handleCloseModal = () => {
        setSelectedPlatform(null);
    };

    return (
        <main id="directory" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <FilterControls
                        searchTerm={searchTerm}
                        onSearchChange={(e) => setSearchTerm(e.target.value)}
                        selectedCategory={selectedCategory}
                        onCategoryChange={(e) => setSelectedCategory(e.target.value)}
                        categories={categories}
                    />
                </Reveal>
                <PlatformGrid platforms={filteredPlatforms} onPlatformClick={handlePlatformClick} />
            </div>
            <Modal platform={selectedPlatform} onClose={handleCloseModal} />
        </main>
    );
};
