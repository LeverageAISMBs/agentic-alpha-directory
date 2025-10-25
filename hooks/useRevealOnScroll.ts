
import { useState, useEffect, useRef, RefObject } from 'react';

interface ObserverOptions {
    threshold?: number;
    root?: Element | null;
    rootMargin?: string;
}

export const useRevealOnScroll = <T extends HTMLElement,>(options?: ObserverOptions): [RefObject<T>, boolean] => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Stop observing after it has become visible
                    if (elementRef.current) {
                        observer.unobserve(elementRef.current);
                    }
                }
            },
            {
                threshold: 0.1,
                ...options
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [options]);

    return [elementRef, isVisible];
};
