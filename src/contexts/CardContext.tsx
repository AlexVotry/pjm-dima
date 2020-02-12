import { createContext } from 'react';
import { PopUp } from '../types';

interface CardContext {
    popups: PopUp[];
    removeCard: (a: PopUp) => void;
}
// render card context --keep track of open cards
export default createContext<CardContext>(null);
