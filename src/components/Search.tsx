import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& > *': {
                margin: '0, auto',
                width: '100%',
            },
        },
        searchInput: {
            backgroundColor: '#fff',
        },
    }),
);

const SearchCard = () => {
    const classes = useStyles({ static: true });
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.searchInput} id="outlined-basic" variant="outlined" size="small" />
        </form>
    );
};

export default SearchCard;
