import { Formik, Form } from "formik";
import FormControl from "../formControlls/formControlls";
import type { DynamicFormModalProps } from "./types/type";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { ButtonProps } from "../button/types";
import Button from "../button/Button";
import { GetButtonConfig } from "../../utills/formControllConfig";

const DynamicFormModal = <T extends object>({
  isOpen,
  title,
  onClose,
  onSubmit,
  formConfig,
  initialValues,
  validationSchema,
  confirmText = "Submit",
  cancelText = "Cancel",
}: DynamicFormModalProps<T>) => {

  const handleSubmit = (values: T) => {
    onSubmit(values);
    onClose();
  };

  const confirmBtnConfig: ButtonProps = GetButtonConfig(
    "submit",
    "submit-btn",
    confirmText,
    "contained",
    false
  );

  const cancelBtnConfig: ButtonProps = GetButtonConfig(
    "button",
    "cancel-btn",
    cancelText,
    "contained",
    false,
    onClose
  );

  return (
    <Dialog
      open={isOpen}
      onClose={(_, reason) => {
        if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
          onClose();
        }
      }}
      fullWidth
      maxWidth="sm"
      disableEscapeKeyDown
      aria-labelledby="dynamic-form-modal-title"
      scroll="body"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Typography id="dynamic-form-modal-title" variant="h6" component="span">
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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit: formikHandleSubmit }) => (
          <Form onSubmit={formikHandleSubmit}>
            <DialogContent dividers>
              {formConfig.map((item, index) => (
                <div key={index} className={`my-2 ${item.className || ""}`}>
                  <FormControl formControllConfig={item} />
                </div>
              ))}
            </DialogContent>

            <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
              <Button buttonConfig={confirmBtnConfig} />
              <Button buttonConfig={cancelBtnConfig} />
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default DynamicFormModal;
