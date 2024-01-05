// import { useState } from 'react'
import Formikform from "./pages/SignUp/FormikformTwo";
import FormikformThree from "./pages/Login/FormikformThree";
import Home from "./pages/Home/index";
import Layout from "./layout";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Fragment } from "react";
import CategoryList, { loader as CategoryLoader } from "./pages/Category";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/sign-up" element={<Formikform />}></Route>
      <Route path="/log-in" element={<FormikformThree />}></Route>
      <Route index element={<Home />}></Route>
      <Route loader={CategoryLoader} path="/category">
        <Route index element={<CategoryList />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 m-7 w-full">
        <h1
          className="text-5xl my-7 text-center p-7
         not-italic font-medium "
        >
          A Simple Form
        </h1>
        <RouterProvider router={router} />
      </div>
    </Fragment>
  );
}

export default App;
