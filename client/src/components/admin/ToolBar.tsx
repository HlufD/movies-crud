import { useState } from "react";
import { GridToolbarExport, GridToolbarQuickFilter } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { urlToPageMap } from "../../utils/utils";
import { useLocation } from "react-router-dom";
import { FormModal } from "../common/Modal";
import AddProgramForm from "../Programs/AddProgramForm";
import AddChannelForm from "../channel/AddChannelForm";

const ToolBar = () => {
  const { pathname } = useLocation();
  const [openFormModal, setOpenFormModal] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem",
        gap: 10,
      }}
    >
      <GridToolbarQuickFilter sx={{ flex: 1 }} />

      <Box>
        <GridToolbarExport />
        <Button
          variant="outlined"
          sx={{
            marginLeft: 2,
            textTransform: "capitalize",
            backgroundColor: "#003366",
            color: "white",
            ":hover": {
              backgroundColor: "white",
              color: "#003366",
            },
          }}
          onClick={() => setOpenFormModal(true)}
        >
          Add {urlToPageMap.get(pathname)}
        </Button>
      </Box>

      <FormModal
        open={openFormModal}
        onClose={() => setOpenFormModal(false)}
        title={`Add ${urlToPageMap.get(pathname)}`}
      >
        {urlToPageMap.get(pathname) === "Channel" ? (
          <AddChannelForm />
        ) : (
          <AddProgramForm />
        )}
      </FormModal>
    </Box>
  );
};

export default ToolBar;
