// Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>React Hook Form 練習</h1>
        <nav>
          <a href="/">基本フォーム</a>
          <br />
          <a href="/about">バリデーション</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer>© 2025 React Hook Form Practice</footer>
    </div>
  );
};

export default Layout;
