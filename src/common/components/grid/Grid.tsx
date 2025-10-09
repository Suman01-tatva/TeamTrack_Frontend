import { Box } from "@mui/material";
import type { GridSortModel } from "@mui/x-data-grid";
import type { GridPaginationModel } from "@mui/x-data-grid";
import type { GridColDef } from "@mui/x-data-grid";
import { DataGrid } from "@mui/x-data-grid";
import type { FormControlConfig } from "../../types/commonTypes";
import FormControl from "../formControls/formControls";

interface ServerDataGridProps<T extends { id: string | number }> {
  columns: GridColDef<T>[];
  data: T[];
  loading?: boolean;
  pageSizeOptions?: number[];
  paginationModel: GridPaginationModel;
  sortModel?: GridSortModel;
  action?: FormControlConfig[];
  onPageChange: (model: GridPaginationModel) => void;
  onSortChange: (model: GridSortModel) => void;
}

export default function CommonDataGrid<T extends { id: string | number }>({
  data,
  columns,
  loading = false,
  pageSizeOptions = [10, 25, 50],
  paginationModel,
  sortModel = [],
  action,
  onPageChange,
  onSortChange,
}: ServerDataGridProps<T>) {
  const actionsColumn: GridColDef<T> = {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    filterable: false,
    width: (action?.length ?? 0) * 80,
    renderCell: () => {
      return (
        <div className="flex justify-center items-center gap-2">
          {action?.map((act, index) => (
            <div key={index}>
              <FormControl formControlConfig={act} />
            </div>
          ))}
        </div>
      );
    },
  };
  const allColumns = [...columns, actionsColumn];
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={data}
        columns={allColumns}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: paginationModel,
          },
          sorting: {
            sortModel: sortModel.length > 1 ? [sortModel[0]] : sortModel,
          },
        }}
        pageSizeOptions={pageSizeOptions}
        onPaginationModelChange={onPageChange}
        // paginationMode="server"
        // sortingMode="server"
        onSortModelChange={onSortChange}
        disableRowSelectionOnClick
        autoHeight
        showToolbar
      />
    </Box>
  );
}
