import React, { useEffect, useState } from 'react';

export default function ChildUseEffect() {
  let [number, setNumber] = useState(1);

  console.log('render child');

  useEffect(() => {
    // viết cho didUpdate
    console.log('didUpdate');
    return () => {
      console.log('willunmout');
    };
  }, [number]);

  return <div className="btn btn-success">Gửi</div>;
}
