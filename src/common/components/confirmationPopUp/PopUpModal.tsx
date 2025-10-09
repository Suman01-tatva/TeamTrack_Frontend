import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { PopUpModalProps } from "./types";
import type { ButtonProps } from "../button/types";
import Button from "../button/Button";
import { GetButtonConfig } from "../../utils/formControlConfig";

const PopUpModal: React.FC<{ popUpModalConfig: PopUpModalProps }> = ({
  popUpModalConfig,
}) => {
  const {
    isOpen,
    onClose,
    onConfirm,
    title,
    confirmText = "Yes",
    cancelText = "No",
    size = "sm",
    showAction = true,
    message,
  } = popUpModalConfig;

  const confirmBtnConfig: ButtonProps = GetButtonConfig(
    "button",
    "submit-btn",
    confirmText,
    "contained",
    false,
    onConfirm
  );
  const cancelBtnConfig: ButtonProps = GetButtonConfig(
    "button",
    "cancel-btn",
    cancelText,
    "contained",
    false,
    onClose
  );

  const handleClose = (_e: unknown, reason?: string) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    onClose();
  };
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth={size}
      disableEscapeKeyDown
      aria-labelledby="pop-up-modal-title"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography id="pop-up-modal-title" variant="h6">
          {title}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography sx={{ mt: 2, mb: 2 }}>{message}</Typography>
      </DialogContent>
      {showAction && (
        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button buttonConfig={confirmBtnConfig}></Button>
          <Button buttonConfig={cancelBtnConfig}></Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default PopUpModal;
