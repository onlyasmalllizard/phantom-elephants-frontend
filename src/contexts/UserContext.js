import React, { useContext, createContext, useState } from 'react';

const UserContext = createContext();
// export your provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    imageUrl:
      'https://ih1.redbubble.net/image.521444957.7037/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg',
    name: 'Test User',
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
// export your consumer hook
export const useUserContext = () => {
  return useContext(UserContext);
};
