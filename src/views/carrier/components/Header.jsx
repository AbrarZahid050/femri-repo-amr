import {
  Paper,
  Grid,
  Stack,
  Breadcrumbs,
  Link,
  Typography,
} from "@mui/material";
import {
  StyledInput,
  StyledLabel,
  GeneralBtn1,
  GeneralBtn2,
} from "../../../components/Styles/StyledBtns";
import { blue } from "@mui/material/colors";

const Header = () => {
  return (
    <Paper
      sx={{
        p: 2,
        background: "#FFFFFF",
        boxShadow:
          "0px 0px 1px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
      }}
      elevation={6}
    >
      <Grid
        container
        rowSpacing={2}
        alignItems="center"
        width="100%"
        justifyContent="space-between"
      >
        <Grid item display="inline-flex" gap={0}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Carrier
            </Link>
            <Typography color="text.primary">review</Typography>
          </Breadcrumbs>
        </Grid>

        <Grid item>
          <Stack direction="row" spacing={2}>
            <GeneralBtn2 variant="contained">send invitation</GeneralBtn2>
            <GeneralBtn1 variant="contained">
              complete Carrier setup
            </GeneralBtn1>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
