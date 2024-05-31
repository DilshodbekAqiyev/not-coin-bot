import { Route, Routes } from "react-router-dom";
import {
  BoostsPage,
  FriendsPage,
  HomePage,
  RanksPage,
} from "./components/pages";

export const AppRouter = () => (
  <Routes>
    <Route path="/" Component={HomePage} />
    <Route path="/boosts" Component={BoostsPage} />
    <Route path="/ranks" Component={RanksPage} />
    <Route path="/friends" Component={FriendsPage} />
  </Routes>
);
