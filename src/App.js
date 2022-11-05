import React from 'react';
import { structureData } from './data/jsonData';
import Folder from './components/Folder';

import './App.css';

const App = () => {
  const renderUi = () => {
    if (structureData && structureData.length > 0) {
      return (
        <>
          {structureData.map((d) => (
            <div key={d.id}>
              <Folder data={d} />
            </div>
          ))}
        </>
      );
    }
  };

  return <div className='app-body'>{renderUi()}</div>;
};

export default App;
