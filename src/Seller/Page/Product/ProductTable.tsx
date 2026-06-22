import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { useEffect } from 'react';
import { fetchSellerProducts } from '../../../State/Seller/sellerProductSlice';
import { Product } from '../../../Types/ProductTypes';
import { Button, Icon, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ProductTable() {
  const dispatch = useAppDispatch();

  const sellerProduct = useAppSelector((state) => state.sellerProduct);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      dispatch(fetchSellerProducts(jwt));
    }
  }, [dispatch]);

  if (sellerProduct.loading) return <p>Loading products...</p>;
  if (sellerProduct.error) return <p>Error: {sellerProduct.error}</p>;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">MRP</StyledTableCell>
            <StyledTableCell align="right">Selling Price</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Update Stock</StyledTableCell>
            <StyledTableCell align="right">Update</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sellerProduct.products && sellerProduct.products.length > 0 ? (
            sellerProduct.products.map((item: Product) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  <div className='flex gap-1 flex-wrap'>
                    {item.images &&
                      item.images.map((image) => (
                        <img key={image} src={image} alt="" width={50} />
                      ))}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{item.title}</StyledTableCell>
                <StyledTableCell align="right">{item.mrpPrice}</StyledTableCell>
                <StyledTableCell align="right">{item.sellingPrice}</StyledTableCell>
                <StyledTableCell align="right">{item.color}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button size='small'>
                    in_stock
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton color='primary' size='small'>
                    <Edit/>
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={7} align="center">
                No products available
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
