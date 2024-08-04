/* eslint-disable no-unused-vars */
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./Table.scss";
const TableData = () => {
  const rows = [
    {
      id: 112322,
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Johm Smith",
      date: "1 March",
      amount: 756,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 127222,
      product: "Playstation 5",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Michael Doe",
      date: "15 March",
      amount: 900,
      method: "Online payment",
      status: "Pending",
    },
    {
      id: 134322,
      product: "Redragon S101",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Johm Smith",
      date: "12 March",
      amount: 7256,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 112367,
      product: "Nazer Blade 15",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Jake Roy",
      date: "10 April",
      amount: 1800,
      method: "Online",
      status: "Approved",
    },
    {
      id: 112311,
      product: "ASUS ROG Strix",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 1256,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer className="table">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows?.map((row) => (
              <TableRow
                key={row?.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableCell">{row?.id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row?.img} className="image" alt={row?.product} />
                    <div>{row?.product}</div>
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row?.customer}</TableCell>
                <TableCell className="tableCell">{row?.date}</TableCell>
                <TableCell className="tableCell">{row?.amount}</TableCell>
                <TableCell className="tableCell">{row?.method}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row?.status}`}>{row?.status}</span></TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
