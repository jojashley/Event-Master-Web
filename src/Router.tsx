import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignIn from "./pages/Sign in";
import Events from "./pages/Events";


export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
