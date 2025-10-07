import { IconButton, Button as MUIButton } from "@mui/material";
import { Link } from "react-router";
import { type ButtonProps } from "./types";

const Button: React.FC<{
  buttonConfig: ButtonProps;
}> = ({ buttonConfig }) => {
  const {
    iconOnly,
    icon,
    to,
    onClick,
    className,
    variant,
    type,
    style,
    startIcon,
    endIcon,
    fullWidth = true,
    label,
    ...rest
  } = buttonConfig;

  if (iconOnly && icon) {
    return (
      <IconButton
        component={to ? Link : 'button'}
        to={to}
        onClick={onClick}
        className={`flex justify-center items-center ${className || ''}`}
        sx={{
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        }}
        {...rest}
      >
        {icon}
      </IconButton>
    );
  }

  return (
    <MUIButton
      variant={variant || "contained"}
      component={to ? Link : "button"}
      type={type ?? "button"}
      to={to}
      onClick={onClick}
      className={className}
      style={style}
      fullWidth={fullWidth}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
    >
      {label}
    </MUIButton>
  );
};

export default Button;
