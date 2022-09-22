import React, { useState } from 'react';

export default function DemoHookUseState(props) {
  // (1) this.state = {like: 0}
  // (2) this.setState(newState)
  //tuple
  let [state, setState] = useState({ like: 0 });

  const handleLike = () => {
    setState({
      like: state.like + 1,
    });
  };
  return (
    <div className="container m-5">
      <div className="card text-left">
        <img
          style={{ height: 250, width: 250 }}
          className="card-img-top"
          src="https://picsum.photos/200/200"
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">Picture</h4>
          <p style={{ color: 'red' }} className="card-text">
            {state.like} like
          </p>
        </div>
      </div>
      <button className="btn btn-danger" onClick={handleLike}>
        Like
      </button>
    </div>
  );
}
