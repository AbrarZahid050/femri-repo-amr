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
import CustomInput from "../InputFields/CustomInput";
import {
  LoginBtn,
  StyledInput,
  StyledLabel,
  StyledSwitch,
  SubmitBtn,
} from "../../../../components/Styles/StyledBtns";
import { FiberManualRecord } from "@mui/icons-material";
import avatar from "../../../../assets/NavbarImages/avatar.jpg";
import DateInput from "../../../../components/DatePicker/datePicker";
import TimeInput from "../../../../components/timePicker/timePicker";

function PickUpModal({ open, onClose, onSave }) {
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
          Pick up Confirmation
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
          backgroundColor: "#F7FAFC",
          paddingTop: "20px !important",
        }}
      >
        <Box
          display="flex"
          gap={2}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box width="55%">
            <Paper
              sx={{
                p: 2,
                height: "100%",
                background: "#FFFFFF",
                boxShadow:
                  "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                borderRadius: "8px",
              }}
            >
              <Stack spacing={1}>
                <Typography variant="h6" fontSize="18px">
                  PICKUP
                </Typography>

                {/* 1st input */}
                <FormControl>
                  <CustomInput>
                    <StyledLabel>Name</StyledLabel>

                    <StyledInput
                      fullWidth

                      // {...register("freight.search")}
                    />
                  </CustomInput>
                </FormControl>
                {/* 2nd input */}
                <CustomInput>
                  <StyledLabel>Pick up Date</StyledLabel>
                  <DateInput fullWidth />
                </CustomInput>
                {/* 3rd input */}
                <CustomInput>
                  <StyledLabel>Pick up Time</StyledLabel>
                  <TimeInput fullWidth />
                </CustomInput>

                {/* 4th input */}
                <CustomInput>
                  <StyledLabel>Phone</StyledLabel>
                  <StyledInput
                    fullWidth
                    // {...register("freight.phone")}
                  />
                </CustomInput>

                {/* 5th input */}
                <CustomInput>
                  <StyledLabel>Extentions</StyledLabel>
                  <StyledInput
                    fullWidth
                    //  {...register("freight.fax")}
                  />
                </CustomInput>

                {/* 6th input */}
                <CustomInput>
                  <StyledLabel>Pickup Number</StyledLabel>
                  <StyledInput
                    fullWidth
                    //  {...register("freight.pro")}
                  />
                </CustomInput>

                {/* 7th input */}
                <CustomInput>
                  <StyledLabel>Invioce Number</StyledLabel>
                  <StyledInput
                    fullWidth
                    // {...register("freight.rc")}
                  />
                </CustomInput>
                <CustomInput>
                  <StyledLabel>Blind</StyledLabel>
                  <StyledSwitch />
                </CustomInput>
              </Stack>
            </Paper>
          </Box>
          <Box width="40%" display="flex" flexDirection="column" gap={2}>
            <Box>
              <Paper
                sx={{
                  p: 2,
                  height: "100%",
                  background: "#FFFFFF",
                  boxShadow:
                    "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                  borderRadius: "8px",
                  padding: "20px",
                }}
              >
                <Typography>Notes</Typography>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  paddingTop="20px"
                  gap={2}
                >
                  <Avatar src={avatar} sx={{ width: 35, height: 35 }} />
                  <Typography variant="span" fontSize="18px">
                    Jason Samsun
                  </Typography>
                  <Typography variant="span" fontSize="18px">
                    12th Jan - 14:32
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Paper
                sx={{
                  p: 2,
                  height: "100%",
                  background: "#FFFFFF",
                  boxShadow:
                    "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
                  borderRadius: "8px",
                }}
              >
                <Typography>Directions</Typography>
                <List
                  sx={{
                    width: "100%",

                    padding: "5px",
                  }}
                  aria-label="contacts"
                >
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: "14px",
                          color: "#D1D5DB",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "& span": {
                          fontSize: "14px",
                        },
                      }}
                      primary="2118 thornridge Cir. syracuse, Connecticut 25624"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: "14px",
                          color: "#D1D5DB",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "& span": {
                          fontSize: "14px",
                        },
                      }}
                      primary="2118 thornridge Cir. syracuse, Connecticut 25624"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: "14px",
                          color: "#D1D5DB",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "& span": {
                          fontSize: "14px",
                        },
                      }}
                      primary="2118 thornridge Cir. syracuse, Connecticut 25624"
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <FiberManualRecord
                        sx={{
                          fontSize: "14px",
                          color: "#D1D5DB",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        "& span": {
                          fontSize: "14px",
                        },
                      }}
                      primary="2118 thornridge Cir. syracuse, Connecticut 25624"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Box>
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

export default PickUpModal;
