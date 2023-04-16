import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import DisplayContent from './DisplayContent';

const Folder1 = (props) => {
  let { data } = props;
  const [expand, setExpand] = useState(false);

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
    let keys = Object.keys(data);
    return keys.map((k) => {
      if (data[k].isFile) {
        // return displayFile(data[k]);
        return <DisplayContent data={data[k]} keyName={k} isFile={true} />;
      } else {
        // return displayFolder(data[k], k);
        return <DisplayContent data={data[k]} keyName={k} isFile={false} />;
      }
    });
  };

  return <div>{ui()}</div>;
};

export default Folder1;
