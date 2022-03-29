import React from 'react';
import { UserProvider } from './context/UserContext';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="App">
        <h1>HealthCare App</h1>
      </div>
    </UserProvider>
  );
}

export default App;
