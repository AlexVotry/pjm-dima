import React, { useEffect } from 'react';
import { wdt, getToken } from './wdtApi';

export default function FutureRadar() {

  const logResults = async () => {
    const response = await wdt('nothing');
    console.log('response:', response);
  }

  const postUsername = async () => {
    const response = await getToken();
    console.log('post:', response);
  }

  useEffect(() => {
    logResults();
  }, [])

  return <div>WDT</div>

}

