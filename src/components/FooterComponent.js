import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        © Copyright 2020 David Smith
      </p>
    </div>
  );
}

export default Footer;
