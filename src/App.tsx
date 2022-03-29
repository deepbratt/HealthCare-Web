import React from 'react';
import { UserProvider } from './context/UserContext';
import Layout from './layout';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Layout>
        <h1>Hello User!</h1>
      </Layout>
    </UserProvider>
  );
}

export default App;
