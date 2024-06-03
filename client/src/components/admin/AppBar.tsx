import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { urlToPageMap } from "../../utils/utils";

function AppBar() {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: 3,
        position: "fixed",
        top: 0,
        left: 210,
        width: "calc(100% - 210px)",
      }}
    >
      <Box>
        <Typography variant="h6" component="h3">
          {urlToPageMap.get(pathname)}s
        </Typography>
      </Box>
      <Box>
        <NotificationsIcon />
        <AccountCircleIcon sx={{ marginLeft: 1 }} />
      </Box>
    </Box>
  );
}

export default AppBar;
