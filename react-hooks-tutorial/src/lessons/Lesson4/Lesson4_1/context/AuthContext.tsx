import { createContext, ReactNode, useContext, useState } from 'react';

type User = {
  id: string;
  username: string;
  email: string;
};

interface AuthContextType {
  user: User | null;
  login: (userInfo: User) => void;
  logout: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userInfo: User) => {
    if (
      userInfo.username === 'testUser' &&
      userInfo.email === 'test@gmail.com'
    ) {
      setUser(userInfo);
    } else {
      console.log("You can't logged in");
    }
  };
  const logout = () => {
    setUser(null);
  };

  const contextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
