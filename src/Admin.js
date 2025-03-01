import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";
import adminBackground from "C:/Users/hp/Desktop/fullstack/login-page/src/adminback.jpg"; // Adjust path

const Admin = () => {
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleLogout = () => {
    navigate("/");
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileName(file.name);

    // Read the file
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (e) => {
      const binaryString = e.target.result;
      const workbook = XLSX.read(binaryString, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet to JSON
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setTableData(parsedData);
    };
  };

  const handleFileRemove = () => {
    setFileName("");
    setTableData([]);
    document.getElementById("fileInput").value = "";
  };

  return (
    <div style={{ ...styles.container, backgroundImage: `url(${adminBackground})` }}>
      <div style={styles.welcomeMessage}>Welcome Admin</div>
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>
      <div style={styles.functionalityContainer}>
        <h2 style={styles.sectionTitle}>Admin Dashboard</h2>
      </div>
      <div style={styles.inputContainer}>
        <label htmlFor="fileInput" style={styles.inputLabel}>
          Import Excel Sheet:
        </label>
        <input
          type="file"
          id="fileInput"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          style={styles.fileInput}
        />
        {fileName && (
          <div>
            <div style={styles.fileName}>Selected File: {fileName}</div>
            <button onClick={handleFileRemove} style={styles.removeButton}>
              Remove File
            </button>
          </div>
        )}
      </div>

      {/* Display Excel Data in Table */}
      {tableData.length > 0 && (
        <div style={styles.tableContainer}>
          <h3 style={styles.sectionTitle}>Excel Data</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((key) => (
                  <th key={key} style={styles.th}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, colIndex) => (
                    <td key={colIndex} style={styles.td}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    position: "relative",
    padding: "80px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "60vh",
    color: "#333",
  },
  welcomeMessage: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "50px",
    fontWeight: "bold",
    color: "#800080",
  },
  logoutButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#FF5722",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  functionalityContainer: {
    marginTop: "20px",
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "white",
  },
  inputContainer: {
    marginTop: "30px",
    textAlign: "center",
    width: "400px",
    height: "150px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  inputLabel: {
    display: "block",
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  fileInput: {
    fontSize: "16px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    outline: "none",
  },
  fileName: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#555",
  },
  removeButton: {
    marginTop: "10px",
    padding: "8px 16px",
    fontSize: "14px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  tableContainer: {
    marginTop: "30px",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    margin: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  th: {
    backgroundColor: "#00bfae",
    color: "white",
    padding: "10px",
    border: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

export default Admin;
