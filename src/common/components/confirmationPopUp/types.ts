export interface PopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  form?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  size?: "sm" | "lg" | "xl" | "md";
  children?: React.ReactNode;
  showAction?: boolean;
}