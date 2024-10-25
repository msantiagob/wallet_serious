import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import ThemeProvider from './components/ThemeProvider';

const Layout = () => (
  <ThemeProvider>
    <Outlet />
  </ThemeProvider>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// children: [{ path: 'reportes', element: <Reportes /> }],
