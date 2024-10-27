import React from 'react';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex overflow-hidden">
        <MainContent />
      </div>
    </div>
  );
}

export default App;