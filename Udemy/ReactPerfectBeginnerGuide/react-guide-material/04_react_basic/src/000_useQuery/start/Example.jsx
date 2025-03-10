import User from "./User";
// import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {
  const [show, setShow] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
        </div>
        <h1>ユーザ情報</h1>
        {show && <User />}
      </div>
    </QueryClientProvider>
  );
}

export default App;
