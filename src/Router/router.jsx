import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Gallery from "../components/Gallery";
import Art from "../components/Art";
import Loader from "../components/Loader"
 import { Suspense } from "react"; 

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/art" element={<Art />} />
        <Route
          path="/art"
          element={
            <Suspense fallback={<Loader />}>
              <Art />
            </Suspense>
          }
          />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
