'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the GridLoader component with SSR disabled
const GridLoader = dynamic(() => import('react-spinners/GridLoader'), { ssr: false });

const withLoading = (WrappedComponent) => {
    return (props) => {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
            const handleLoad = () => {
                setIsLoaded(true);
            };

            // Simulate loading of all components
            Promise.all([
                // Add imports or loading logic for all critical components here if necessary
            ]).then(handleLoad);
        }, []);

        if (!isLoaded) {
            return <div className="absolute" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <GridLoader color="#f9ba00" />
            </div>; // Display a loading indicator while components are loading
        }

        return <WrappedComponent {...props} />;
    };
};

export default withLoading;
