import { Routes, Route, Navigate } from "react-router-dom";
import DogsPage from "../../pages/DogsPage/DogsPage";
import NewDogPage from "../../pages/NewDogPage/NewDogPage";
import "./Layout.css";

const Layout = (): JSX.Element => {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Navigate to="/dogs" />} />
        <Route path="/dogs" element={<DogsPage />} />
        <Route path="/create" element={<NewDogPage />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    </div>
  );
};

export default Layout;
