import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useEffect, useState, useMemo } from "react";

const Grid = (props) => {
  const [rowData, setRowData] = useState({}); // Initialize as empty object
  const [columnDefs] = useState([
    { field: "name" },
    { field: "ou" },
    { field: "role" },
    { field: "age" },
  ]);

  const defaultColDef = useMemo(() => ({ sortable: true, filter: true }), []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ag-grid-project-d088a-default-rtdb.firebaseio.com/employees.json"
      );

      const data = await response.json();

      setRowData(data);
    };

    fetchData();
  }, [props.refresh]);

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 400, width: 800, margin: 100, marginLeft: 400 }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={Object.values(rowData)}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowHeight={50}
        headerHeight={50}
      />
    </div>
  );
};

export default Grid;
