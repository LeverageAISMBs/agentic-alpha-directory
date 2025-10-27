import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PageButton: React.FC<{
    page: number | string;
    isCurrent?: boolean;
    onClick?: () => void;
}> = ({ page, isCurrent, onClick }) => {
    const baseClasses = "flex items-center justify-center px-4 h-10 leading-tight border transition-colors duration-200";
    const activeClasses = "bg-indigo-600 border-indigo-600 text-white z-10 cursor-default";
    const defaultClasses = "bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-white";
    const separatorClasses = "bg-zinc-800 border-zinc-700 text-zinc-400 cursor-default";

    if (typeof page === 'string') {
        return <span className={`${baseClasses} ${separatorClasses}`}>{page}</span>;
    }

    return (
        <button
            onClick={onClick}
            disabled={isCurrent}
            className={`${baseClasses} ${isCurrent ? activeClasses : defaultClasses}`}
            aria-current={isCurrent ? 'page' : undefined}
        >
            {page}
        </button>
    );
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) {
        return null;
    }
    
    const getPaginationItems = (): (string | number)[] => {
        const siblingCount = 1;
        const totalPageNumbers = siblingCount * 2 + 5; 

        if (totalPageNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            const leftRange = Array.from({ length: leftItemCount }, (_, i) => i + 1);
            return [...leftRange, '...', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            const rightRange = Array.from({ length: rightItemCount }, (_, i) => totalPages - rightItemCount + 1 + i);
            return [firstPageIndex, '...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = Array.from({ length: rightSiblingIndex - leftSiblingIndex + 1 }, (_, i) => leftSiblingIndex + i);
            return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
        }
        
        return [];
    };

    const paginationItems = getPaginationItems();

    return (
        <nav aria-label="Page navigation" className="flex justify-center mt-12">
            <ul className="flex items-center -space-x-px h-10 text-base">
                <li>
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-zinc-400 bg-zinc-800 border border-r-0 border-zinc-700 rounded-l-lg hover:bg-zinc-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        aria-label="Previous page"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </button>
                </li>
                {paginationItems.map((item, index) => (
                    <li key={index}>
                         <PageButton
                            page={item}
                            isCurrent={item === currentPage}
                            onClick={() => typeof item === 'number' && onPageChange(item)}
                        />
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center px-4 h-10 leading-tight text-zinc-400 bg-zinc-800 border border-l-0 border-zinc-700 rounded-r-lg hover:bg-zinc-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        aria-label="Next page"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};
