// Import necessary utilities from Firebase to initialize the application and access the database.
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration object containing necessary details to connect to the Firebase project.
// Be cautious about exposing this publicly as it contains sensitive project identifiers.
const firebaseConfig = {
  apiKey: "AIzaSyCm2EhS4W-HUpQGI7KX96evUI0_3HXIrYA",
  authDomain: "ag-grid-project-d088a.firebaseapp.com",
  databaseURL: "https://ag-grid-project-d088a-default-rtdb.firebaseio.com",
  projectId: "ag-grid-project-d088a",
  storageBucket: "ag-grid-project-d088a.appspot.com",
  messagingSenderId: "853523772929",
  appId: "1:853523772929:web:b9b5c3327c7a9b1038b200",
};

// Initialize the Firebase application with the provided configuration.
const app = initializeApp(firebaseConfig);

// Access and export the database from the initialized Firebase app for use in other parts of the application.
export const db = getDatabase(app);
