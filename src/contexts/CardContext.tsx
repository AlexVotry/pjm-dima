import { createContext } from 'react';
import { popUp } from '../types';


interface CardContext {
  popups: popUp[];
  removeCard: (a: popUp) => void;
}
// render card context --keep track of open cards
export default createContext<CardContext>(null);

