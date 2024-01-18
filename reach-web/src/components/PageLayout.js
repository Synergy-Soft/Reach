import { AppBar, Box, Container, Drawer, Toolbar, Typography, Link, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, useTheme, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, Home, AccountCircle, Login } from "@mui/icons-material";
import { DRAWER_WIDTH } from "../utils/constants";
import theme from "../theme";
import LogoDark from "../assets/logo-dark.svg";

const navItems = [
  {
    text: "Home",
    path: "/",
    icon: <Home />,
  },
  {
    text: "Login",
    path: "/login",
    icon: <Login />,
  },
];

const liStyling = {
  mt: 1,
  "&.Mui-selected": { borderRadius: 1, backgroundColor: theme.palette.primary.light, color: theme.palette.text.dark },
  "&.Mui-selected:hover": { borderRadius: 1, backgroundColor: theme.palette.secondary.light },
  "&:hover": { borderRadius: 1, backgroundColor: theme.palette.secondary.light, color: theme.palette.text.dark },
};

const PageLayout = (props) => {
  const { currentUser, currentClaims } = useContext(AuthContext);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

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
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: .5}}>
            <Box sx={{ width: 40, height: 40 }}>
              <img src={LogoDark} alt="Logo" sx={{ width: "100%", height: "100%" }} />
            </Box>
            <Box>
              <Typography variant="h4" fontSize={38} fontWeight={700} color={"text.primary"}>
                Reach
              </Typography>
            </Box>
          </Box>
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
        <AppBar component="nav" position="fixed" elevation={0}>
          <Toolbar>
            <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between", }}>
              <IconButton size="large" color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { md: "none" } }}>
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: { md: DRAWER_WIDTH }, flexShrink: { md: 0 } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: DRAWER_WIDTH },
            }}>
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${DRAWER_WIDTH}px)` } }}>
          <Toolbar />
          <Container disableGutters maxWidth={false} theme={theme}>
            {props.children}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default PageLayout;
