import React, { type ReactNode } from "react";
import {
  type ButtonProps as MUIButtonProps,
} from "@mui/material";

export interface CustomButtonProps extends MUIButtonProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  to?: string;
}