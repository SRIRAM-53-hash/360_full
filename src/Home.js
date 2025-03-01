import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Sample user data
  const user = {
    name: "John Doe",
    profileImage: "https://via.placeholder.com/100", // Replace with actual image URL
    id: "22IT000", // Add the ID here
  };

  const handleLogout = () => {
    navigate("/ "); // Redirect to login page
  };

  const handleDownload = () => {
    // Handle the download functionality here
    alert("Download initiated!");
  };

  return (
    <div style={styles.container}>
      {/* Logout Button */}
      <button onClick={handleLogout} style={styles.logoutButton}>
        Logout
      </button>

      {/* Score section */}
      <div style={styles.scoreSection}>
        <span style={styles.scoreLabel}>Overall Score</span>
        <div style={styles.markBox}>100</div>
      </div>

      {/* Profile section */}
      <div style={styles.profile}>
        <div style={styles.profileImageContainer}>
          <img 
            src={user.profileImage} 
            alt="Profile" 
            style={styles.profileImage} 
          />
        </div>
        <div>
          <span style={styles.name}>{user.name}</span>
          <div style={styles.id}>{user.id}</div>
        </div>
      </div>

      {/* Boxes Section */}
      <div style={styles.boxContainer}>
        {/* First Row */}
        <div style={styles.row}>
          <div style={styles.box}>Academic Feedback</div>
          <div style={styles.box}>Students Result</div>
          <div style={styles.box}>Faculty Score</div>
        </div>

        {/* Second Row */}
        <div style={styles.row}>
          <div style={styles.box}>Student Self Improvement</div>
          <div style={styles.box}>Contribution to Society</div>
          <div style={styles.box}>Responsibility</div>
        </div>
      </div>

      {/* Download Button */}
      <button onClick={handleDownload} style={styles.downloadButton}>
        Download Report
      </button>
    </div>
  );
};

// Inline styles for the component
const styles = {
  container: {
    textAlign: "center",
    position: "relative",
  },
  scoreSection: {
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
  },
  scoreLabel: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "5px",
    display: "block",
  },
  markBox: {
    backgroundColor: "#4CAF50", // Green background
    color: "#fff", // White text
    padding: "5px 10px",
    fontSize: "40px",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  profile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginBottom: "20px",
    paddingLeft: "20px",
    marginTop: "30px", // Reduced the top margin to lift content
  },
  profileImageContainer: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    border: "3px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(90deg, #4CAF50, #2196F3, #FF5722)", // Gradient border
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15px",
  },
  profileImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  id: {
    fontSize: "20px",
    color: "#666",
    fontWeight: "bold",
    marginTop: "10px", // Add spacing below the name
  },
  boxContainer: {
    marginTop: "30px", // Reduced the top margin to lift the boxes up
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  row: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  box: {
    width: "250px",
    height: "120px",
    backgroundColor: "#f5f5f5", // Light gray background
    color: "#333",
    fontSize: "18px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
    cursor: "pointer",
  },
  logoutButton: {
    position: "absolute",
    top: "20px", // Adjusted to align with the top of the page
    right: "30px",
    padding: "10px 20px",
    backgroundColor: "#FF5722", // Red button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  downloadButton: {
    position: "fixed", // Keeps it at the bottom
    bottom: "20px", // Adjusts the vertical position
    left: "50%", // Centers it horizontally
    transform: "translateX(-50%)", // Centers it precisely
    padding: "10px 20px",
    backgroundColor: "#4CAF50", // Green button
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;
