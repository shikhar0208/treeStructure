import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

import './styles.css';

const Folder = (props) => {
  const { data } = props;
  const [expand, setExpand] = useState(false);

  const displayFolder = () => {
    return (
      <div className='folder'>
        <p onClick={() => setExpand(!expand)}>
          {data.name}{' '}
          <span>{expand ? <BsChevronUp /> : <BsChevronDown />}</span>
        </p>
        <div className={expand ? 'display-content' : 'hide'}>
          {data?.items?.map((d) => (
            <div key={d.id}>
              <Folder data={d} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const displayFile = () => {
    return (
      <>
        <p className='file'>{data.name}</p>
      </>
    );
  };

  const ui = () => {
    if (data.isFolder) {
      return displayFolder();
    } else {
      return displayFile();
    }
  };

  return <div>{ui()}</div>;
};

export default Folder;
