interface Kv {
    voltage: string;
    color: string;
}

export const kvFilters: Kv[] = [
    {
        voltage: 'All',
        color: 'rgb(0,0,0,0)',
    },
    {
        voltage: '69',
        color: '#9c9a9a',
    },
    {
        voltage: '115',
        color: '#0668ac',
    },
    {
        voltage: '138',
        color: '#0000fc',
    },
    {
        voltage: '161',
        color: '#ffbec8',
    },
    {
        voltage: '230',
        color: '#ffb13b',
    },
    {
        voltage: '345',
        color: '#9acaae',
    },
    {
        voltage: '500',
        color: '#ffff00',
    },
    {
        voltage: '765',
        color: '#ff06ff',
    },
    {
        voltage: 'DC',
        color: '#4ce600',
    },
];
