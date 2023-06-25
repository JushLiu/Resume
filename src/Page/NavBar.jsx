import {
  AppBar,
  Button,
  Box,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { useState } from "react";

const pages = ["Resume", "Project", "Contact"];

export const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            component={Link}
            to={"/"}
            sx={{
              ":hover": {
                bgColor: "primary.light",
                color: "rgb(240, 240, 18)",
              },
            }}
          >
            <HomeIcon />
            <Typography variant="h6" component="div" sx={{ pl: 2 }}>
              Home
            </Typography>
          </IconButton>
        </Stack>

        <Box sx={{ display: { xs: "flex", sm: "none", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Button
                  color="inherit"
                  size="large"
                  component={Link}
                  to={`/${page}`}
                >
                  {page}
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem color="white" />}
          sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
        >
          {pages.map((page) => (
            <Button
              color="inherit"
              size="large"
              component={Link}
              to={`/${page}`}
              sx={{
                ":hover": {
                  bgColor: "primary.light",
                  color: "rgb(240, 240, 18)",
                },
              }}
            >
              {page}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
