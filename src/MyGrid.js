// Import React and necessary hooks.
import React, { useState } from "react";
// Import AG Grid React component, which is a part of the AG Grid ecosystem to display tables/grids.
import { AgGridReact } from "ag-grid-react";

// Import core grid styles from AG Grid.
import "ag-grid-community/styles/ag-grid.css";
// Import theme for AG Grid to customize the grid's appearance.
import "ag-grid-community/styles/ag-theme-balham.css";

function MyGrid() {
  // State to manage the data (rows) displayed in the grid.
  const [rowData, setRowData] = useState([
    { name: "John", age: 24 },
    { name: "Jane", age: 22 },
  ]);

  // Define columns for the grid with header names and respective data fields.
  const columns = [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
  ];

  // Render the AG Grid component with specified columns and row data.
  return (
    <div
      // Assigning AG Grid's Alpine theme class to style the grid.
      className="ag-theme-balham"
      // Define a fixed height and width for the grid.
      style={{ height: "300px", width: "600px" }}
    >
      {/* AgGridReact component to render the grid. Pass columns and row data as props. */}

      <AgGridReact columnDefs={columns} rowData={rowData} />
    </div>
  );
}

// Export the MyGrid component for use in other parts of the application.
export default MyGrid;
