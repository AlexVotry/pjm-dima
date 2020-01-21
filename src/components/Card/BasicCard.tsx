import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Draggable from 'react-draggable';

import CardHeader from './CardHeader';
import { popUp } from '../../types';

const useStyles = makeStyles({
  card: {
    position: 'absolute',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface CardProps {
  info: popUp;
}

export default function BasicCard({ info }: CardProps) {
  const classes = useStyles({ static: true });

  return (
    <Draggable>
      <Card className={classes.card} style={info.style}>
        <CardHeader info={info} />
        <CardContent>
          {info.component}
        </CardContent>
      </Card>
    </Draggable>
  );
};