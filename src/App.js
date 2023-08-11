// Import necessary hooks and functionalities from react and firebase.
import { useState, useEffect } from "react";
import { db } from "./firebase"; // Firebase configuration and initialization.
import { ref, set } from "firebase/database"; // Firebase database utilities.
import { uid } from "uid"; // Utility to generate unique IDs.

// Import styles for AG Grid (a JavaScript Data Grid library).
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

// Import custom components.
import AddUserForm from "./components/AddUserForm";
import Grid from "./components/Grid";

function App() {
  // State to trigger a refresh for the grid when new data is written.
  const [refreshGrid, setRefreshGrid] = useState(false);

  /**
   * Writes a new user entry to the Firebase database.
   *
   * @param {Object} data - User data to be stored.
   * @param {string} data.name - Name of the user.
   * @param {string} data.ou - Organizational unit of the user.
   * @param {string} data.role - Role of the user.
   * @param {number} data.age - Age of the user.
   */
  const writeToDatabase = (data) => {
    // Generate a unique ID for the new user entry.
    const id = uid();

    // Write the data to the Firebase database under the 'employees' node.
    set(ref(db, `employees/${id}`), {
      name: data.name,
      ou: data.ou,
      role: data.role,
      age: data.age,
      id,
    });

    // Toggle the refresh state to trigger a re-fetch of the grid data.
    setRefreshGrid(!refreshGrid);
  };

  // Render the application.
  return (
    <>
      {/* Form to add new users. On submission, it writes to the database. */}
      <AddUserForm onSubmit={writeToDatabase} />

      {/* Grid that displays user data and refreshes based on the refreshGrid state. */}
      <Grid refresh={refreshGrid} />
    </>
  );
}

// Export the App component for use in other parts of the application.
export default App;
