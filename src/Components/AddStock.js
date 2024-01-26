import React, { useRef, useState } from "react";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";

import "./../Styles/addstock.css";
import { useDispatch, useSelector } from "react-redux";
import { createProducts } from "../redux/features/productSlice";
import { Link } from "react-router-dom";
import SuccessBox from "./successBox";
import AlertBox from "./AlertBox";
import { ProductionQuantityLimits } from "@mui/icons-material";

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

function AddStock() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [file, setFile] = useState();
  const nameref = useRef();
  const priceref = useRef();
  const quantityref = useRef();
  const descriptionref = useRef();
  const unitref = useRef(null);

  function hundleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function hundleSubmit(e) {
    e.preventDefault();
    const formData = {
      shop_id: "S-00000001",
      name: nameref.current.value,
      price: priceref.current.value,
      quantity: quantityref.current.value,
      description: descriptionref.current.value,
      unit: "1",
      image: file,
    };
    dispatch(createProducts(formData));
  }

  console.log(products);
  return (
    <Box sx={{ marginTop: "20px" }}>
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
          <p className="header">Add new Stock</p>
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
              inputRef={nameref}
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
              inputRef={priceref}
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
              inputRef={quantityref}
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
              inputRef={descriptionref}
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
                <VisuallyHiddenInput type="file" onChange={hundleFileChange} />
              </Button>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ margin: "0" }}
              onClick={hundleSubmit}
            >
              Create A New Stock
            </Button>
          </div>
        </Grid>
      </Grid>
      {!products.loading && products.products.code === 201 ? (
        <SuccessBox message={products.products.message} />
      ) : null}
      {!products.loading && products.error ? (
        <AlertBox message={products.error} />
      ) : null}
    </Box>
  );
}

export default AddStock;
