import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import { popUpCards } from './menuData';
import BasicCard from '../Card/BasicCard';

const useStyles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    menuContainer: {
      display: 'flex',
      position: 'absolute',
      zIndex: 5,
      height: '100vh'
    },
    menu: {
      marginRight: spacing(2),
      backgroundColor: 'black',
      color: 'white'
    }
  }))

interface popUp {
  title: string;
  header: string;
  icon: any;
}

export default function Menu() {
  const classes = useStyles({ static: true });
  const [click, setClick] = useState(false);
  const [popups, setPopUps] = useState([]);

  const handleClick = (card: popUp) => {

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
  }

  const renderMenu = () => {
    return popUpCards.map(item => {
      return (
        <div key={item.title}>
          <MenuItem onClick={() => handleClick(item)} ><img src={item.icon} alt="{item.title}" /></MenuItem>
        </div>
      )
    })
  }

  return (
    <div className={classes.menuContainer}>
      <div className={classes.menu}>
        <div>
          {renderMenu()}
        </div>
      </div>
      {renderPopup()}
    </div>
  );
};
