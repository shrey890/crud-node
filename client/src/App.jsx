import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
const Layout = () => {
  return(
      <>
      <Navbar />
      <Outlet/>
      <Footer/>
      </>
  )
}
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/post/:id',
        element:<Single/>
      },
      {
        path:'/Write',
        element:<Write/>
      },
    ]
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	// {
	// 	path: "/write",
	// 	element: <Write />,
	// },
	// {
	// 	path: "/single",
	// 	element: <Single />,
	// },
]);
const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
