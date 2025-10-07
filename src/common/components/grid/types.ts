import type {
  GridColDef,
  GridPaginationModel,
  GridSortModel,
} from "@mui/x-data-grid";

interface GridAction<T> {
  label: string;
  icon?: React.ReactNode;
  onClick: (row: T) => void;
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning";
  show?: (row: T) => boolean;
}

export interface ServerDataGridProps<T extends { id: string | number }> {
  columns: GridColDef<T>[];
  data: T[];
  loading?: boolean;
  actions?: GridAction<T>[];
  pageSizeOptions?: number[];
  paginationModel: GridPaginationModel;
  sortModel?: GridSortModel;
  onPageChange: (paginationModel: GridPaginationModel) => void;
  onSortChange?: (sortModel: GridSortModel) => void;
  onSearch?: (searchQuery: string) => void;
}
