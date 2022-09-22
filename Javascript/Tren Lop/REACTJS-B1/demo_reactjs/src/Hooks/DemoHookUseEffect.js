import React, { useState, useEffect } from 'react';
import ChildUseEffect from './ChildUseEffect';

export default function DemoHookUseEffect(props) {
  let [number, setNumber] = useState(1);

  let [like, setLike] = useState(1);
  console.log(like);

  //cách viết thay thế cho componentdidmount
  useEffect(() => {
    console.log('didmount');
  }, []);

  //cách viết thay thế componentdidupdate
  useEffect(() => {
    console.log('didUpdate khi number thay đổi');
    return () => {
      console.log('willunmout');
    };
  }, [number]);

  console.log('render');

  const handleIncrease = () => {
    let newNumber = number + 1;
    setNumber(newNumber);
  };

  return (
    <div className="m-5">
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        like
      </button>
      <div className="card text-left" style={{ width: 200, height: 300 }}>
        <img
          style={{ width: 200, height: 200 }}
          className="card-img-top"
          src="https://thumb.fatoda.com/image/2016/09/soai-ca-quan-nhan-nguyen-hai-duong-trut-bo-hinh-anh-hot-boy.jpg"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{number} like</h4>
        </div>
      </div>

      <button className="btn btn-success" onClick={handleIncrease}>
        +
      </button>

      {like === 1 ? <ChildUseEffect /> : ''}
    </div>
  );
}
