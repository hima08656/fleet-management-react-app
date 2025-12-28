import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  const { auth, login, logout } = useAuth();
  const isAuthenticated = auth.isAuthenticated;

  const authProps = useMemo(
    () => ({ isAuthenticated, login, logout }),
    [isAuthenticated, login, logout]
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login {...authProps} />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Admin {...authProps} />
            </ProtectedRoute>
          }
        />
        {/* Optional: redirect root to /login */}
        <Route path="/" element={<Login {...authProps} />} />
      </Routes>
    </BrowserRouter>
  );
}

