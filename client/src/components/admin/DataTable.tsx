/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { ConfirmationModal } from "../common/Modal"; // Assuming your modal component is in the same directory
import ToolBar from "./ToolBar";

interface Props<T, U> {
  rows: T[];
  columns: U[];
  path: string;
}

const CustomDataGrid: React.FC<Props<any, any>> = ({ rows, columns, path }) => {
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmedDelete = () => {
    if (deleteId !== null) {
      // Handle delete action here, for example:
      alert(`Deleting row with id: ${deleteId}`);
      // After deletion, close the modal
      setShowModal(false);
    }
  };

  const updatedColumns = columns.map((column) => ({
    ...column,
    renderCell:
      column.field === "actions"
        ? (params: { row: any }) => (
            <div>
              <Link to={`/admin/${path}/${params.row.id}`}>
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
              </Link>
              <IconButton
                aria-label="delete"
                onClick={() => handleDelete(params.row.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          )
        : undefined,
  }));

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        columns={updatedColumns}
        slots={{ toolbar: ToolBar }}
      />
      <ConfirmationModal
        open={showModal}
        onClose={() => setShowModal(false)}
        title="Confirmation"
        content="Are you sure you want to delete this item?"
        onConfirm={confirmedDelete} // Pass the confirmedDelete function
      />
    </div>
  );
};

export default CustomDataGrid;
