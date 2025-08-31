import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  )
}

// ✅ Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "*", // ✅ handle 404 routes
      element: <h1>404 - Page Not Found</h1>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

  