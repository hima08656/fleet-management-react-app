import { useCallback, useState } from "react";

export type AuthState = {
  isAuthenticated: boolean;
};

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false });

  const login = useCallback(() => setAuth({ isAuthenticated: true }), []);
  const logout = useCallback(() => setAuth({ isAuthenticated: false }), []);

  return { auth, login, logout };
}
