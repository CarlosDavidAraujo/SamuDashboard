import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";
import { getColorByRisk } from "../../../features/ocorrencias/utils/getColorByRisk";

const TableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} style={{ borderCollapse: "separate" }} />,
  TableHead: TableHead,
  TableRow: TableRow,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

export function ScrollableTable({ columns, data, showRiskBorder = false }) {
  console.log("tabledata", data);
  return (
    <Paper style={{ height: "100%", width: "100%" }}>
      <TableVirtuoso
        data={data}
        components={TableComponents}

        //------------------CABEÇALHO DA TABELA ----------------------//
        fixedHeaderContent={() => (
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.dataKey}
                variant="head"
                align={column.numeric || false ? "right" : "left"}
                style={{ width: column.width }}
                sx={{
                  fontSize: (theme) => theme.typography.body1,
                  fontWeight: (theme) => theme.typography.fontWeightMedium,
                  color: "white",
                  backgroundColor: (theme) => theme.palette.secondary.main,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        )}

        //-----------------------LINHAS DA TABELA-------------------//
        itemContent={(_index) => {
          const isEvenRow = _index % 2 === 0;
          const firstCellStyles = showRiskBorder
            ? {
                "&:nth-child(1)": {
                  borderLeft: `5px solid ${getColorByRisk(data[_index].risco)}`, // Define a cor da borda com base no valor do risco
                },
              }
            : {};
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
                    ...firstCellStyles,
                  }}
                >
                  {data[_index][column.dataKey]}
                </TableCell>
              ))}
            </React.Fragment>
          );
        }}
      />
    </Paper>
  );
}
