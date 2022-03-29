import React from 'react';
import { UserProvider } from './context/UserContext';
import RouteProvider from './routes/routes';

const App: React.FC = () => {
  return (
    <UserProvider>
      <RouteProvider />
    </UserProvider>
  );
}

export default App;
