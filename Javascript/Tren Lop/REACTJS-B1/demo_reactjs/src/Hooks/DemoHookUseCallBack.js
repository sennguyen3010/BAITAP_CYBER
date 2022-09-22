import React, { useState, useCallback } from 'react';
import ChildUseCallBack from './ChildUseCallBack';

export default function DemoHookUseCallBack() {
  let [like, setLike] = useState(1);

  const renderNotify = () => {
    return `Bạn đã thả ${like} tym`;
  };

  let callbackRenderNotify = useCallback(renderNotify, [like]);

  return (
    <div className="m-5">
      Like: {like}
      <br />
      <span
        style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
        onClick={() => {
          {
            setLike(like + 1);
          }
        }}
      >
        tym
      </span>
      <br />
      <br />
      <ChildUseCallBack renderNotify={callbackRenderNotify} />
    </div>
  );
}
