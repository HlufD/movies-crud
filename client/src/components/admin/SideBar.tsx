import { Dashboard, Movie, Attachment } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { normalizePath } from "../../utils/utils";

const sideBarLinks = [
  {
    label: "Dashboard",
    link: "",
    icon: <Dashboard />,
  },
  {
    label: "Channels",
    link: "channels",
    icon: <Movie />,
  },
  {
    label: "Programs",
    link: "programs",
    icon: <Attachment />,
  },
];

function SideBar() {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "rows",
        },
        alignItems: "center",
        width: {
          xs: "100%",
          lg: 250,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "50px",

          boxShadow:
            "0px 0px 33px 0px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
        }}
      >
        <img src="/leaf.png" alt="logo" width={40} />
        <Typography variant="body1" component="h4">
          T-Movies
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 2,
        }}
      >
        {sideBarLinks.map((navLink) => {
          const fullPath = normalizePath(`/admin/${navLink.link}`);
          const isActive = pathname === fullPath;
          return (
            <Link
              to={navLink.link}
              key={navLink.label}
              style={{
                textDecoration: "none",
                display: "block",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  paddingX: 4,
                  paddingY: 1,
                  backgroundColor: isActive ? "#003366" : "#fff",
                  color: isActive ? "#fff" : "",
                  width: "100%",
                }}
              >
                {navLink.icon}
                <Typography variant="body2" component="h3" marginLeft={1}>
                  {navLink.label}
                </Typography>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
}

export default SideBar;
