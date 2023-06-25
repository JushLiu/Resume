import React from "react";
import {
  Avatar,
  CardMedia,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

export const Resume = () => {
  return (
    <>
      <Grid container bgcolor="primary.main" color="white">
        <Grid item xs={12} p={10} sx={{ pl: { md: 20, xs: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Resume
          </Typography>
        </Grid>
        <Grid container md={6} xs={12} sx={{ pl: { md: 20, xs: 6 } }}>
          <Typography variant="h4">Work Experience</Typography>
        </Grid>
        <Grid
          container
          md={6}
          xs={12}
          sx={{ p: { md: 0, xs: 6 }, pl: { md: 0, xs: 6 } }}
          spacing={{ md: 0, xs: 2 }}
        >
          <Grid item md={3} xs={12}>
            <Typography>2019 - present</Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>
              Sterility Inspector in YF chemical corp.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>

        <Grid container md={6} xs={12}>
          <Grid item xs={12} sx={{ pl: { md: 20, xs: 6 } }}>
            <Typography variant="h4">Education</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          md={6}
          xs={12}
          sx={{
            p: { md: 0, xs: 6 },
            pl: { md: 0, xs: 6 },
          }}
          spacing={{ md: 0, xs: 2 }}
        >
          <Grid item md={3} xs={12}>
            <Typography>2015 - 2017</Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>
              Fu Jen Catholic University
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: { md: 350, sm: 300, xs: 200 },
              }}
              image="/FJU.jpg"
              alt="Fu Jen Catholic University"
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <Typography>2012 - 2015</Typography>
          </Grid>
          <Grid item md={9} xs={12}>
            <Typography sx={{ fontWeight: "bold" }}>
              National Yilan Senior High School
            </Typography>

            <CardMedia
              component="img"
              sx={{
                width: { md: 350, sm: 300, xs: 200 },
              }}
              image="/Yilan.jpg"
              alt="National Yilan Senior High School"
            />
          </Grid>
        </Grid>

        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>

        <Grid container md={6} xs={12} sx={{ pl: { md: 20, xs: 6 } }}>
          <Typography variant="h4">Skills & Expertise</Typography>
        </Grid>
        <Grid
          container
          md={6}
          xs={12}
          sx={{ p: { md: 0, xs: 6 }, pl: { md: 0, xs: 6 } }}
        >
          <List>
            <ListItem>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar alt="React" src="/React.png" />
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="React Js" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar alt="React" src="/Js.png" />
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Javascript" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} p={4}>
          <Divider sx={{ borderColor: "white" }} />
        </Grid>
      </Grid>
    </>
  );
};
