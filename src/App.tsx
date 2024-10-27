import React from 'react';
import MainContent from './components/MainContent';
import Player from './components/Player';

function App() {
  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex overflow-hidden">
        <MainContent />
      </div>
      <Player />
    </div>
  );
}

export default App;