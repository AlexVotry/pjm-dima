import React, { useEffect } from 'react';
import { wdt } from './wdtApi';

export default function FutureRadar() {
    const logResults = async () => {
        const response = await wdt();
        console.log('response:', response.data);
    };

    // const postUsername = async () => {
    //     const response = await getToken();
    //     console.log('post:', response);
    // };

    useEffect(() => {
        logResults();
        // postUsername();
    }, []);

    return <div>WDT</div>;
}
