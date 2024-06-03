import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  onConfirm: () => void;
}

interface FormModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const DefaultStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ConfirmationModal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  content,
  onConfirm,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={DefaultStyle}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
          <Button onClick={onClose} color="primary" sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button onClick={onConfirm} variant="contained" color="primary">
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export const FormModal: React.FC<FormModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="form-modal-title"
      aria-describedby="form-modal-description"
    >
      <Box sx={DefaultStyle}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography id="form-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Button onClick={onClose} variant="outlined">
            <CloseOutlinedIcon />
          </Button>
        </Box>

        <Box component="form" sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Modal>
  );
};
