
import React from 'react';
import { SearchIcon } from './icons/SearchIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface FilterControlsProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    selectedCategory: string;
    onCategoryChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    categories: string[];
}

export const FilterControls: React.FC<FilterControlsProps> = ({
    searchTerm,
    onSearchChange,
    selectedCategory,
    onCategoryChange,
    categories
}) => {
    return (
        <div className="sticky top-4 z-20 bg-black/50 backdrop-blur-md p-4 rounded-xl border border-zinc-800 mb-8 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5 text-zinc-500" />
                </div>
                <input
                    type="text"
                    id="search-bar"
                    placeholder="Search by name, category, or rank..."
                    value={searchTerm}
                    onChange={onSearchChange}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-2.5 pl-10 pr-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                />
            </div>
            <div className="relative w-full md:w-auto">
                <select
                    id="category-filter"
                    value={selectedCategory}
                    onChange={onCategoryChange}
                    className="w-full md:w-56 bg-zinc-900 border border-zinc-700 rounded-lg py-2.5 px-4 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition appearance-none"
                >
                    <option value="all">All Categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
                </div>
            </div>
        </div>
    );
};
