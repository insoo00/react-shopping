import React, { createContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  password: string;
  name: string;
  email: string;
}

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState<User[]>([
    {
      id: 'user1',
      password: 'password1',
      name: 'User 1',
      email: 'user1@user.com',
    },
    {
      id: 'user2',
      password: 'password2',
      name: 'User 2',
      email: 'user2@user.com',
    },
  ]);

  const addUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = React.useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};