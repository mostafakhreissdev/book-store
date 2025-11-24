import React from 'react';

function Footer() {
  return (
    <footer  style={{
        background: "#222",
        color: "white",
        textAlign: "center",
        padding: "15px",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%"
      }}>
      &copy; {new Date().getFullYear()} MagicBook onlinestore. All rights reserved.
    </footer>
  );
}

export default Footer;
