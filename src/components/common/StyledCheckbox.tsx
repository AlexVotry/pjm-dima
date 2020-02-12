import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

interface StyledCheckboxProps {
    boxSize?: number;
    radius?: number;
    initchecked?: string;
}

// label size is determined from withRoot:  typography.body1
export default function StyledCheckbox(props: StyledCheckboxProps) {
    const initChecked = props.initchecked ? true : false;

    const [checked, setChecked] = useState(initChecked);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const useStyles = makeStyles({
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            borderRadius: props.radius || 2,
            width: props.boxSize,
            height: props.boxSize,
            backgroundColor: 'rgb(0,0,0,0)',
            border: '1px solid #3cf',
            margin: 0,
        },
        checkedIcon: {
            '&:before': {
                display: 'block',
                width: props.boxSize,
                height: props.boxSize,
                backgroundImage:
                    "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
                    " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                    "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
                content: '""',
            },
        },
        label: {
            color: '#fff',
        },
    });
    const classes = useStyles({ static: true });
    const boxStyles = { ...props };
    delete boxStyles.boxSize;

    return (
        <Checkbox
            className={classes.root}
            color="primary"
            checked={checked}
            onChange={handleChange}
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            inputProps={{ 'aria-label': 'decorative checkbox' }}
            style={{ padding: '5px' }}
            {...boxStyles}
        />
    );
}
