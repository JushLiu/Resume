import { Avatar, Box, Divider, Grid, Stack } from "@mui/material";
import React from "react";

export const Main = () => {
  return (
    <>
      <Grid
        container
        sx={{ height: { md: "100vh", sm: "100vh", xs: "60vh" } }}
        bgcolor="primary.main"
      >
        <Grid
          container
          md={6}
          xs={12}
          justifyContent={{ md: "flex-end", xs: "center" }}
          alignContent="center"
        >
          <Avatar
            alt="Andy Liu"
            src="/Andy.jpg"
            sx={{
              width: { md: 400, sm: 300, xs: 200 },
              height: { md: 400, sm: 300, xs: 200 },
            }}
          />
        </Grid>
        <Grid
          container
          md={6}
          xs={12}
          pl={{ md: 10, xs: 0 }}
          justifyContent={{ md: "flex-start", xs: "center" }}
          alignContent="center"
        >
          <Box color="white">
            <h1>Hello!</h1>
            <h3>A Bit About Me </h3>
            <p>I'm Jush Liu</p>
          </Box>
        </Grid>
      </Grid>
      <Stack bgcolor="primary.main">
        <Divider sx={{ borderColor: "white", m: 4 }} />
      </Stack>
    </>
  );
};
