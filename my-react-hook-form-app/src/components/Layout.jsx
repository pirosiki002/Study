// Layout.jsx
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>My App</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2025 My App</footer>
    </div>
  );
};

export default Layout;
