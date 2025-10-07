import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Button, FormHelperText, styled, Typography } from "@mui/material";
import { useField } from "formik";
import { useState } from "react";
import type { FileUploadFieldProps } from "./types";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const FileUploadField: React.FC<{ fileUploadConfig: FileUploadFieldProps }> = ({
  fileUploadConfig,
}) => {
  const [, meta, helpers] = useField(fileUploadConfig.name);
  const [file, setFile] = useState<File | null>(null);

  const fileToBase64 = (file: Blob): Promise<string | ArrayBuffer | null> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      setFile(selectedFile);
      const base64 = await fileToBase64(selectedFile);
      helpers.setValue(base64);
    }
  };
  
  return (
    <>
      <Button
        component="label"
        role={fileUploadConfig.role}
        variant="contained"
        tabIndex={-1}
        startIcon={fileUploadConfig.startIcon || <CloudUploadIcon />}
        className={fileUploadConfig.className}
        accept={fileUploadConfig.accept}
        {...fileUploadConfig}
      >
        {fileUploadConfig.label}
        <VisuallyHiddenInput type="file" onChange={handleFileChange} />
      </Button>
      {file && (
          <Typography variant="body2" sx={{ pt: 1 , pb: 1 }}>
            {file.type.includes("image") ? (
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                style={{ maxWidth: "100%", maxHeight: 200 }}
              />
            ) : (
              file.name
            )}
          </Typography>
      )}

      {meta.touched && meta.error ? (
        <FormHelperText>
          <span className="text-red-600">{meta.error}</span>
        </FormHelperText>
      ) : null}
    </>
  );
};

export default FileUploadField;
