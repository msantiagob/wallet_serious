import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ThemeProvider from './components/ThemeProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

// children: [{ path: 'reportes', element: <Reportes /> }],
