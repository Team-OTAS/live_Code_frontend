import React from "react";
import { Box, Button, Chip, Container, Grid, TextField } from "@mui/material";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ListIcon from "@mui/icons-material/List";
import DescriptionIcon from "@mui/icons-material/Description";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { styled } from "@mui/material/styles";

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

function EditStock() {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid #000",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Grid item xs={12} sx={{ display: "flex" }}>
          <p className="header">Edit Stock</p>
          <Chip
            label={
              <div className="input-field-label">
                <InfoOutlinedIcon />
                <span style={{ color: "white", marginLeft: "10px" }}>
                  Created : 2 / 4 /2024{" "}
                </span>
              </div>
            }
            color="primary"
            sx={{ margin: "0 20px" }}
          />
          <Chip
            label={
              <div className="input-field-label">
                <InfoOutlinedIcon />
                <span style={{ color: "white", marginLeft: "10px" }}>
                  Updated : 2 / 4 /2024{" "}
                </span>
              </div>
            }
            color="primary"
          />
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
        <Grid item xs={12} md={3}>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ margin: "0" }}
            >
              Edit Stock Details
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ margin: "0" }}
            >
              Cancel The Edit
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid item xs={12} md={6} sx={{ float: "right" }}>
            <div>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                sx={{ margin: "0" }}
              >
                Remove The Stock
              </Button>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EditStock;
