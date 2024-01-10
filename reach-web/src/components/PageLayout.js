import { AppBar, Box, Container, Drawer, Toolbar, Typography, Link, IconButton, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Divider, useTheme, useMediaQuery } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Menu, Home, AccountCircle, QuestionMarkTwoTone } from "@mui/icons-material";

const drawerWidth = 240;

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
        px: 1,
        width: drawerWidth,
        height: "100%",
        backgroundColor: "gray",
      }}>
      <Link component={RouterLink} to="/" underline="none">
        <Typography variant="h6" color="textPrimary" sx={{ fontWeight: "bold", textAlign: "center", mt: 2, mb: 2 }}>
          Reach
        </Typography>
      </Link>
      <Divider />
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
          gap: 1,
          mb: 1,
          flexDirection: "column",
          display: "flex",
        }}>
        <Typography variant="caption">{currentUser?.email}</Typography>
        <Typography variant="overline" color="text.secondary">
          <Link >
            PRIVACY POLICY
          </Link>
        </Typography>
        <Typography variant="overline" color="text.secondary">
          <Link >
            TERMS & CONDITIONS
          </Link>
        </Typography>
        <Box sx={{ color: "text.disabled", display: "flex", alignItems: "center", gap: 1, justifyContent: "center" }}>
          <IconButton color="inherit">
            <QuestionMarkTwoTone />
          </IconButton>
          <Box>
            <Typography fontSize={12} textAlign="start">
              V
            </Typography>
            <Typography fontSize={10} textAlign="start">
              id
            </Typography>
          </Box>
        </Box>
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
            backgroundColor: "#212121",
            border: 0,
            borderBottom: "1px solid rgba(129, 199, 132, 0.5)",
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
          }}
          variant="outlined"
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
        <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
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
        <Box component="main" sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)` } }}>
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
