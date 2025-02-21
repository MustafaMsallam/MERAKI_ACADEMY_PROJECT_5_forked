import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Main from "../layouts/Main/index";
import MoviesPage from "../pages/Series and movies page/moviesPage";

import WelcomePage from "../pages/welcomePage/WelcomePage";

import SeriesPage from "../pages/Series and movies page/seriesPage";
import Login from "../pages/Login/login";
import Register from "../pages/register/register";
import MovieByGenre from "../pages/MovieByGenrePage/MovieByGenre";
import DashAdmin from "../pages/dashboard.Admin/dashAdmin";
import SecondaryNav from "../components/Navbar/navBar";
import BasicTable from "../pages/dashboard.Admin/BasicTable";
import Fav from "../pages/fav/Fav";

import Payment from "../pages/payment/Payment";

import MovieFullScreen from "../pages/MovieFullScreen/MovieFullScreen";
import Chat from "../pages/chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/main",
    element: <Main />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/movies",
    element: <Main />,
    children: [
      {
        path: "",
        element: <MoviesPage />,
      },
    ],
  },
  {
    path: "/favorites",
    element: <Main />,
    children: [
      {
        path: "",
        element: <Fav />,
      },
    ],
  },
  // {
  //   path: "/movies",
  //   element: <MoviesPage />,
  //   children : [
  //     {
  //       path : "",
  //       element : <Navbar/>
  //     }
  //   ]
  // },
  {
    path: "/series",
    element: <Main />,
    children: [
      {
        path: "",
        element: <SeriesPage />,
      },
    ],
  },
  {
    path: "/genre/:genreType/:genreId",
    element: <Main />,
    children: [
      {
        path: "",
        element: <MovieByGenre />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin-dashboard",
    element: <Main />,
    children: [
      {
        path: "",
        element: <BasicTable />,
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/FullScreen",
    element: <MovieFullScreen />,

  },
  {
    path: "Chat",
    element: <Chat/>,

  },
]);

export default router;
