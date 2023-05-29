import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

function BasicCard(props) {
  return (
    <Card sx={{ width: 230 }}>
      <CardActionArea>
        <Grid container justifyContent="center">
          <img src={props.img} alt="unsaveDriving" />
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Stack spacing={2}>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Typography>Percent</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{props.percent}</Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item xs={5}>
                <Typography>Alert</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography>{props.alert}</Typography>
              </Grid>
            </Grid>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BasicCard;
