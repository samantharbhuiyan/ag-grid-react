import { useEffect, useMemo, useState, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function App() {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();
  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    {
      field: "price",
    },
  ]);

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      editable: true,
    }),
    []
  );

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  return (
    <div
      className="ag-theme-material"
      style={{ height: "500px", width: "600px" }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        editType={"fullRow"}
        pagination={true}
        animateRows={true}
      />
    </div>
  );
}

export default App;
