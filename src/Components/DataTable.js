import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import axios from "axios";
import "./../Styles/dashboard.css";
import { Box, Button } from "@mui/material";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/features/productSlice";
import AlertBox from "./AlertBox";
import { Link } from "react-router-dom";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      {/* <GridToolbarFilterButton /> */}
      <GridToolbarColumnsButton />
    </GridToolbarContainer>
  );
}

const columns = [
  { field: "id", headerName: "No", width: 20 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "description", headerName: "Description", width: 400 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "unit", headerName: "Unit", width: 100 },
  { field: "quantity", headerName: "Quantity", width: 100 },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
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
          onClick={() => handleButtonClick(params.row.id)}
        >
          <PreviewOutlinedIcon sx={{ marginRight: "5px" }} />
          View Shop
        </Button>
      </Link>
    ),
  },
];

const handleButtonClick = (id) => {};

const DataTable = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleRowClick = (params) => {
    // Access the clicked row data using params.row
    console.log("Row clicked:", params.row);
    // You can perform additional actions based on the clicked row data
  };

  console.log(products);

  return (
    <Box sx={{ height: { xs: 600, md: 500 }, width: "100%" }}>
      {products.loading && <div>Loading</div>}
      {!products.loading && products.products.code === 200 ? (
        <DataGrid
          rows={products.products.data}
          columns={columns}
          pageSize={12}
          checkboxSelection
          onRowClick={handleRowClick}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      ) : null}
      {!products.loading && products.error ? (
        <AlertBox message={products.error} />
      ) : null}
    </Box>
  );
};

export default DataTable;
