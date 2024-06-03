import { Box } from "@mui/material";
import SideBar from "../components/admin/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <SideBar />
      <Box
        sx={{
          width: "100%",
          overflowY: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
