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
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import {
  StyledLabel,
  StyledInput,
  BpRadio,
  MyFormControlLabel,
  StyledSwitch,
} from "../../../../components/Styles/StyledBtns";

import unsaveDrivingImg from "../../../../assets/imgs/UnsafeDrivingBW.png";
import CrashIndicatorBW from "../../../../assets/imgs/CrashIndicatorBW.png";
import DriverFitnessBW from "../../../../assets/imgs/DriverFitnessBW.png";
import DrugsAlcoholBW from "../../../../assets/imgs/DrugsAlcoholBW.png";
import HMComplianceBW from "../../../../assets/imgs/HMComplianceBW.png";
import HOSComplianceBW from "../../../../assets/imgs/HOSComplianceBW.png";
import VehicleMaintBW from "../../../../assets/imgs/VehicleMaintBW.png";
import BasicCard from "./BasicCard";
const BasicsSection = () => {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
    >
      {/* main grid */}
      <Grid>
        {/* column 1 */}
        <Grid item>
          <Stack spacing={3}>
            {/* heading */}
            <Typography fontSize="18px" fontWeight="500">
              basics
            </Typography>

            <Divider />
            {/* first input */}
            <Grid container justifyContent="space-between">
              <BasicCard
                img={unsaveDrivingImg}
                title="Unsafe Driving"
                percent="0"
                alert="false"
              />
              <BasicCard
                img={CrashIndicatorBW}
                title="Crash Indicator"
                percent="0"
                alert="false"
              />
              <BasicCard
                img={HOSComplianceBW}
                title=""
                percent="0"
                alert="false"
              />
              <BasicCard
                img={VehicleMaintBW}
                title=""
                percent="0"
                alert="false"
              />
              <BasicCard
                img={DrugsAlcoholBW}
                title=""
                percent="0"
                alert="false"
              />
              <BasicCard
                img={HMComplianceBW}
                title=""
                percent="0"
                alert="false"
              />
              <BasicCard
                img={DriverFitnessBW}
                title=""
                percent="0"
                alert="false"
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BasicsSection;
