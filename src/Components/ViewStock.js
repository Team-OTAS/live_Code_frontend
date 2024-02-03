import React, { useEffect, useState } from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/productSlice";
import { Link, useParams } from "react-router-dom";
import AlertBox from "./AlertBox";

import "./../Styles/addstock.css";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function ViewStock() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { id } = useParams();
  const [file, setFile] = useState();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id]);

  console.log(products.products.data[0].image || "wait for data");
  return (
    <Box sx={{ marginTop: "20px" }}>
      {!products.loading && products.products.code === 200 ? (
        <Grid
          container
          spacing={2}
          sx={{
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Grid item xs={12} className="formHeader">
            <p className="header">View Stock</p>
            <Link to="/">
              <CancelOutlinedIcon sx={{ marginBottom: "50px" }} />
            </Link>
          </Grid>

          <Grid item xs={12} md={4}>
            <div className="inputContainer">
              <TextField
                id="outlined-error-helper-text"
                fullWidth
                label={
                  <div className="input-field-label">
                    <Inventory2OutlinedIcon color="primary" />
                    <span>Stock Name</span>
                  </div>
                }
                color="primary"
                InputProps={{
                  readOnly: true,
                }}
                value={products.products.data[0].name || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="inputContainer">
              <TextField
                id="outlined-error-helper-text"
                fullWidth
                label={
                  <div className="input-field-label">
                    <AttachMoneyOutlinedIcon color="primary" />
                    <span>Price</span>
                  </div>
                }
                color="primary"
                InputProps={{
                  readOnly: true,
                }}
                value={products.products.data[0].price || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="inputContainer">
              <TextField
                id="outlined-error-helper-text"
                fullWidth
                label={
                  <div className="input-field-label">
                    <ListIcon color="primary" />
                    <span>Quantity</span>
                  </div>
                }
                color="primary"
                InputProps={{
                  readOnly: true,
                }}
                value={products.products.data[0].quantity || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="inputContainer">
              <TextField
                id="outlined-multiline-static"
                fullWidth
                label={
                  <div className="input-field-label">
                    <DescriptionIcon color="primary" />
                    <span>Description</span>
                  </div>
                }
                multiline
                rows={6}
                color="primary"
                InputProps={{
                  readOnly: true,
                }}
                value={products.products.data[0].description || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="imageUpload">
              <Box sx={{ px: 5, py: 2 }}>
                <div className="input-field-label">
                  <ImageOutlinedIcon color="primary" />
                  <span>Image</span>
                </div>
                <Button
                  component="label"
                  variant="contained"
                  startIcon={<AttachmentOutlinedIcon />}
                  sx={{ marginTop: "10px" }}
                >
                  Upload Image
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </div>
          </Grid>
        </Grid>
      ) : null}
      {!products.loading && products.error ? (
        <AlertBox message={products.error} />
      ) : null}
    </Box>
  );
}

export default ViewStock;
