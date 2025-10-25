
import React, { useEffect, useState } from 'react';
import { Platform } from '../types';

interface ModalProps {
    platform: Platform | null;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ platform, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (platform) {
            document.body.classList.add('overflow-hidden');
            // Timeout to allow the backdrop to render before starting the transition
            setTimeout(() => setIsVisible(true), 10);
        } else {
            document.body.classList.remove('overflow-hidden');
            setIsVisible(false);
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [platform, onClose]);

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    
    if (!platform) return null;

    return (
        <div
            onClick={handleBackdropClick}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300
                ${isVisible ? 'opacity-100' : 'opacity-0'}
                bg-black/70 backdrop-blur-md`}
        >
            <div
                className={`bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden transform transition-all duration-300
                    ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            >
                <div className="p-6 sm:p-8 overflow-y-auto">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-zinc-100">{platform.name}</h2>
                            <p className="text-indigo-400 mt-1">{platform.category}</p>
                        </div>
                        <button onClick={onClose} className="text-zinc-500 hover:text-white transition">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 border-t border-zinc-800 pt-6">
                        <p className="text-zinc-300 leading-relaxed">{platform.description}</p>
                    </div>
                    <div className="mt-6 text-center">
                        <span className="text-sm font-medium text-zinc-400">Overall Score: </span>
                        <span className="text-lg font-bold text-indigo-400">{platform.score}</span>
                    </div>
                </div>
                <div className="bg-zinc-800/50 p-4 mt-auto">
                    <a href={platform.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold py-2.5 px-4 rounded-lg transition hover:bg-indigo-500">
                        Visit Website
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
};
