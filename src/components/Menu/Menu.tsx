import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { popUpCards } from './menuData';
import BasicCard from '../Card/BasicCard';
import CardContext from '../../contexts/CardContext';
import { PopUp } from '../../types';

const useStyles = makeStyles(({ spacing }: Theme) =>
    createStyles({
        menuContainer: {
            display: 'flex',
            position: 'absolute',
            zIndex: 5,
            height: '100vh',
            width: '10vw',
        },
        menu: {
            marginRight: spacing(2),
            backgroundColor: 'black',
            color: 'white',
        },
    }),
);

export default function Menu() {
    const classes = useStyles({ static: true });
    const [click, setClick] = useState(false);
    const [popups, setPopUps] = useState<PopUp[]>([]);
    const removeCard = (val: PopUp) => setPopUps(popups.filter(c => c.title !== val.title));
    const cardContext = { popups, removeCard };

    const handleClick = (card: PopUp) => {
        // using click state to rerender. changing array content doesn't fire rerender.
        setClick(!click);
        let tempArr = popups;
        if (tempArr.includes(card)) {
            tempArr = tempArr.filter(str => str.title !== card.title);
        } else {
            tempArr.push(card);
        }
        setPopUps(tempArr);
    };

    const renderPopup = () => {
        return popups.map(popup => <BasicCard key={popup.title} info={popup} />);
    };

    const renderMenu = () => {
        return popUpCards.map(item => {
            return (
                <div key={item.title}>
                    <MenuItem onClick={() => handleClick(item)}>
                        <img src={item.icon} alt="{item.title}" />
                    </MenuItem>
                </div>
            );
        });
    };

    return (
        <CardContext.Provider value={cardContext}>
            <div className={classes.menuContainer}>
                <div className={classes.menu}>
                    <div>{renderMenu()}</div>
                </div>
                {renderPopup()}
            </div>
        </CardContext.Provider>
    );
}
