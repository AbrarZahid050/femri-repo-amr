import {
  Paper,
  Grid,
  FormControl,
  Typography,
  Stack,
  RadioGroup,
  Divider,
} from "@mui/material";
import {
  StyledLabel,
  StyledInput,
  BpRadio,
  MyFormControlLabel,
  StyledSwitch,
} from "../../../../components/Styles/StyledBtns";

const GeneralSection = () => {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
        width: "48%",
      }}
    >
      {/* main grid */}
      <Grid>
        {/* column 1 */}
        <Grid item>
          <Stack spacing={3}>
            {/* heading */}
            <Typography fontSize="18px" fontWeight="500">
              General
            </Typography>

            <Divider />
            {/* first input */}

            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Legal Name</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography> TITAN TRANSPORT LLC</Typography>
              </Grid>
            </Grid>

            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Dba Name</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography> </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Phone</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>585-200-1210</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Address</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>90 NORTHLAND AVE ROCHESTER, NY 14609 US</Typography>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneralSection;
