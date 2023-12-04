import { ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import theme from "./theme/theme";
import { Navbar, Footer, Notification } from "./components/index";
import { Home, Category, Product, About } from "./pages/index";

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <Notification />
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </ThemeProvider>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/category/:id",
                element: <Category />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
]);

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
