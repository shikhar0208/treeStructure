import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Folder1 from './Folder1';

const DisplayContent = (props) => {
  debugger;
  const [expand, setExpand] = useState(false);
  const { data, keyName, isFile } = props;

  const displayFile = (arg) => {
    return <p className='file'>{`${arg.contentName}.${arg.contentType}`}</p>;
  };

  const displayFolder = (arg, key) => {
    return (
      <div className='folder'>
        <p onClick={() => setExpand(!expand)}>
          {key} <span>{expand ? <BsChevronUp /> : <BsChevronDown />}</span>
        </p>
        <div className={expand ? 'display-content' : 'hide'}>
          <Folder1 data={arg} />
        </div>
      </div>
    );
  };

  const ui = () => {
    if (isFile) {
      return displayFile(data);
    } else {
      return displayFolder(data, keyName);
    }
  };

  return <div>{ui()}</div>;
};

export default DisplayContent;
