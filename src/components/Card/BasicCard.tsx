import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Draggable from 'react-draggable';

import CardHeader from './CardHeader';
import { PopUp } from '../../types';

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
    info: PopUp;
}

export default function BasicCard({ info }: CardProps) {
    const classes = useStyles({ static: true });

    return (
        <Draggable>
            <Card className={classes.card} style={info.style}>
                <CardHeader info={info} />
                <CardContent>{info.component}</CardContent>
            </Card>
        </Draggable>
    );
}
