import React, { useEffect, useState } from "react";
import { Box, Grid, TextField } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../redux/features/productSlice";
import { getProduct } from "../redux/features/productReducer";
import { Link, useParams } from "react-router-dom";
import AlertBox from "./../Components/AlertBox";
import Loading from "./../Components/Loading";
import "./../Styles/addstock.css";

function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { product, isLoading, isError, message } = useSelector(
    (state) => state.stocks
  );

  useEffect(() => {
    dispatch(getProduct(id));
  }, [isError, message, dispatch]);

  //   console.log(product.data);
  return (
    <Box sx={{ marginTop: "20px" }}>
      {isLoading && <Loading />}
      {!isLoading && product ? (
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
            <Link to={`/editstock/${id}`}>
              <EditNoteOutlinedIcon
                fontSize="large"
                color="primary"
                sx={{ marginBottom: "50px" }}
              />
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
                value={product.data.name || ""}
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
                value={product.data.price || ""}
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
                value={product.data.quantity || ""}
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
                value={product.data.description || ""}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="imageUpload">
              <img
                className="productimage"
                src={`http://localhost:8000/storage/${
                  product.data.image || "noimage.png"
                }`}
                alt="productimage"
              />
            </div>
          </Grid>
        </Grid>
      ) : null}
      {!isLoading && isError ? <AlertBox message={message} /> : null}
    </Box>
  );
}

export default ProductDetail;
