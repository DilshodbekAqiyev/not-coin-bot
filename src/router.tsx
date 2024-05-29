import { Route, Routes } from "react-router-dom";
import { BoostsPage, HomePage } from "./components/pages";

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/boosts" Component={BoostsPage} />
  </Routes>
);
