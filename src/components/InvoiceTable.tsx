import { Table, TableBody, TableCell, TableHead, TableRow, TablePagination } from "@mui/material";
import { useState } from "react";

const InvoiceTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>RFQ ID</TableCell>
            <TableCell>Vendor</TableCell>
            <TableCell>Vendor Contact</TableCell>
            <TableCell>Apply Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>KYRFQ0001</TableCell>
            <TableCell>Bell Gardens</TableCell>
            <TableCell>+91 700 838 1259</TableCell>
            <TableCell>03/03/2023</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
          {/* Add more rows here */}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};

export default InvoiceTable;
