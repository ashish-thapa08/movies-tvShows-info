import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Theme from './Theme';
import { QueryClientProvider, QueryClient, React } from 'react-query'
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Theme>
          <Home>
          </Home>
        </Theme>
      </QueryClientProvider>
    </>
  );
}

export default App;
