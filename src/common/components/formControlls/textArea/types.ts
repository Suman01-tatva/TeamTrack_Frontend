export interface TextareaFieldProps {
    id?: string;
    name: string;
    label: string;
    disabled?: boolean;
    readonly?: boolean;
    className?: string;
    value?: string;
    minRows?: number;
    maxRows?: number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  }
  