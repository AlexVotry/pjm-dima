import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CardHeader from './CardHeader';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    margin: 100,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

interface popUp {
  title: string;
  header: string;
  icon: any;
}

interface CardProps {
  info: popUp;
}

export default function BasicCard({ info }: CardProps) {
  const classes = useStyles({ static: true });

  return (
    <Card className={classes.card}>
      <CardHeader header={info.header} />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {info.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {info.header}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};