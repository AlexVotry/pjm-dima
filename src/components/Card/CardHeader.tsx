import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CardContext from '../../contexts/CardContext';
import { popUp } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

interface CardHeaderProps {
  info: popUp;
}

export default function CardHeader({ info }: CardHeaderProps) {
  const classes = useStyles({ static: true });
  const cards = useContext(CardContext);

  const handleClose = () => {
    cards.removeCard(info);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {info.header}
          </Typography>
          <Button color="inherit" onClick={handleClose}>X</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}