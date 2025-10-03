import React, {lazy, Suspense, useState, useEffect} from "react";
import  ReactDOM from "react-dom/client";
import Header  from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import UserContext from "./utils/UserContext";


// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery")); // this is known as lazy loading or code splitting or dynamic loading or on demand loading or deferred loading


const AppLayout = () => {

  const [userName, setUserName] = useState();
  // authentication code
  useEffect(() => {
    // Make an API call and send UserName and Password
    const data = {
      name : "Naveen Singh",
    }
    setUserName(data.name);
  },[]);


  return (
    // Default Value for the loggedInUser prop
    <UserContext.Provider value={{ loggedInUser: userName , setUserName}}>
      {/* Naveen Singh */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser : "Piyush Singh"}}>
        <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

// ✅ Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          // suspending for lazy loading : this will show a loading screen while the component is loading the grocery component is loading. 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)

  