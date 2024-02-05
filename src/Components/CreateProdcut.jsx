import React, { useRef, useState } from "react";
import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
// import { createProducts } from "../redux/features/productSlice";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import SuccessBox from "./successBox";
import AlertBox from "./AlertBox";

import "./../Styles/addstock.css";
import { createProduct } from "../redux/features/productReducer";
import WaitingBox from "./Waiting";

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

function CreateProdcut() {
  const dispatch = useDispatch();
  const { product, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.stocks
  );
  const [nameErr, setnameErr] = useState(false);
  const [priceErr, setpriceErr] = useState(false);
  const [quantityErr, setquantityErr] = useState(false);
  const [desErr, setdesErr] = useState(false);
  const [file, setFile] = useState();
  const [showmessage, setShowmessage] = useState(false);
  const nameref = useRef();
  const priceref = useRef();
  const quantityref = useRef();
  const descriptionref = useRef();
  const shopId = localStorage.getItem("shopId");
  // const unitref = useRef(null);

  function hundleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function hundleSubmit(e) {
    e.preventDefault();
    if (nameref.current.value === "") {
      setnameErr(true);
    } else {
      setnameErr(false);
    }

    if (priceref.current.value === "") {
      setpriceErr(true);
    } else {
      setpriceErr(false);
    }

    if (quantityref.current.value === "") {
      setquantityErr(true);
    } else {
      setquantityErr(false);
    }

    if (descriptionref.current.value === "") {
      setdesErr(true);
      return;
    } else {
      setdesErr(false);
    }

    const formData = {
      shop_id: shopId,
      name: nameref.current.value,
      price: priceref.current.value,
      quantity: quantityref.current.value,
      description: descriptionref.current.value,
      unit: "1",
      image: file,
    };
    setShowmessage(true);
    console.log(file);
    dispatch(createProduct(formData));
  }

  console.log(message);
  return (
    <Box component="form" sx={{ marginTop: "20px" }}>
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
              name="field1"
              fullWidth
              label={
                <div className="input-field-label">
                  <Inventory2OutlinedIcon color="primary" />
                  <span>Stock Name</span>
                </div>
              }
              color="primary"
              error={nameErr}
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
              error={priceErr}
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
              error={quantityErr}
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
              error={desErr}
              color="primary"
              inputRef={descriptionref}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="imageUpload">
            {file ? (
              <Box>
                <IconButton
                  component="label"
                  variant="filled"
                  sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    borderRadius: "10px",
                    background: "#354e8e",
                    color: "#fff",
                    "&:hover": {
                      color: "#354e8e",
                    },
                  }}
                >
                  <VisuallyHiddenInput
                    type="file"
                    onChange={hundleFileChange}
                  />
                  <EditIcon />
                </IconButton>
                <img src={URL.createObjectURL(file)} alt="product" />
              </Box>
            ) : (
              <Box sx={{ px: 5, py: 2 }}>
                <div className="input-field-label">
                  <ImageOutlinedIcon color="primary" />
                  <span>Image</span>
                </div>
                <Button
                  component="label"
                  variant="contained"
                  color="vaild"
                  startIcon={<AttachmentOutlinedIcon />}
                  sx={{ marginTop: "10px" }}
                >
                  Upload Image
                  <VisuallyHiddenInput
                    type="file"
                    onChange={hundleFileChange}
                  />
                </Button>
              </Box>
            )}
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="vaild"
              sx={{ margin: "0" }}
              onClick={hundleSubmit}
            >
              Create A New Stock
            </Button>
          </div>
        </Grid>
      </Grid>
      {isLoading && showmessage ? <WaitingBox /> : null}
      {!isLoading && showmessage && isSuccess ? (
        <SuccessBox message={message} />
      ) : null}
      {!isLoading && showmessage && isError ? (
        <AlertBox message={message} />
      ) : null}
    </Box>
  );
}

export default CreateProdcut;
