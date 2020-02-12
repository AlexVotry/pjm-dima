import React from 'react';
import lineOutageIcon from '../../../public/assets/menu/LinesAndOutagesNormal.png';
import searchIcon from '../../../public/assets/menu/SearchNormal.png';
import contingencyIcon from '../../../public/assets/menu/Contingency-Normal.png';
import weatherIcon from '../../../public/assets/menu/WeatherNormal.png';

import { PopUp } from '../../types';

import SearchCard from '../Search';
import LineOutage from '../lineOutages/LineOutage';
import Weather from '../weather/Weather';

export const popUpCards: PopUp[] = [
    {
        title: 'search',
        header: 'Search',
        icon: searchIcon,
        component: <SearchCard />,
        style: {
            height: '150px',
            margin: '40px 40vw',
        },
    },
    {
        title: 'lineOutage',
        header: 'Lines & Outages',
        icon: lineOutageIcon,
        component: <LineOutage />,
        style: {
            margin: '80px 60vw',
            width: '480px',
        },
    },
    {
        title: 'contingency',
        header: 'Contingency Analysis',
        icon: contingencyIcon,
        component: <SearchCard />,
        style: {
            height: '450px',
            margin: '100px 5vw',
        },
    },
    {
        title: 'weather',
        header: 'Weather',
        icon: weatherIcon,
        component: <Weather />,
        style: {
            height: '400px',
            margin: '60vh 20vw',
            width: '630px',
        },
    },
];
