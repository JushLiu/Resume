import React from "react";
import Project3 from "./Project3.jpg"; // 第二種方式引入圖片
import { CardMedia, Divider, Grid, Typography } from "@mui/material";

export const Project = () => {
  return (
    <>
      <Grid container bgcolor="primary.main" color="white">
        <Grid item xs={12} p={10} sx={{ pl: { md: 20, xs: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Project
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 20, xs: 6 }, pr: { md: 10, xs: 6 }, mb: 4 }}
        >
          <Typography variant="h5">Project Name 01</Typography>
          <Typography>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pl: { md: 10, xs: 6 }, mb: 4 }}>
          <CardMedia
            component="img"
            sx={{
              width: { md: 500, sm: 400, xs: 250 },
            }}
            image="/Project1.jpg"
            alt="Project1"
          />
        </Grid>
        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 20, xs: 6 }, pr: { md: 10, xs: 6 }, mb: 4 }}
        >
          <Typography variant="h5">Project Name 02</Typography>
          <Typography>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pl: { md: 10, xs: 6 }, mb: 4 }}>
          <CardMedia
            component="img"
            sx={{
              width: { md: 500, sm: 400, xs: 250 },
            }}
            image="/Project2.jpg"
            alt="Project2"
          />
        </Grid>
        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ pl: { md: 20, xs: 6 }, pr: { md: 10, xs: 6 }, mb: 4 }}
        >
          <Typography variant="h5">Project Name 03</Typography>
          <Typography>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ pl: { md: 10, xs: 6 }, mb: 4 }}>
          <CardMedia
            component="img"
            sx={{
              width: { md: 500, sm: 400, xs: 250 },
            }}
            image={Project3}
            alt="Project3"
          />
        </Grid>
        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>
      </Grid>
    </>
  );
};
