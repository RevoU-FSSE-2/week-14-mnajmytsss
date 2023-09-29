import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./containers/Register";
import "./App.css";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import EditItem from "./containers/EditItem";
import AddItem from "./containers/AddItem";
import PublicLayout from "./Layout/PublicLayout";
import AppProvider from "./Provider/AppProvider";
import Profile from "./containers/Profile";

function App() {
  const router = createBrowserRouter([
    {
      element: <PublicLayout />,
      children: [
        {
          path: "/",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/add-item",
          element: <AddItem />,
        },
        {
          path: "/edit-item/:id",
          element: <EditItem />,
        },
        {
          path: "/profile",
          element: <Profile />
        }
      ],
    },

    
  ]);

  return (
    <>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
