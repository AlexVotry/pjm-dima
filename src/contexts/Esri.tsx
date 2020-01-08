import React, { createContext, useEffect, useState } from 'react';

export interface EsriProviderProps {
    children: JSX.Element[];
}

interface ContextProps {
    container: HTMLDivElement;
    setContainer: (a: HTMLDivElement) => void;
}

// main application context
export const EsriContext = createContext<ContextProps>(null);

// main application provider
export const EsriProvider = ({ children }: EsriProviderProps) => {
    const [container, setContainer] = useState<HTMLDivElement>(null);

    // when container is ready, we can load the
    // mapping portion of our application
    // and initialize it
    const loadMap = async () => {
        if (container) {
            const mapping = await import('../data/map');
            mapping.initialize(container);
        }
    };

    useEffect(() => {
        loadMap();
    }, [container]);

    const value = {
        container,
        setContainer,
    };

    return <EsriContext.Provider value={value}>{children}</EsriContext.Provider>;
};
