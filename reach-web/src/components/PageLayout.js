import { AppBar, Box, Container, Drawer, Toolbar, Typography, Link, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, useTheme, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, Home, AccountCircle } from "@mui/icons-material";
import { DRAWER_WIDTH } from "../utils/constants";

const navItems = [
  {
    text: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    text: "Login",
    path: "/login",
    icon: <AccountCircle />,
  },
  {
    text: "Signup",
    path: "/signup",
    icon: <AccountCircle />,
  },
];

const liStyling = {
  "&.Mui-selected": { borderRadius: "2px", background: "rgba(15, 151, 79, 0.30)" },
};

const PageLayout = (props) => {
  const { currentUser, currentClaims } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        pt: 3,
        width: DRAWER_WIDTH,
        height: "100%",
      }}>
      <Box sx={{ px: 1 }}>
        <Link component={RouterLink} to="/" underline="none">
          <Typography variant="h6" color="textPrimary" sx={{ fontWeight: "bold", textAlign: "center", mt: 2, mb: 2 }}>
            Reach
          </Typography>
        </Link>
        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.text}>
              <ListItem disablePadding>
                <ListItemButton sx={liStyling} selected={location.pathname === item.path} LinkComponent={item.children ? undefined : RouterLink} to={item.children ? undefined : item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
        <Box
          sx={{
            mt: "auto",
          }}></Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          minHeight: "100VH",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <AppBar
          component="nav"
          position="fixed"
          sx={{
            border: 0,
            width: { md: `calc(100% - ${DRAWER_WIDTH}px)` },
            ml: { md: `${DRAWER_WIDTH}px` },
          }}
          elevation={0}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
              <IconButton size="large" color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
                <Menu />
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Link component={RouterLink} to="/" color="inherit">
                  <Typography variant="h6" noWrap sx={{ fontWeight: "bold" }}>
                    Reach
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH },
            }}>
            {drawer}
          </Drawer>
          <Drawer
            open
            elevation={2}
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": { boxSizing: "border-box" },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
          <Toolbar />
          <Container disableGutters maxWidth={false}>
            {props.children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default PageLayout;
