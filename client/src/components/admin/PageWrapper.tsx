import Box from "@mui/material/Box";
import React from "react";
interface PageWrapperProps {
  children: React.ReactNode;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "70px auto",

        width: "80vw",
        borderRadius: "5px",
        padding: 5,
      }}
    >
      {children}
    </Box>
  );
}

export default PageWrapper;
