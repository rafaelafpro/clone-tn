import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <h4 style={styles.title}>Em construção</h4>
    </div>
  );
}

// style this page

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "lightgray",
  },
  title: {
    fontSize: "3rem",
    fontWeight: "bold",
  },
};
