// TypeScript interfaces for the data, (data types)
export interface RowData {
  id: number;
  name: string;
  age: number;
}

//some constant datas
export const data: RowData[] = [
  { id: 1, name: "Muhammed Shamal", age: 20 },
  { id: 2, name: "Kashyap CT", age: 24 },
  { id: 3, name: "Manjima C", age: 22 },

  { id: 4, name: "Ismail", age: 23 },
  { id: 5, name: "Adhithya", age: 24 },
  { id: 6, name: "Shasin TS", age: 24 },
];

//props for table
export interface TableUIProps {
  rows: RowData[];
  sortConfig: {
    key: keyof RowData;
    direction: "asc" | "desc";
  };
  anchorEl: HTMLElement | null;
  selectedRow: RowData | null;
  loading: boolean;

  handleSort: (column: keyof RowData) => void;
  handleMenuClick: (event: React.MouseEvent<HTMLElement>, row: RowData) => void;
  handleMenuClose: () => void;
  handleUpdate: (action: "edit") => void;
  handleDelete: (action: "delete") => void;
}

//props for modal
export interface ModalUIProps {
  isModalOpen: boolean;
  editData: RowData | null; // Allow null for when no data is being edited
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateSubmit: () => void;
  setOpenModal: (open: boolean) => void;
}
