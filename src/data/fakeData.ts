import { ObjAnyType } from 'types';

interface ListArray {
    title: string;
    items: string[];
}

function createVisibleData(name: string, zone: string, kv: string, status: string) {
    return { name, zone, kv, status };
}

export const visibleOutages: ObjAnyType[] = [
    createVisibleData('Baker Broadford', 'AEP', '765', 'No Ticket'),
    createVisibleData('Bedington-Black Oak', 'APS', '500', 'Full Duration'),
    createVisibleData('Cloverdale-Jacksons Ferry', 'AEP', '765', 'Not Full Duration'),
    createVisibleData('Dooms Cunningham', 'ComEd', '765', 'No Ticket'),
    createVisibleData('John Amos-Culloden', 'AEP', '500', 'Full Duration'),
    createVisibleData('Schiffs Creek', 'ComEd', '500', 'No Ticket'),
];

export const offMapOutages = [
    createVisibleData('7305-Ford Motor Company', 'ComEd', '138', 'No Ticket'),
    createVisibleData('14419-Kautz Road', 'ComEd', '345', 'Full Duration'),
    createVisibleData('8805-Northfield', 'AEP', '500', 'Not Full Duration'),
    createVisibleData('Acme Hill', 'ComEd', '765', 'No Ticket'),
    createVisibleData('Airport Road', 'ComEd', '345', 'Full Duration'),
    createVisibleData('Almera', 'ComEd', '500', 'No Ticket'),
];

export const typicalConditions: ListArray[] = [
    { title: 'Radar/Satelite', items: ['Radar', 'Infared'] },
    { title: 'Observations', items: ['Temperatures- °F', 'Wind Speed-(mph)', 'Dew Point- °F', 'Relative Humidity'] },
    { title: 'Lightning', items: ['Cloud-to-Ground', 'Prediction'] },
];
