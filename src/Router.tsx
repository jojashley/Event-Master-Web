import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { Home } from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignIn from "./pages/Sign in";
import Events from "./pages/Events";
import { getSupplier } from "./store";

export const AppRouter: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getSupplier() !== null);

  useEffect(() => {
    // Actualizar el estado de login en AppRouter cuando haya cambios en sessionStorage
    const handleStorageChange = () => setIsLoggedIn(getSupplier() !== null);
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Routes>
      {isLoggedIn ? (
        <Route path="/" element={<RouterLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign_up" element={<Login />} />
        </>
      )}
    </Routes>
  );
};

export default AppRouter;
