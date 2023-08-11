import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
} from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

function App() {
  const [rowData, setRowData] = useState([]);
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
  ]);

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);
  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);

  // const cellClicked = useCallback((e) => console.log("cellClicked" + e));

  const button = useCallback((e) => {
    console.log(gridRef.current.api.getDispalyedRowCount());
  });

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 500 }}>
      <h1>My ag-Grid App</h1>
      <button onClick={button}> Click</button>
      <AgGridReact
        ref={gridRef}
        // onCellClicked={cellClicked}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection="multiple"
        animateRows={true}
      />
    </div>
  );
}

export default App;
