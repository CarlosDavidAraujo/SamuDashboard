import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";

export function ScrollableTable({ data, columns }) {
  const fixedHeaderContent = () => (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: (theme) => theme.palette.secondary.main,
            color: "white",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );

  const rowContent = (_index, row) => {
    const isEvenRow = _index % 2 === 0;
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCell
            key={column.dataKey}
            align={column.numeric || false ? "right" : "left"}
            sx={{
              fontWeight: column.emphasis && 700,
              backgroundColor: (theme) =>
                !isEvenRow && theme.palette.background.default,
              
            }}
          >
            {row[column.dataKey]}
          </TableCell>
        ))}
      </React.Fragment>
    );
  };

  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <TableVirtuoso
        data={data}
        components={{
          Scroller: React.forwardRef((props, ref) => (
            <TableContainer component={Paper} {...props} ref={ref} />
          )),
          Table: (props) => (
            <Table
              {...props}
              sx={{ borderCollapse: "separate" /* , tableLayout: "fixed" */ }}
            />
          ),
          TableHead: React.Fragment,
          TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
          TableBody: React.forwardRef((props, ref) => (
            <TableBody {...props} ref={ref} />
          )),
        }}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
