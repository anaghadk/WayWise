// contexts/AuthContext.tsx
import React, { ReactNode, createContext, useContext, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    console.log("AuthContext - Setting user:", userData);
    setUser(userData);
  };

  const logout = () => {
    console.log("AuthContext - Logging out user");
    setUser(null);
  };

  const isAuthenticated = user !== null;

  // Debug log whenever user state changes
  React.useEffect(() => {
    console.log("AuthContext - User state changed:", user);
    console.log("AuthContext - Is authenticated:", isAuthenticated);
  }, [user, isAuthenticated]);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
