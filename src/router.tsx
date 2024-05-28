import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/pages";

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
  </Routes>
);
