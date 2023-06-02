import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  FormControl,
  Tooltip,
  IconButton,
  Button,
} from "@mui/material";
import CustomInput from "../InputFields/CustomInput";
import {
  GeneralBtn1,
  StyledInput,
  StyledLabel,
} from "../../../../components/Styles/StyledBtns";
import { ReactComponent as CrossIcon } from "../../../../assets/New Load Page/cross.svg";
import { ReactComponent as Upload } from "../../../../assets/New Load Page/upload.svg";
import { ReactComponent as Pin } from "../../../../assets/New Load Page/pin.svg";
import { ReactComponent as Plus } from "../../../../assets/New Load Page/Plus.svg";

import AccordionTable from "./AccordionTable";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import PickUpModal from "../pickUpModal/pickUpModal";
import DropOfModal from "../dropOfModal/dropOfModal";
import ApModal from "../APModal/APModal";

const AccordionDetail = ({ carrier }) => {
  const { register, control } = useForm({
    defaultValues: carrier,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "drivers",
  });

  const [pickUpModal, setPickUpModal] = useState(false);
  const [dropOfModal, setdropOfModal] = useState(false);

  return (
    <Box display="flex" gap={2} flexWrap="wrap" justifyContent="space-between">
      <PickUpModal open={pickUpModal} onClose={() => setPickUpModal(false)} />
      <DropOfModal open={dropOfModal} onClose={() => setdropOfModal(false)} />

      {/* card-1 */}
      <Box width="32%">
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
              FREIGHT
            </Typography>

            {/* 1st input */}
            <FormControl>
              <CustomInput>
                <StyledLabel>Search</StyledLabel>

                <StyledInput
                  fullWidth
                  multiline
                  rows={2}
                  {...register("freight.search")}
                />
              </CustomInput>
            </FormControl>
            {/* 2nd input */}
            <CustomInput>
              <StyledLabel>Name</StyledLabel>
              <StyledInput fullWidth {...register("freight.name")} />
            </CustomInput>
            {/* 3rd input */}
            <CustomInput>
              <StyledLabel>Insurance</StyledLabel>
              <StyledInput fullWidth {...register("freight.insurance")} />
            </CustomInput>

            {/* 4th input */}
            <CustomInput>
              <StyledLabel>Phone</StyledLabel>
              <StyledInput fullWidth {...register("freight.phone")} />
            </CustomInput>

            {/* 5th input */}
            <CustomInput>
              <StyledLabel>Fax</StyledLabel>
              <StyledInput fullWidth {...register("freight.fax")} />
            </CustomInput>

            {/* 6th input */}
            <CustomInput>
              <StyledLabel>Pro</StyledLabel>
              <StyledInput fullWidth {...register("freight.pro")} />
            </CustomInput>

            {/* 7th input */}
            <CustomInput>
              <StyledLabel>RC Note</StyledLabel>
              <StyledInput
                fullWidth
                multiline
                rows={3}
                {...register("freight.rc")}
              />
            </CustomInput>
          </Stack>
        </Paper>
      </Box>

      {/* card-2 */}
      <Box width="32%">
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
            {/* heading */}
            <Typography variant="h6" fontSize="18px">
              DISPATCH
            </Typography>

            {/* 1st input */}
            <CustomInput>
              <StyledLabel>Name</StyledLabel>
              <StyledInput fullWidth {...register("dispatch.name")} />
            </CustomInput>

            {/* 2nd input */}
            <CustomInput>
              <StyledLabel>Phone</StyledLabel>
              <StyledInput fullWidth {...register("dispatch.phone")} />
            </CustomInput>
            {/* 3rd input */}
            <CustomInput>
              <StyledLabel>Email</StyledLabel>
              <StyledInput fullWidth {...register("dispatch.email")} />
            </CustomInput>

            {/* 4th input */}
            <CustomInput>
              <StyledLabel>After hours Name</StyledLabel>
              <StyledInput fullWidth {...register("dispatch.afterHoursName")} />
            </CustomInput>

            {/* 5th input */}
            <CustomInput>
              <StyledLabel>After hours Phone</StyledLabel>
              <StyledInput
                fullWidth
                {...register("dispatch.afterHoursPhone")}
              />
            </CustomInput>

            {/* 6th input */}
            <CustomInput>
              <StyledLabel>Comment</StyledLabel>
              <StyledInput
                fullWidth
                multiline
                rows={3}
                {...register("dispatch.comment")}
              />
            </CustomInput>
          </Stack>
        </Paper>
      </Box>

      {/* card-3 */}
      <Box width="32%">
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
              ACCOUNTING
            </Typography>
            <FormControl>
              <StyledLabel>AP Fee</StyledLabel>
              <StyledInput
                dir="rtl"
                sx={{ p: 0 }}
                {...register("accounting.apFee")}
              />
            </FormControl>
            <StyledLabel dir="rtl">Sub Total: $0.00</StyledLabel>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="bold">Total</Typography>
              <Typography fontWeight="bold">Total: $30.00</Typography>
            </Stack>
          </Stack>
        </Paper>
      </Box>
      <Box width="60%">
        <GeneralBtn1
          variant="contained"
          sx={{
            color: "white",
          }}
          onClick={() => {
            fields.length < 2 &&
              append({
                name: "",
                mobilePhone: "",
                alternatePhone: "",
                location: "",
                palets: "",
                tractor: "",
                trailer: "",
                equipment: "",
                equipmentSize: "",
              });
          }}
        >
          Add Driver
        </GeneralBtn1>
      </Box>
      {/* drivers-4 */}
      {fields.length > 0 &&
        fields.map((driver, index) => (
          <Box width="49%">
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
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" fontSize="18px">
                    DRIVER : {index + 1}
                  </Typography>

                  <Tooltip title="Close">
                    <IconButton onClick={() => remove(index)}>
                      <CrossIcon />
                    </IconButton>
                  </Tooltip>
                </Stack>

                {/* 1st input */}
                <CustomInput labelSize={3}>
                  <StyledLabel>Name</StyledLabel>
                  <Controller
                    name={`drivers[${index}].name`}
                    control={control}
                    defaultValue={driver.name}
                    render={({ field }) => <StyledInput fullWidth {...field} />}
                  />
                </CustomInput>

                {/* 2nd input */}
                <CustomInput labelSize={3}>
                  <StyledLabel>Mobile Phone</StyledLabel>
                  <StyledInput
                    fullWidth
                    {...register(`drivers[${index}].mobilePhone`)}
                  />
                </CustomInput>

                {/* 3rd input */}
                <CustomInput labelSize={3}>
                  <StyledLabel>Alternate Phone</StyledLabel>
                  <StyledInput
                    fullWidth
                    {...register(`drivers[${index}].alternatePhone`)}
                  />
                </CustomInput>

                {/* 4th input */}
                <CustomInput labelSize={3}>
                  <StyledLabel>Location</StyledLabel>
                  <StyledInput
                    fullWidth
                    {...register(`drivers[${index}].location`)}
                  />
                </CustomInput>

                {/* 5th input */}
                <CustomInput labelSize={3}>
                  <StyledLabel>Palets</StyledLabel>
                  <StyledInput
                    fullWidth
                    {...register(`drivers[${index}].palets`)}
                  />
                </CustomInput>

                {/* 6th input */}
                <Box width="100%">
                  <Grid container>
                    <Grid item xs={6}>
                      <CustomInput labelSize={6}>
                        <StyledLabel>Tractor</StyledLabel>
                        <StyledInput
                          fullWidth
                          {...register(`drivers[${index}].tractor`)}
                        />
                      </CustomInput>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomInput labelSize={4}>
                        <StyledLabel sx={{ paddingLeft: 5 }}>
                          Trailer
                        </StyledLabel>
                        <StyledInput
                          fullWidth
                          {...register(`drivers[${index}].trailer`)}
                        />
                      </CustomInput>
                    </Grid>
                  </Grid>
                </Box>

                {/* 7th input */}
                <Box width="100%">
                  <Grid container>
                    <Grid item xs={6}>
                      <CustomInput labelSize={6}>
                        <StyledLabel>Equipment</StyledLabel>
                        <StyledInput
                          fullWidth
                          {...register(`drivers[${index}].equipment`)}
                        />
                      </CustomInput>
                    </Grid>
                    <Grid item xs={6}>
                      <CustomInput labelSize={4}>
                        <StyledLabel sx={{ paddingLeft: 5 }}>
                          Equip Size
                        </StyledLabel>
                        <StyledInput
                          fullWidth
                          {...register(`drivers[${index}].equipmentSize`)}
                        />
                      </CustomInput>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Box>
        ))}

      {/* card-6 */}
      <Box width="50%">
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
              NOTES
            </Typography>
            <StyledInput value="Ut vitae sit eget" multiline rows={3} />
          </Stack>
        </Paper>
      </Box>

      {/* card-7 */}
      <Box width="49%">
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
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize="18px" variant="h6">
                DOCUMENTS
              </Typography>
              <Button variant="outlined" startIcon={<Upload />}>
                upload
              </Button>
            </Stack>
            {/* container-div */}
            <Box>
              {/* 1st-div */}
              <Box display="flex" flexDirection="row" gap={1}>
                <Box
                  width="50%"
                  border="1px solid #E5E7EB"
                  p={2}
                  borderRadius="5px 5px 0 0"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box gap={1} alignItems="center" display="flex">
                    <Box display="inline-flex">
                      <Pin width="15px" height="15px" />
                    </Box>
                    <Box display="inline-flex">carrying staff.pdf</Box>
                  </Box>

                  <Box>12/5/22</Box>
                </Box>
                <Box
                  width="50%"
                  border="1px solid #E5E7EB"
                  borderRadius="5px 5px 0 0"
                  p={2}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box gap={1} alignItems="center" display="flex">
                    <Box display="inline-flex">
                      <Pin width="15px" height="15px" />
                    </Box>
                    <Box display="inline-flex">carrying staff.pdf</Box>
                  </Box>

                  <Box>12/5/22</Box>
                </Box>
              </Box>

              {/* 2nd-div */}
              <Box display="flex" flexDirection="row" gap={1}>
                <Box
                  width="50%"
                  borderLeft="1px solid #E5E7EB"
                  borderBottom="1px solid #E5E7EB"
                  borderRight="1px solid #E5E7EB"
                  borderRadius="0 0 5px 5px"
                  p={2}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box gap={1} alignItems="center" display="flex">
                    <Box display="inline-flex">
                      <Pin width="15px" height="15px" />
                    </Box>
                    <Box display="inline-flex">staff list2.pdf</Box>
                  </Box>

                  <Box>12/5/22</Box>
                </Box>
                <Box
                  width="50%"
                  borderLeft="1px solid #E5E7EB"
                  borderBottom="1px solid #E5E7EB"
                  borderRight="1px solid #E5E7EB"
                  borderRadius="0 0 5px 5px"
                  p={2}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box gap={1} alignItems="center" display="flex">
                    <Box display="inline-flex">
                      <Pin width="15px" height="15px" />
                    </Box>
                    <Box display="inline-flex">staff list2.pdf</Box>
                  </Box>

                  <Box>12/5/22</Box>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Paper>
      </Box>

      <Box width="100%">
        <Paper
          sx={{
            p: 2,
            height: "100%",
            background: "#FFFFFF",
            boxShadow:
              "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="18px" variant="h6">
                PICKUPS
              </Typography>
              <GeneralBtn1
                sx={{
                  background: "transparent",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                onClick={() => setPickUpModal(true)}
              >
                <Plus />
              </GeneralBtn1>
            </Stack>
            <AccordionTable />
          </Stack>
        </Paper>
      </Box>

      <Box width="100%">
        <Paper
          sx={{
            p: 2,
            height: "100%",
            background: "#FFFFFF",
            boxShadow:
              "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
            borderRadius: "8px",
            overflowX: "auto",
          }}
        >
          <Stack spacing={2}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="18px" variant="h6">
                DROPOFFS
              </Typography>
              <GeneralBtn1
                sx={{
                  background: "transparent",
                  "&:hover": {
                    background: "transparent",
                  },
                }}
                onClick={() => setdropOfModal(true)}
              >
                <Plus />
              </GeneralBtn1>
            </Stack>
            <AccordionTable />
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default AccordionDetail;
