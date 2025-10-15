import React from "react";

const Home = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100%", // để khớp với layout h-100 bên ngoài
        width: "100%",
      }}
    >
      <h1
        style={{
          color: "red",
          fontSize: "70px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Hello <br /> World!
      </h1>
    </div>
  );
};

export default Home;
