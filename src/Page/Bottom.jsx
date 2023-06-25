import { Box, Grid } from "@mui/material";
import React from "react";

export const Bottom = () => {
  return (
    <Grid container>
      <Grid item md={3} xs={12} sm={6}>
        <Box bgcolor="primary.main" color="white" p={1} pl={6} pt={2}>
          <b>Phone</b>
        </Box>
        <Box bgcolor="primary.main" color="white" p={1} pl={6}>
          0903153135
        </Box>
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <Box bgcolor="primary.main" color="white" p={1} pl={6} pt={2}>
          <b>Email</b>
        </Box>
        <Box bgcolor="primary.main" color="white" p={1} pl={6}>
          jushhhhhh@gmail.com
        </Box>
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <Box bgcolor="primary.main" color="white" p={1} pl={6} pt={2}>
          <b>Follow Me</b>
        </Box>
        <Box bgcolor="primary.main" color="white" p={1} pl={6}>
          Line id: 403271254
        </Box>
      </Grid>
      <Grid item md={3} xs={12} sm={6}>
        <Box
          bgcolor="primary.main"
          color="white"
          p={1}
          pl={{ md: 4, xs: 6 }}
          pt={3}
          pb={2}
        >
          © 2022 By Jush liu.
          <br />
          Proudly created with React.
        </Box>
      </Grid>
    </Grid>
  );
};
