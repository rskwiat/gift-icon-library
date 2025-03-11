import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ToastContainer } from 'react-toastify';
import { Gallery, Header } from './components';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="font-montserrat">
        <Header title="MediaBrix Icon Gallery" />
        <Gallery />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar
          theme="light"
        />
      </main>
    </QueryClientProvider>
  );
};

export default App;
