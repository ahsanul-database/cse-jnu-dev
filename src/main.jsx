import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./components/Home.jsx";
import Academic from "./components/Academic.jsx";
import Faculty from "./components/Faculty.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Students from "./pages/Students.jsx";
import Portfolio from "./portfolio/Portfolio.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import Routine from "./components/Routine.jsx";
import StudentData from "./pages/StudentData.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";
import Notes from "./pages/Notes.jsx";
import Tutorial from "./pages/Tutorial.jsx";
import TutorialX from "./pages/TutorialX.jsx";
import QuestionBank from "./pages/QuestionBank.jsx";
import TutorialNew from "./pages/TutorialNew.jsx";
import FeaturesLog from "./pages/FeaturesLog.jsx";
import Login from "./pages/Login.jsx";
import PrivateRoute from "./pages/PrivateRoute.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "academic",
        element: <Academic />,
        children: [
          {
            path: "routine",
            element: <Routine />,
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/routine1312.json"
              ),
          },
          {
            path: "notes",
            element: (
              <PrivateRoute>
                <Notes />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/notes13.json"
              ),
          },
          {
            path: "tutorialX",
            element: (
              <PrivateRoute>
                <Tutorial />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "tutorial",
            element: (
              <PrivateRoute>
                <TutorialX />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "TutorialNew",
            element: <TutorialNew />,
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/tutorials.json"
              ),
          },
          {
            path: "questionbank",
            element: (
              <PrivateRoute>
                <QuestionBank />
              </PrivateRoute>
            ),
            loader: () =>
              fetch(
                "https://raw.githubusercontent.com/ahsanul-database/cse-jnu-serverr/main/QtbBank.json"
              ),
          },
        ],
      },
      {
        path: "students",
        element: <StudentData />,
        children: [
          {
            path: "profileCard",
            element: <StudentProfile />,
            loader: () =>
              fetch("https://cse-jnu-server.vercel.app/allDataofCSE13"),
          },
          {
            path: "idCard",
            element: (
              <PrivateRoute>
                <Students />
              </PrivateRoute>
            ),
            loader: () =>
              fetch("https://cse-jnu-server.vercel.app/allDataofCSE13"),
          },
        ],
      },
      {
        path: "students/profileCard/:id",
        element: <Portfolio />,
        loader: ({ params }) =>
          fetch(
            `https://cse-jnu-server.vercel.app/allDataofCSE13/${params.id}`
          ),
      },
      {
        path: "faculty",
        element: <Faculty />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/features",
    element: <FeaturesLog />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
