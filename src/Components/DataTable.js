import React, { useEffect } from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import AlertBox from "./AlertBox";
import { Link } from "react-router-dom";
import SuccessBox from "./successBox";
import LinearProgress from "@mui/material/LinearProgress";
import "./../Styles/dashboard.css";

function CustomToolbar() {
  return (
    <GridToolbarContainer className="toolbarContainer">
      {/* <GridToolbarFilterButton /> */}
      <GridToolbarColumnsButton />
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
}

const columns = [
  {
    field: "id",
    headerName: "No",
    width: 100,
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Description", width: 400 },
  { field: "price", headerName: "Price", width: 150 },
  { field: "unit", headerName: "Unit", width: 100 },
  { field: "quantity", headerName: "Quantity", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => (
      <Link to={`/viewstock/${params.row.id}`}>
        <Button
          sx={{
            background: "#354e8f",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#4d3f3f",
              color: "#fff",
            },
          }}
          variant="filled"
        >
          <PreviewOutlinedIcon sx={{ marginRight: "5px" }} />
          View Shop
        </Button>
      </Link>
    ),
  },
];

const DataTable = ({ sendDataToDashboard }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const deletes = useSelector((state) => state.deleteproduct);
  const sendData = (dataId) => {
    const Deletedata = dataId;
    sendDataToDashboard(Deletedata);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [deletes.deletes]);

  // useEffect(() => {
  //   if (products.products.code === 200) {
  //     console.log(products.products.data);
  //     const rows = products.products.data.map((index, item) => ({
  //       no: index + 1,
  //       ...item,
  //     }));
  //     console.log(rows);
  //   }
  // }, [products]);

  const handleRowClick = (params) => {
    // Access the clicked row data using params.row
    console.log("Row clicked:", params.row);
    // You can perform additional actions based on the clicked row data
  };

  return (
    <Box sx={{ height: { xs: 600, md: 500 } }}>
      <DataGrid
        rows={products.products.data || []}
        columns={columns}
        pageSize={12}
        checkboxSelection
        loading={products.loading}
        disableSelectionOnClick
        slots={{
          toolbar: CustomToolbar,
          loadingOverlay: LinearProgress,
        }}
        onRowSelectionModelChange={(dataId) => {
          sendData(dataId);
        }}
      />
      {!products.loading && products.error ? (
        <AlertBox message={products.error} />
      ) : null}
      {!deletes.loading && deletes.deletes.length > 0 ? (
        <SuccessBox message={deletes.deletes.message} />
      ) : null}
      {!deletes.loading && deletes.error ? (
        <AlertBox message={deletes.error} />
      ) : null}
    </Box>
  );
};

export default DataTable;
