import React, { useState, useMemo, useEffect } from 'react';
import { platformsData } from '../data/platforms';
import { Platform } from '../types';
import { FilterControls } from './FilterControls';
import { PlatformGrid } from './PlatformGrid';
import { Modal } from './Modal';
import { Reveal } from './Reveal';
import { Pagination } from './Pagination';

const ITEMS_PER_PAGE = 20;

export const Directory: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);
    const [currentPage, setCurrentPage] = useState(1);

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

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory]);

    const paginatedPlatforms = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredPlatforms.slice(startIndex, endIndex);
    }, [filteredPlatforms, currentPage]);

    const totalPages = Math.ceil(filteredPlatforms.length / ITEMS_PER_PAGE);
    
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
                <PlatformGrid platforms={paginatedPlatforms} onPlatformClick={handlePlatformClick} />
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
            <Modal platform={selectedPlatform} onClose={handleCloseModal} />
        </main>
    );
};
