import {
  Paper,
  Grid,
  FormControl,
  Typography,
  Stack,
  RadioGroup,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import {
  StyledLabel,
  StyledInput,
  BpRadio,
  MyFormControlLabel,
  StyledSwitch,
} from "../../../../components/Styles/StyledBtns";

const AuthoritySection = () => {
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
              Authority
            </Typography>

            <Divider />
            {/* first input */}
            <Typography fontSize="18px" fontWeight="500">
              Grant Date
            </Typography>

            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Freight</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select value={"true"} sx={{ height: "30px" }} disabled>
                  <MenuItem value="true">true</MenuItem>
                  <MenuItem value="false">false</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Household Goods</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select value={"false"} sx={{ height: "30px" }} disabled>
                  <MenuItem value="true">true</MenuItem>
                  <MenuItem value="false">false</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Broker</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>None</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Common</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>None</Typography>
              </Grid>
            </Grid>

            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Contract</Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography>None</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={3}>
                <Typography>Enterprise</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select value={"false"} sx={{ height: "30px" }} disabled>
                  <MenuItem value="true">true</MenuItem>
                  <MenuItem value="false">false</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AuthoritySection;
