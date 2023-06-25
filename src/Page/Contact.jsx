import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { inputLabelClasses } from "@mui/material/InputLabel";
export const Contact = () => {
  return (
    <>
      <Grid container bgcolor="primary.main" color="white" minHeight="100vh">
        <Grid item xs={12} md={6} sm={6} p={10} sx={{ pl: { md: 20, xs: 6 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          <Typography variant="subtitle1">
            Looking forward to hearing from you
          </Typography>
          <Box my={4}>
            <Typography variant="h5">Phone</Typography>
            <Typography variant="subtitle1">0903153135</Typography>
          </Box>
          <Typography variant="h5">Email</Typography>
          <Typography variant="subtitle1">jushhhhhh@gmail.com</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          pt={10}
          sx={{ pl: { md: 10, sm: 0, xs: 6 } }}
        >
          <Stack
            direction="column"
            spacing={4}
            width={{ md: "300px", xs: "250px" }}
          >
            <TextField
              label="Full Name"
              variant="standard"
              color="secondary"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "orange",
                  },
                },
              }}
            />
            <TextField
              label="Phone"
              variant="standard"
              color="secondary"
              InputLabelProps={{
                sx: {
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "orange",
                  },
                },
              }}
            />
            <TextField
              label="Email"
              variant="standard"
              color="secondary"
              InputLabelProps={{
                sx: {
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "orange",
                  },
                },
              }}
            />
            <TextField
              label="Subject"
              variant="outlined"
              color="secondary"
              multiline
              rows={5}
              InputLabelProps={{
                sx: {
                  color: "white",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "orange",
                  },
                },
              }}
            />
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Stack bgcolor="primary.main">
        <Divider sx={{ borderColor: "white", m: 4 }} />
      </Stack>
    </>
  );
};
