import React from 'react';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';

const rows = [
    {"name":'Frozen yoghurt', "bbb":159, "ccc":6.0, "ddd":24, "eee":4.0},
    {"name":'Frozen yoghurt', "bbb":159, "ccc":6.0, "ddd":24, "eee":4.0},
    {"name":'Frozen yoghurt', "bbb":159, "ccc":6.0, "ddd":24, "eee":4.0},
    {"name":'Frozen yoghurt', "bbb":159, "ccc":6.0, "ddd":24, "eee":4.0}    
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
const ElemetsTable = ({ list }) => {
    
    const classes = useStyles();

    const toNum = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (<TableContainer component={Paper} style={{direction:'rtl', textAlign:'right'}}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow style={{textTransform: 'capitalize', fontWeight:'bold'}}>
              <TableCell align="right">company</TableCell>
              <TableCell align="right">policeNumber</TableCell>
              <TableCell align="right">sevilianNumber</TableCell>
              <TableCell align="right">test</TableCell>
              <TableCell align="right">kilometer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.policeNumber}</TableCell>
                <TableCell align="right">{toNum(row.sevilianNumber)}</TableCell>
                <TableCell align="right">{row.test}</TableCell>
                <TableCell align="right">{toNum(row.kilometer)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}
export default ElemetsTable;