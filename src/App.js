import {BrowserRouter} from "react-router-dom";
import './App.css';
import AppDashboard from "./components/dashboard/AppDashboard";
import {ReactQueryDevtools} from "react-query/devtools";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
                <AppDashboard />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
