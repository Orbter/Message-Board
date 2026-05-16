import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { fetchFreshUserData } from '@/hooks/fetchFreshUserData';

interface User {
  id: string;
  name: string;
}
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFreshUserData({ setIsLoading, setUser });
  }, []);
  const login = (userData: User) => {
    localStorage.setItem('user_id', userData.id);
    setUser(userData);
  };
  const logout = () => {
    localStorage.removeItem('user_id');
    setUser(null);
  };
  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
}

function useProvider() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useProvider must be used inside a UserProvider component');
  }

  return context;
}

export { UserProvider, useProvider };
