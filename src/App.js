import React from 'react';
import { structureData } from './data/jsonData';
import Folder from './components/Folder';

import './App.css';
import Folder1 from './components/Folder1';

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

  // return <div className='app-body'>{renderUi()}</div>;

  return (
    <div className='app-body'>
      <Folder1 data={structureData} />
    </div>
  );
};

export default App;
