import React, { Component } from 'react';
// import '../index.css';
import style from './StyleWithJSX.module.scss';

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className="container">
        <h3>StyleWithJSX</h3>
        <p className="text-red">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt aliquid repellat cum maxime, qui quasi sunt
          illo ratione, explicabo nemo, earum dignissimos illum placeat! Qui laudantium magni facere fuga sed?
        </p>
        <p className={style.textRed}>Hello</p>
        <h3 className={`p-2 bg-dark ${style['text-blue']}`}>Hello frontend 28</h3>
        <hr />
        <div
          style={{
            color: 'red',
            background: `url(https://picsum.photos/500/500)`,
            height: 500,
            backgroundRepeat: 'no-repeat',
          }}
        >
          Hello cybersoft
        </div>
      </div>
    );
  }
}
