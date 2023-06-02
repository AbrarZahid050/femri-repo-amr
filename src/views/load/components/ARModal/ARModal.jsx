import CloseIcon from "@mui/icons-material/Close";
import {
  Avatar,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  LoginBtn,
  StyledInput,
  StyledLabel,
  SubmitBtn,
} from "../../../../components/Styles/StyledBtns";
import CarrierTable from "../carrierTable/carrierTable";

function ARModal({ open, onClose, onSave }) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth={true} maxWidth="lg">
      <DialogTitle
        sx={{
          backgroundColor: "#282842",
          color: "#fff",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" component="h2">
          AR
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#ffff",
          padding: "20px 10px !important",
        }}
      >
        <Box
          display="flex"
          gap={2}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <CarrierTable />

          <Box
            display="flex"
            justifyContent="flex-end"
            width="100%"
            sx={{
              backgroundColor: "rgba(0,98,255,0.05)",
            }}
          >
            <Typography
              sx={{
                marginRight: "10%",
              }}
            >
              $00.00
            </Typography>
          </Box>
          <Box width="100%" display="flex" s>
            <StyledLabel
              sx={{
                width: "20%",
              }}
            >
              Billing Instructions
            </StyledLabel>
            <StyledInput fullWidth multiline rows={3} />
          </Box>
          <Box width="100%" display="flex" s>
            <StyledLabel
              sx={{
                width: "20%",
              }}
            >
              Invoice Instructions
            </StyledLabel>
            <StyledInput fullWidth multiline rows={3} />
          </Box>
        </Box>
      </DialogContent>
      <DialogActions
        sx={{
          backgroundColor: "#F7FAFC",
        }}
      >
        <SubmitBtn
          sx={{
            width: "30%",
            backgroundColor: "transparent",
            color: "#6F758B",
            borderColor: "#6F758B",
            height: "50px",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#6F758B",
            },
          }}
          onClick={onClose}
        >
          Cancel
        </SubmitBtn>
        <LoginBtn
          sx={{
            maxWidth: "30%",
            height: "50px",
          }}
        >
          Save
        </LoginBtn>
      </DialogActions>
    </Dialog>
  );
}

export default ARModal;
