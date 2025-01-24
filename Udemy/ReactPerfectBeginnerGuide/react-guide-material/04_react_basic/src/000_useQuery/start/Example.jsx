import User from "./User";
// import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: "2em" }}>
        <h1>ユーザ情報</h1>
        <User />
      </div>
    </QueryClientProvider>
  );
}

export default App;
