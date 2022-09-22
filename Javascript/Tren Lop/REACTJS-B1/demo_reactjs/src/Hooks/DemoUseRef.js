import React, { useRef, useState } from 'react';

export default function DemoUseRef() {
  let inputUserName = useRef(null);
  let inputPassword = useRef(null);

  let userName = useRef('');

  let [userLogin, setUserLogin] = useState({ userName: '' });

  const handleLogin = () => {
    // console.log('comInputUserName', inputUserName.current.name);
    // console.log('comInputUserName', inputUserName.current.className);
    // console.log('comInputPassword', inputPassword.current.value);

    console.log('userName', userName.current);
    console.log('userLogin', userLogin.userName);

    userName.current = 'abc';
    setUserLogin({
      userName: userName,
    });
  };
  return (
    <div className="container">
      <h3>Login</h3>
      <div className="form-group">
        <h3>UserName</h3>
        <input ref={inputUserName} name="userName" className="form-control" />
      </div>
      <div className="form-group">
        <h3>passWord</h3>
        <input ref={inputPassword} name="passWord" className="form-control" />
      </div>
      <button
        className="btn btn-success"
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
}
