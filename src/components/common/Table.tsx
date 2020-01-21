import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// import { rows } from '../../data/fakeData';
import { tableType, ObjAnyType } from '../../types';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      borderBottom: 'none',
      padding: '3px',
      borderRight: '1px solid #fff'
    },
    body: {
      fontSize: 12,
      borderBottom: 'none',
      padding: '3px',
      borderRight: '1px solid #fff'
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: 'rgba(255,255,255,.1)',
      },
    },
  }),
)(TableRow);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 400,
    },
    itemName: {
      color: theme.palette.secondary.main
    },
    itemInfo: {
      color: theme.palette.text.primary
    }
  }))


export default function PjmTable({ rows, titles }: tableType) {
  const classes = useStyles({ static: true });

  const renderTitles = () => {
    return titles.map(title => {
      return <StyledTableCell key={title} align="left">{title}</StyledTableCell>
    })
  }

  const displayRows = (row: ObjAnyType) => {
    let columns = [];
    for (let col in row) {
      columns.push({ item: row[col], i: col });
    };

    return columns.map(column => {
      const fontColor = column.i === 'column0' ? classes.itemName : classes.itemInfo;
      return (
        <StyledTableCell className={fontColor} key={column.i} align="left">{column.item}</StyledTableCell>
      )
    });
  }

  const renderRows = () => {
    return rows.map(row => (
      <StyledTableRow key={row.column0}>
        {displayRows(row)}
      </StyledTableRow>
    ))
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {renderTitles()}
          </TableRow>
        </TableHead>

        <TableBody>
          {renderRows()}
        </TableBody>
      </Table>
    </TableContainer>
  )
}