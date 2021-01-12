import logo from "./logo.svg";
import "./App.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import Parent from "./components/Parent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ReactQueryDevtools initialIsOpen={false} />
        <Parent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
